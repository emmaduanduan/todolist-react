import React, { useState } from "react";
export default function again() {
  const [myInput, setMyInput] = useState("");
  const [myHead, setMyHead] = useState("");
  const [myState, setMyState] = useState(false);
  const comeHere = () => {
    setMyHead(myInput);
    if (myInput === "热") {
      setMyHead(true);
    }
  };
  const changeColor = () => {
    setMyState(!myState);
  };
  return (
    <div>
      <input
        onChange={(e) => {
          setMyInput(e.target.value);
        }}
      ></input>
      <button onClick={comeHere}>confirm</button>
      <h4 className={myState ? "hot" : "cold"}>{myHead}</h4>
      <button onClick={changeColor}>bian</button>
    </div>
  );
}
