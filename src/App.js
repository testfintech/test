import React, { useReducer } from "react";
// import reducer from "./reducer/reducer";
import "./App.css";
import Result from "./component/Result";

function App() {
  // const [state, dispatch] = useReducer(reducer, { num: 0 });
  // console.log(state);
  return (
    <div className="App">
      <h1>salom</h1>
      {/* <h2>{state.num}</h2> */}
      {/* <button onClick={() => dispatch({ type: "ADD_NUM" })}>+</button> */}
      <Result />
    </div>
  );
}

export default App;
