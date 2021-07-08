import React, { useState } from "react";

const Inputsection = (props) => {
  //console.log("all props", props);
  //const [InputValue, setInputValue] = useState("");

  const [inputvalue, setInputValue] = useState("");

  const getValueFromField = (e) => {
    setInputValue(e.target.value);
  };

  const submitToMainList = (value) => {
    props.dataUpdate(value);
    setInputValue("");
  };

  return (
    <div style={{ backgroundColor: "yellow", padding: 8, margin: 2 }}>
      <input
        type="text"
        name="listInput"
        placeholder="Enter Item"
        value={inputvalue}
        onChange={(e) => getValueFromField(e)}
        style={{ height: 30, width: "100%" }}
      />
      <button
        onClick={() => submitToMainList(inputvalue)}
        style={{ width: "20%", height: 35, cornerRadius: 10, marginTop: 5 }}
      >
        Add
      </button>
      <button
        onClick={() => submitToMainList(-1)}
        style={{ width: "20%", height: 35, cornerRadius: 10, marginTop: 5 }}
      >
        Clear
      </button>
    </div>
  );
};
export default Inputsection;
