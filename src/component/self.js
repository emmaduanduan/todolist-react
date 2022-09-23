import React, { useState } from "react";
export default function Self() {
  const [myInput, setMyInput] = useState(0);
  const add = () => {
    setMyInput((prev) => {
      return +prev + 1;
    });
  };
  const minus = () => {
    setMyInput((prev) => {
      return +prev + 1;
    });
  };
  return (
    <div>
      <input
        type="number"
        step="2"
        onChange={(e) => {
          setMyInput(e.target.value);
        }}
        placeholder="Please enter a number."
      ></input>
      <input type="date"></input>
      <h3>{myInput}</h3>
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}
