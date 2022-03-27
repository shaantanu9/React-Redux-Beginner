import { createStore } from "redux";

const initData = {
  products: [
    { pName: "Apple", price: 20 },
    { pName: "mango", price: 25 },
    { pName: "orange", price: 30 },
    { pName: "brinjal", price: 50 },
    { pName: "tomato", price: 90 }
  ],
  cart: [
    { pName: "Apple", price: 20 },
    { pName: "mango", price: 25 },
    { pName: "Apple", price: 20 },
    { pName: "mango", price: 25 }
  ],
  total: 0
};

const reducer = (state = initData, action) => {
  return state;
};

const store = createStore(reducer);

export default store;
