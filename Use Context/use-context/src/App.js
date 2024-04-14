import Results from "./components/Results";
import UserInput from "./components/UserInput";

import { useState } from "react"
import { projectContext } from "./store/use-context";

function App() {
  const[name, setName]=useState("")
    const[data, setData]=useState([])

    function handleName(event){
        setName(event.target.value)
    }

    function handleSave(){
        setData((prevState)=>{
            var copyData=[...prevState]
            copyData.push({
             name: name   
            })
            return copyData;
        })
    }
    var dataValue={
      handleName:handleName,
      handleSave:handleSave,
      name:name,
      data:data
    } 
  return (
    <projectContext.Provider value={dataValue}>
    <UserInput /> 
    <Results />
    </projectContext.Provider>
  );
}

export default App;
