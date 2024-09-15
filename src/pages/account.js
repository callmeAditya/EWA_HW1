import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { productsActions } from "../redux/actions/products";
import { cartActions } from "../redux/actions/cart";

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let obj={
     "brand": "",
    "maker": "",
    "name": "",
    "image": "",
    "description": "",
    "id": "",
    "price": 0,
    "discount": 0,
    "warranty": 0,
}
const Account =()=>{

    const isAuthenticated = useSelector((state)=>state?.userReducer?.isAuthenticated);
    const products = useSelector((state)=>state?.productsReducer?.products);
    const getcustomers = useSelector((state)=>state?.userReducer?.users);
    const getorders = useSelector(state=>state?.cartReducer?.placedorder);
    const history = useNavigate();
    const location = useLocation();
    const query = queryString.parse(location.search);
    const [addprod, setAddProd] = useState(null);
    const [category, setCategory] = useState('');
    const [frm, setFrm]=useState(obj)
    const [items, setItems] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [orders, setOrders] = useState([]);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(getcustomers)
        setCustomers([...getcustomers])
    },[getcustomers])
    
    useEffect(()=>{
        if(getorders)
        setOrders([...getorders])
    },[getorders])

    useEffect(()=>{
        if(products){
            setItems([...products]);
        }
    },[products])

    useEffect(()=>{
        if(query?.create === 'product'){
            setAddProd(true);
        }
    },[query])

    const handlechange = (e)=>{
        if(e.target.name === 'category'){
            setCategory(e.target.value);
        }
        else if (e.target.name === 'brand'){
            setFrm({...frm, ['brand']: e.target.value, 'maker': e.target.value});
        }
        else if (e.target.name === 'name'){
            setFrm({...frm, ['name']: e.target.value});
        }
        else if (e.target.name === 'image'){
            setFrm({...frm, ['image']: e.target.value});
        }
        else if (e.target.name === 'description'){
            setFrm({...frm, ['description']: e.target.value});
        }
        else if (e.target.name === 'id'){
            setFrm({...frm, ['id']: e.target.value});
        }
        else if (e.target.name === 'price'){
            setFrm({...frm, ['price']: parseInt(e.target.value)});
        }
        else if (e.target.name === 'discount'){
            setFrm({...frm, ['discount']: parseInt(e.target.value)});
        }
        else if (e.target.name === 'warranty'){
            setFrm({...frm, ['warranty']: parseInt(e.target.value)});
        }
        

    }

    const handaddsubmit=()=>{
        if(addprod){
            let obj={
                ...frm, 
                header:category,
               
            }
            dispatch(productsActions.addProduct(obj));
        }
    }

    const handledelete = (data, header)=>{
        console.log(data);
        dispatch(productsActions.removeProduct({...data, header}));
        
    }

    const getDate=(date)=>{
      
        const d = new Date(date);
        console.log(date);
        
        
        // return ""
        return d.getDate()+" "+ month[d.getMonth()].substring(0,3);
    }

    const handlecancel=(item)=>{
        console.log(item);
        
       dispatch( cartActions.cancelorder(item))
    }

    return(
        <>
       {
        (()=>{
            switch(isAuthenticated?.usertype){
                case 'storagemanager':
                    return(
                        <>
                        {/* {JSON.stringify(query)} */}
                       <div><button style={{float:'right'}} onClick={()=>{history('/account?create=product')}}>  + Add new product</button> </div>
                       {
                        items?.map((data,key)=>(
                            <div>
                                <h4>{data?.header}</h4>
                                <div>

                                { data?.data?.map((d,k)=>(
                                    <div style={{display:'inline-block', width:'200px', marginTop:'20px'}} key={k}>
                                        <img style={{width:'50px'}} src={d?.image} />
                                        <p style={{marginBottom:'5px'}}>{d?.name} </p>
                                        <button style={{padding:'8px'}} onClick={()=>{handledelete(d,data?.header)}} >Delete</button>

                                    </div>
                                ))
                                
                            }
                            </div>

                            </div>
                        ))
                       }
                        {
                            addprod && <>
                            <h4>Add Product</h4>
                            <label>Choose Category:
                                <select name="category" id="category" onChange={handlechange} >
                                    <option value="">Select</option>
                                    <option value="lighting">Lighting</option>
                                    <option value="speaker">Speaker</option>
                                    <option value="doorbell">Doorbell</option>
                                    <option value="doorlock">Doorlock</option>
                                    <option value="thermostat">Thermostat</option>
                                </select>
                            </label>

                            {
                                category && <div className="flexcol" style={{width:'200px'}}>
                                    <label>Add brand</label>
                                    <input onChange={handlechange}  type="text" name="brand"/>
                                    <label>Add name</label>
                                    <input onChange={handlechange} type="text" name="name"/>
                                    <label>Add description</label>
                                    <input onChange={handlechange} type="text" name="description"/>
                                    <label>Add id</label>
                                    <input onChange={handlechange} type="text" name="id"/>
                                    <label>Add price</label>
                                    <input onChange={handlechange} type="text" name="price"/>
                                    <label>Add discount</label>
                                    <input onChange={handlechange} type="text" name="discount"/>
                                    <label>Add warranty</label>
                                    <input onChange={handlechange} type="text" name="warranty"/>
                                    <button type="submit" onClick={handaddsubmit} >Submit</button>
                                </div>
                            }


                            </>
                        }
                       <div className="row">{
                        <div className="col-lg-4">

                        </div>
                        }
                       </div>










                        </>
                    )
                case 'salesman':
                    return(
                        <>
                        <h2>Hello {isAuthenticated?.user}</h2>

                        </>
                    )
                 case 'customer':
                    return(
                        <>
                        <h2>Hello {isAuthenticated?.user}</h2>
                        <h3>{ orders?.length >0 ? "Your orders are listed below:" : "Your cart is empty"}</h3>
                        {
                            orders?.filter(o=>o?.userid === isAuthenticated?.userid).map((item,key)=>(
                                <div key={key}>
                                    Your order with Order#{item?.oid}:
                                    <table>
                                        <thead>
                                            <tr>
                                                <td>Image</td><td>Name</td><td>Price</td><td>Status</td><td></td><td></td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            item?.order?.products?.map((ord,k)=>(
                                                <tr key={k}>
                                                    <td> <img style={{width:'100px'}}  src={ord?.image}/> </td>
                                                    <td> <h3>{ord?.name ? ord?.name : ord?.type}</h3></td>
                                                    <td>  <p>${ord?.price}</p></td>
                                                    {/* <td>Arriving on:{getDate(item?.datearrival)} </td>
                                                    <td>Cancel before:{getDate(item?.datacancel)} </td>
                                                    <td><button onClick={()=>handlecancel(item)} >Remove</button></td> */}

                                                </tr>
                                            ))
                                        }
                                        <tr>
                                            <td></td><td>Total:</td><td><span> {parseFloat((item?.order?.total).trim())}</span></td><td>Arriving on:{getDate(item?.datearrival)} </td>
                                                    <td>Cancel before:{getDate(item?.datacancel)} </td>
                                                    <td><button onClick={()=>handlecancel(item)} >Remove</button></td>
                                        </tr>

                                        </tbody>
                                        </table>
                                        
                                        
                                    


                                </div>
                            ))
                        }

                        </>
                    )
                default : return <> </>
            }
        })()
       }
        </>
    )
}

export default Account;