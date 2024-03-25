import "./App.css";
import TodoItem from "./components/TodoItem";
import { useState } from "react";
import Todolist from "./components/TodoList";

function App() {
  const [userInputData, setUserInputData] = useState("");
  const [userData, setUserData] = useState([]);

  function handleChange(event) {
    setUserInputData(event.target.value);
  }

  function handleClick() {
    setUserData((prevState) => {
      let copyOfArray = [...prevState, userInputData];
      return copyOfArray;
    });
    setUserInputData("");
  }

  function handleDelete(index) {
    setUserData((prevState) => {
      let copyArray = [...prevState];
      copyArray.splice(index, 1);
      return copyArray;
    });
  }
  return (
    <div className="App">
      <TodoItem
        handleChange={handleChange}
        handleClick={handleClick}
        userInputData={userInputData}
      />
      <Todolist userData={userData} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
