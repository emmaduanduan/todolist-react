import React, { useState } from "react";

export default function Todobody(props) {
  return (
    <div>
      {props.addArr.map((element) => {
        return (
          <div>
            <h4>{element}</h4>
            <button
              onClick={() => {
                props.delFunc(element);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
