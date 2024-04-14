import { useState } from "react";


export default function HomeScreen({ handleAddProject, saveProjectDetails }) {
  const[displayObject, setDisplayObject]=useState('')
  const[isButtonClicked,setIsButtonClicked]=useState(false)
  
  function handleProjectButton(object){
    setDisplayObject(object)
    setIsButtonClicked(true)
  }
  return (
    <div align="center">
      <h1>Your Projects</h1>
      <button onClick={handleAddProject}>+Add Project</button>
      
        {
          <ul>
            {saveProjectDetails.map((object, index) => {
              return <li key={index}><button onClick={()=>handleProjectButton(object)}>{object.Title}</button></li>;
            })}
          </ul>
        }
        {isButtonClicked?<ul>
          <li>{displayObject.Title}</li>
          <li>{displayObject.Description}</li>
          <li>{displayObject.DueDate}</li>
        </ul>:""}
    </div>
  );
}
