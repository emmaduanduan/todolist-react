import React, { useState } from "react";
import "./weather.css";
export default function(props) {
  const [myInput, setMyInput] = useState("");
  const [myState, setMyState] = useState(false);
  const [myShow, setMyShow] = useState("");
  const changeColor = () => {
    setMyState(!myState);
  };
  const comeDown = () => {
    setMyShow(myInput);
    if (myInput === "热") {
      setMyState(true);
    }
  };
  return (
    <div>
      <input
        onChange={(e) => {
          setMyInput(e.target.value);
        }}
        placeholder="Enter something."
      ></input>
      <button onClick={comeDown}>Confirm</button>

      <h4 className={myState ? "hot" : "cold"}>{myShow}</h4>
      <button onClick={changeColor}>change</button>
    </div>
  );
}
