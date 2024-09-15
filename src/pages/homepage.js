import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import routes from "../routes/routes";

const Homepage = ()=>{

    const history = useNavigate();

    const data=[
        {
            "brand": "Havells",
            "maker": "Havells",
            "name": "Havells syllium",
            "type":"lighting",
            "image": "/images/lighting/lighting1.jpeg",
            "description": "Lorem ipsum magnate",
            "id": "hv101",
            "price": 200,
            "discount": 10,
            "warranty": 200,
            "rebate": 50,
            "accessories": [
              {
                "type": "wire",
                "description": "Wires",
                "price": 40,
                "image":"/images/lighting/accessory2.jpeg",
                "id":"acc01"
              },
              {
                "type": "holder",
                "description": "Holder",
                "price": 40,
                "image":"/images/lighting/accessory1.webp",
                "id":"acc02"
              }
            ]
        },
        {
            "type":"speaker",
            "brand": "Apple",
            "maker": "Apple",
            "name": "Apple mini",
            "image": "/images/speaker/speaker1.jpg",
            "description": "Lorem ipsum magnate",
            "id": "ap101",
            "price": 259,
            "discount": 10,
            "warranty": 130,
            "rebate": 30,
            "accessories": [
              {
                "type": "Stand",
                "description": "Lorem ipsum magnate",
                "price": 40,
                "image":"/images/speaker/accessory1.jpg",
                "id": "acc024"
              },
              {
                "type": "Wall mount",
                "description": "Lorem ipsum magnate",
                "price": 40,
                "image":"/images/speaker/accessory2.jpg",
                "id": "acc023"
              }
            ]
          },
          {
            "type":"doorbell",
            "brand": "Ecobee",
            "maker": "Ecobee",
            "name": "Ecobee Samara",
            "image": "/images/doorbells/doorbell1.jpg",
            "description": "Lorem ipsum magnate",
            "id": "ec101",
            "price": 119,
            "discount": 25,
            "warranty": 45,
            "rebate": 39,
            "accessories": [
              {
                "type": "Wall mount",
                "description": "Lorem ipsum magnate",
                "price": 40,
                "image":"/images/doorbells/accessory1.webp",
                "id": "acc0106"
              },
              {
                "type": "Wires",
                "description": "Lorem ipsum magnate",
                "price": 40,
                "image":"/images/speaker/accessory2.jpeg",
                "id": "acc0107"
              }
            ]
          },
    ];

    return(
        <div style={{width:'100%', height:"100%"}} className="neworder flecol">
    
        <h3>Welcom to SmartHomes</h3>
        <h4>Shop all kinds of smart devices!</h4>
        <h5>Great Discounts!</h5>
        <h5>Exciting Offeres </h5>
        <div className="row">
        {/* {JSON.stringify(checkpagetype(maker))} */}
        {data.map((item, id) => (
          <div className="col-lg-4">
            <div
              onClick={() =>{
                history(`/product/item?type=${item?.type}&maker=${item?.brand}&id=${item?.id}`)
            }
              }
              className="prod_box"
            >
              <img
                alt="sananml"
                src={item?.image}
              />
              <div className="price">
                <h3>{item?.name}</h3>
                <h3>${item?.price}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>



    
    
</div>
    )
}

export default Homepage;