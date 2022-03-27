//import {useState, useEffect,useRef} from 'react'
//import Cart from './components/Cart'
import { useSelector } from "react-redux";
const Cart = (props) => {
  let cart = useSelector((state) => state.cart);
  // let cart = [
  //   { pName: "Apple", price: 20 },
  //   { pName: "mango", price: 25 }
  // ];
  return (
    <>
      <h1>Cart</h1>
      <div className="customDiv">
        <ul>
          {cart.map((ele, index) => (
            <li key={index}>{`${ele.pName} - ${ele.price}`}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Cart;
