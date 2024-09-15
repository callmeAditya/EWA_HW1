import React, { useEffect, useState } from "react";
import "./products.scss";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import queryString from "query-string";
import { useSelector } from "react-redux";

const Products = () => {
  const history = useNavigate();
  const params = useParams();
  const location = useLocation();
  const products = useSelector((state) => state?.productsReducer?.products);
  const lightings = useSelector((state) => state?.productsReducer?.lightings);
  const speakers = useSelector((state) => state?.productsReducer?.speakers);
  const [arr, setArr] = useState([]);
  const maker = queryString.parse(location.search)?.maker;

  useEffect(() => {
    console.log(location.pathname, queryString.parse(location.search));
    switch (location.pathname) {
      case "/lighting":
        setArr([
          ...products?.filter((item) => item?.header === "lighting")[0]?.data,
        ]);
        break;
      case "/speaker":
        setArr([
          ...products?.filter((item) => item?.header === "speaker")[0]?.data,
        ]);
        break;
      case "/doorbell":
        setArr([
          ...products?.filter((item) => item?.header === "doorbell")[0]?.data,
        ]);
        break;
      case "/thermostat":
        setArr([
          ...products?.filter((item) => item?.header === "thermostat")[0]?.data,
        ]);
        break;
      case "/doorlock":
        setArr([
          ...products?.filter((item) => item?.header === "doorlock")[0]?.data,
        ]);
        break;
      default:
        setArr([]);
    }

    if (maker !== "all") {
      console.log(
        maker,
        arr,
        arr.filter((item) => item?.maker === maker)
      );

      // setArr([...arr.filter(item=>item?.maker === maker)]);
    }
  }, [history, params, products, maker]);

  //   useEffect(()=>{
  //     console.log(lightings, products?.filter(item=>item?.header === 'lighting')[0]?.data);

  //   },[lightings,products])

  useEffect(() => {
    // console.log(arr);
    // if(arr.length>0 && maker !== 'all'){
    //     setArr([...arr.filter(item=>item?.maker===maker)]);
    // }
  }, [arr, maker]);

  const checkpagetype = (maker) => {
    if (maker === "all") return arr;

    return arr.filter((item) => item?.maker === maker);
  };

  let tmp = [
    {
      image: "doorlock1.webp",
      price: 200,
      name: "havells corna",
      type: "doorlock",
      brand: "havells",
      id: "101",
    },
    {
      image: "doorlock1.webp",
      price: 300,
      name: "havells corna 1",
      type: "doorlock",
      brand: "havells",
      id: "102",
    },
    {
      image: "doorlock1.webp",
      price: 300,
      name: "havells corna 2",
      type: "doorlock",
      brand: "havells",
      id: "103",
    },
    {
      image: "doorlock1.webp",
      price: 300,
      name: "havells corna 3",
      type: "doorlock",
      brand: "havells",
      id: "104",
    },
  ];
  checkpagetype(maker).map((item, id) => {
    console.log(item?.image);
  });
  return (
    <>
      <div className="row">
        {checkpagetype(maker).map((item, id) => (
          <div className="col-lg-4">
            <div
              onClick={() =>
                history(
                  `${location.pathname}/item?maker=${item?.brand}&id=${item?.id}`
                )
              }
              className="prod_box"
            >
              <img
                alt="sananml"
                // src="doorbell2.png"
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
    </>
  );
};

export default Products;
