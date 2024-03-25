export default function TodoItem({ handleChange, handleClick, userInputData }) {
  // state uplift
  //function handleChange
  //function handleClick
  return (
    <div>
      <label>New Item</label>
      <input type="text" onChange={handleChange} value={userInputData} />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
