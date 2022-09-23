import React, { useReducer, useState } from "react";
import reducer from "../reducer/reducer";
function Result(props) {
  const [select, setSelect] = useState("");
  const [inpfirst, setInpfirst] = useState("");
  const [inpsecond, setInpsecond] = useState("");
  const [state, dispatch] = useReducer(reducer, { result: 1 });
  const count = () => {
    dispatch({ type: select, payload: 20 });
  };

  console.log(state);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        placeholder="first num"
        onChange={(e) => setInpfirst(e.target.value)}
      />
      <select name="" id="" onChange={(e) => setSelect(e.target.value)}>
        <option value="QOSHISH">+</option>
        <option value="AYRISH">-</option>
        <option value="BOLISH">/</option>
        <option value="KOPAY">*</option>
      </select>
      <input
        type="text"
        placeholder="second num"
        onChange={(e) => setInpsecond(e.target.value)}
      />
      <span onClick={count}>=</span>
      <p>0</p>
    </div>
  );
}

export default Result;
