export default function ProjectDetails({handleTitle, handleDescription, handleDueDate, handleSave, title, description,dueDate}) {
    //state uplifted(fun) to App.js 
  return (
    <div align="center">
      <label>TITLE</label>
      <input type="text" onChange={handleTitle} value={title}/> <br />
      <label>DESCRIPTION</label>
      <input type="text" onChange={handleDescription} value={description}/> <br />
      <label>DUE DATE</label>
      <input type="date" onChange={handleDueDate} value={dueDate}/> <br />
      <button onClick={handleSave}>Save</button>
      <button>Cancel</button>
    </div>
  );
}
