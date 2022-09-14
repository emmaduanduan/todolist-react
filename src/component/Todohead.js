import React, { useState } from "react";
export default function Todohead(props) {
  const [myTodo, setMyTodo] = useState("");
  return (
    <div>
      <h3>To Do List</h3>
      <input
        id="aaa"
        value={myTodo}
        type="text"
        onChange={(e) => {
          setMyTodo(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          props.addFunc(myTodo);
          setMyTodo("");
          // document.getElementById("aaa").value = "";
        }}
      >
        add
      </button>
    </div>
  );
}
