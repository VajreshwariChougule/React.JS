import HomeScreen from "./components/HomeScreen";
import ProjectDetails from "./components/ProjectDetails";
import { useState } from "react";

function App() {
  const [isTrue, setIsTrue] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [saveProjectDetails, setSaveProjectDetails] = useState([]);

  function handleTitle(event) {
    setTitle(event.target.value);
  }
  function handleDescription(event) {
    setDescription(event.target.value);
  }
  function handleDueDate(event) {
    setDueDate(event.target.value);
  }
  function handleSave() {
    setSaveProjectDetails((prevState) => {
      var copySetSaveProjectDetails = [...prevState];
      copySetSaveProjectDetails.push({
        Title: title,
        Description: description,
        DueDate: dueDate,
      });
      return copySetSaveProjectDetails;
    });
    setIsTrue(false)
  }

  console.log(saveProjectDetails);

  function handleAddProject() {
    setIsTrue(true);
  }
  return (
    <div>
      <HomeScreen handleAddProject={handleAddProject} saveProjectDetails={saveProjectDetails}/>
      {isTrue ? <ProjectDetails
      handleTitle={handleTitle} 
      handleDescription={handleDescription}
      handleDueDate={handleDueDate}
      handleSave={handleSave}
      title= {title}
      description= {description}
      dueDate= {dueDate}
      /> : "Select a project or start with a new one"}
    </div>
  );
}

export default App;
