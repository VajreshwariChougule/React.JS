import { useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";

var data = [];

function App() {
  const [inputValue, setInputValue] = useState("");
  const [userData, setUserData] = useState(data);
  const [clicks, setClicks] = useState(0);

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  const newData = [...data];
  function handleClick() {
    setClicks(clicks + 1);
    for (let i = 0; i <= clicks; i++) {
      newData.push({ newItem: inputValue });
      setUserData((preData) => [...preData, ...newData]);
    }
    console.log(newData);
    console.log(clicks)
  }

  function handleDelete(index) {
    const updatedData = [...newData];
    updatedData.splice(index, 1);
    setUserData(updatedData);
  }

  // if(add===true){

  //    console.log(newData)
  // }

  return (
    <div className="App">
      <TodoItem
        handleInputChange={handleChange}
        newInputValue={inputValue}
        handleClickProp={handleClick}
      />
      <TodoList userDataProp={userData} handleDeleteProp={handleDelete} />
    </div>
  );
}

export default App;
