import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const reducer = (state, action) => {
    // NON-SWITCH
    // if (action === "ADD") {
    //   console.log("this is state:", state + 1, "this is action", action);
    //   return (state += 1);
    // }
    // if (action === "MINUS") {
    //   console.log("this is state:", state + 1, "this is action", action);
    //   return (state -= 1);
    // }
    // if (action === "RESET") {
    //   console.log("this is state:", (state = 0), "this is action", action);
    //   return (state = 0);
    // }
    // return state;

    // USING SWITCH
    // NOTE* payload is there but unused
    switch (action.type) {
      case "ADD":
        state += 1;
        break;
      case "MINUS":
        state -= 1;
        break;
      case "RESET":
        state = 0;
        break;
      default:
        return state;
    }
    return state;
  };
  // const [value, setValue] = useState("");
  // count is the initial state in the reducer function, also count is the 0 passed as the second argument in useReducer
  const [count, dispatch] = useReducer(reducer, 0);
  console.log("this is count", count);
  return (
    <div className="App">
      <h1>Hello Eliot</h1>
      <h2>Press on the count buttons to edit count!</h2>
      <div>
        <span>
          <button onClick={() => dispatch({ type: "ADD", payload: 0 })}>
            Plus
          </button>
        </span>
        <span>
          <button onClick={() => dispatch({ type: "MINUS", payload: 0 })}>
            Minus
          </button>
        </span>
        <span>
          <button onClick={() => dispatch({ type: "RESET", payload: 0 })}>
            Reset
          </button>
        </span>
      </div>
      <h1>Count</h1>
      <h1>{count}</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
