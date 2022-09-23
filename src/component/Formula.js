import React, { useState } from "react";
export default function Formula(props) {
  const [myInput1, setMyInput1] = useState("");
  const [myInput2, setMyInput2] = useState("");
  const [myFormula, setMyFormula] = useState("11111");

  let a = 3;
  return (
    <div>
      <input
        onChange={(e) => {
          setMyInput1(e.target.value);
        }}
      ></input>
      <input
        onChange={(e) => {
          setMyInput2(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setMyFormula(myInput1 + "+" + myInput2);
        }}
      >
        confirm
      </button>

      <h4>{myFormula}</h4>
      <h2>
        {myInput1} + {myInput2}
      </h2>
      <button
        onClick={() => {
          console.log({ myInput1 });
        }}
      >
        bian
      </button>
    </div>
  );
}
