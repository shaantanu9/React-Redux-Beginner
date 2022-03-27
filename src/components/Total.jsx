//import {useState, useEffect,useRef} from 'react'
// import Total from './components/Total'
const Total = (props) => {
  let total = 0;
  return (
    <>
      <br />
      <h1>Total</h1>
      <div className="customDiv">
        <span>Total = {total}</span>
      </div>
    </>
  );
};

export default Total;
