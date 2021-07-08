import React, { useState } from "react";
import "./styles.css";
import Inputsection from "./components/Inputsection";
import Listsection from "./components/Listsection";

const initalStateUpdate = [
  {
    name:"Waking early in the morning",
    status:false
  },
  {
    name:"Going to gym",
    status:false
  },
  {
    name:"Having breakfast",
    status:false
  },
];

const App = () => {
  const [mainList, setMainList] = useState(initalStateUpdate);

  const addToMyList = (element) => {
    if (element === -1) {
      setMainList(initalStateUpdate);
      
    } else {
      let newArray = [...mainList];
      newArray.push({
        name:element,
        status:false
      });
      setMainList(newArray);
    }
  };

  const removeElementFromMainList = (index, action) => {
    // let newArray = [...mainList];
    // newArray.splice(index, 1);
    // setMainList(newArray);

    const completedTask = mainList.map((ele, ele_index) => {
      if (index === ele_index) {
        ele.status = !ele.status;
      }
      return ele;
    });
    setMainList(completedTask);
  };

  

  return (
    <div className="App" style={{ backgroundColor: "" }}>
      <h1>To Do Lists</h1>
      <Inputsection dataUpdate={(element) => addToMyList(element)} />
      <Listsection
        data={mainList}
        dataRemove={(index) => removeElementFromMainList(index)}
      />
    </div>
  );
};

export default App;
