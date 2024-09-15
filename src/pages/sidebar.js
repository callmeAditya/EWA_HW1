import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {

    const products = useSelector(state=>state?.productsReducer?.products);
    const [items, setItems] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(()=>{
        // setItems([...products]);
        let set = new Set();
        let arr=[];
        products.forEach(item=>{
            let obj={};
            obj['header'] = item?.header;
            let com = item?.data?.map(c=>c?.maker);
            obj['maker'] = _.toArray(new Set(com));

            arr.push(obj);
        })
        // console.log(arr);
        setItems([...arr]);
        
    },[products])
  return (
    <aside className="sidebar">
      <ul>
        {
            items?.map((data,key)=>(
                <li key={key}>
                    <h4>{(data?.header).toUpperCase()}</h4>
                    <ul>
                        {
                            data?.maker?.map((d,key)=>(
                                <li key={key}>
                                    <a href={`/${data?.header}?maker=${d}`}>{d}</a>
                                </li>
                            ))
                        }
                    </ul>

                </li>
            ))
        }
      

     
      </ul>
    </aside>
  );
};

export default Sidebar;
