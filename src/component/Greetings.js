import React, { useState } from "react";
export default function Greetings(props) {
  const [myInput, setMyInput] = useState("");

  return (
    <div>
      <input
        onChange={(e) => {
          setMyInput(e.target.value);
        }}
      ></input>

      <button>add</button>
      <h4>`Hello, {myInput}`</h4>
    </div>
  );
}
