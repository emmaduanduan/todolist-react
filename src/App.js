import React, { useState } from "react";
import Weather from "./component/weather";
import Self from "./component/self";
import Todohead from "./component/Todohead";
import Todobody from "./component/Todobody";
import Greetings from "./component/Greetings";
import Formula from "./component/Formula";
import Change from "./component/Change";
function App() {
  const [todoArray, setTodoArray] = useState(["吃饭", "睡觉"]);

  const addItem = (newItem) => {
    console.log(newItem);
    setTodoArray([...todoArray, newItem]);
  };
  const delItem = (item) => {
    window.confirm("r u sure?") &&
      setTodoArray(
        todoArray.filter((todo) => {
          return todo !== item;
        })
      );
  };
  let a = "hello";
  return (
    <div className="App">
      <h1>hello</h1>
      <Weather />
      <Self />
      <Todohead addFunc={addItem} />
      <Todobody addArr={todoArray} delFunc={delItem} a={a} />
      <br></br>
      <Greetings />
      <Formula />
      <Change />
    </div>
  );
}

export default App;
