import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions, placeorder } from "../redux/actions/cart";
import { useNavigate } from "react-router-dom";

const Checkout = ()=>{
    const dispatch = useDispatch();
    const history = useNavigate();
    const [deliv, setDelivery] = useState(null);
    const order = useSelector((state)=>state?.cartReducer?.order)
    const neworder = useSelector(state=>state?.cartReducer?.neworder);
    const isAuthenticated = useSelector(state=>state?.userReducer?.isAuthenticated);
    const [frm, setFrm]=useState({
        street:'',
        city:'',
        zipcode:'',
        state:'',
        credit:"",
        store:'',
        mode:deliv
    });
    let user ={
        id:'1234',
        name:"Aditya Rana",
        creditcard:'1234123412341234',
        street1:'333 s state st',
        street2: 'chicago 60616',
        city:'chicago',
        zipcode:'60616'
    }

    useEffect(()=>{
        setFrm({
            ...frm,
            mode:deliv
        })
    }, [deliv])

    // useEffect(()=>{
    //     if(placedorder.length>0){

    //     }
    // },[placedorder])


    const handlechange = (e)=>{
        if(e.target.name === 'street'){
            setFrm({
                ...frm,
                street:e.target.value
            })
        } 
        else if(e.target.name === 'city'){
            setFrm({
                ...frm,
                city:e.target.value
            })
        }
        else if(e.target.name === 'state'){
            setFrm({
                ...frm,
                state:e.target.value
            })
        }
         else if(e.target.name === 'zipcode'){
            setFrm({
                ...frm,
                zipcode:e.target.value
            })
        }
        else if(e.target.name === 'credit'){
            setFrm({
                ...frm,
                credit:e.target.value
            })
        }
        else if(e.target.name === 'store'){
            setFrm({
                ...frm,
                store:e.target.value
            })
        }
    }

    const handlesubmit = (e)=>{
        // console.log(e);
        const oid = parseInt(Math.random()*10000);

        // alert(oid)
        dispatch(cartActions.placeorder({...frm, oid, order,...isAuthenticated, dateplaced:new Date(), datearrival: new Date(+new Date + 12096e5), datacancel: new Date(+new Date + 432e6)}));
        
    }

    const handleok=()=>{
        dispatch(cartActions.emptycart({
            cart: [],
            order: {},
            neworder: null,
            // placeorder
        }));

        history('/');
    }

    return (
        <>
       {
            neworder ? <div>
                Your order is placed.
                Your order id is:
                <span>{neworder?.oid}</span>
                <button onClick={handleok} >OK</button>
            </div> :
            <>
            <h4>Hello {(order?.name).toUpperCase()}</h4>
        <h5>Your total order is ${order?.total}</h5>
        {/* {deliv} */}
        <h5>Choose Delivery Mode:</h5>
        <div className="flexrow">
        <span style={{marginRight:'10px'}} >Store Pick:</span>
        <input style={{marginRight:'20px'}} name="delivery" type="radio" value={null} onClick={()=>setDelivery('store-picker')} />

        <span style={{marginRight:'10px'}}>Home Delivery:</span>
        <input name="delivery" type="radio" value={deliv} onClick={()=>setDelivery('home-delivery')} />

       

        </div>
        {
            deliv && (deliv === 'store-picker' ?
            <div>

                <label for="stores">Choose Stores</label>

                    <select name="store" id="stores" onChange={handlechange} >
                    <option value="">Select</option>
                    <option value="60610">Bellward Avenue, Chicago 60610</option>
                    <option value="60611">Clark/Lake, Chicago 60611</option>
                    <option value="60612">Adler Chicago 60612</option>
                    <option value="60613">Richmond Chicago 60613</option> 
                    <option value="60614">Lincoln, Chicago 60614</option>
                    <option value="60615">Amherst, Chicago 60615</option>
                    <option value="60616">Cicero Chicago 60616</option>
                    <option value="60617">Cermak Chicago 60617</option>
                    <option value="60618">OakStreet Chicago 60618</option>
                    <option value="60619">West Loop Chicago 60619</option>
                </select>
                <label for="credit" >Enter Credit Card Info:
                <input placeholder="credit card" type="text" name="credit" onChange={handlechange} value={frm['credit']} />
                </label>
                <button type="submit" onClick={handlesubmit} >Submit</button>

            </div>
            : <div>
                <label for="street">Street: <input placeholder="street" type="text" name="street" onChange={handlechange} value={frm['street']} />  </label>    
                <label for="city">City: <input placeholder="city" type="text" name="city" onChange={handlechange} value={frm['city']} />  </label>    
                <label for="state">State: <input placeholder="state" type="text" name="state" onChange={handlechange} value={frm['state']} />  </label>    
                <label for="zipcode">Zip Code: <input placeholder="zipcode" type="text" name="zipcode" onChange={handlechange} value={frm['zipcode']} />  </label>    
                <label for="credit" >Enter Credit Card Info:
                <input placeholder="credit card" type="text" name="credit" onChange={handlechange} value={frm['credit']} />
                </label>
                <button type="submit" onClick={handlesubmit}>Submit</button>
            </div>)
        }
        
        
        {
            // JSON.stringify(frm)
        }
            </>
        }
        
        </>
    )
}

export default Checkout;