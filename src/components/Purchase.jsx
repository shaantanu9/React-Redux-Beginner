//import {useState, useEffect,useRef} from 'react'

import { useSelector } from "react-redux";

//import Purchase from './components/Purchase'
const Purchase = (props) => {
  // const products = useSelector((state) => state.products);
  const products = useSelector(({ products }) => products);

  // const products = [
  //   // { pName: "Apple", price: 20 },
  //   // { pName: "mango", price: 25 },
  //   // { pName: "orange", price: 30 },
  //   // { pName: "brinjal", price: 50 },
  //   // { pName: "tomato", price: 90 }
  // ];

  return (
    <>
      <h1>Purchase</h1>
      <div className="customDiv">
        <select name="" id="">
          {products.map((element, index) => (
            <option value={element.price} key={index}>
              {element.pName} - {element.price}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Purchase;
