//import {useState, useEffect,useRef} from 'react'
//import Cart from './components/Cart'
const Cart = (props) => {
  let cart = [
    { pName: "Apple", price: 20 },
    { pName: "mango", price: 25 }
  ];
  return (
    <>
      <h1>Cart</h1>
      <div className="customDiv">
        <ul>
          {cart.map((ele, index) => (
            <li>{`${ele.pName} - ${ele.price}`}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Cart;
