import React, { useState } from "react";
import "./weather.css";

export default function Weather() {
  const [myState, setMyState] = useState(true);
  const changeWeather = () => {
    setMyState(!myState);
  };

  return (
    <div className={myState ? "hot" : "cold"}>
      <h1>今天天气很{myState ? "炎热" : "寒冷"}。</h1>
      <button onClick={changeWeather}>change</button>
    </div>
  );
}
