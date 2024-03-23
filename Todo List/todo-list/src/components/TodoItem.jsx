//uplift import useState

import { useState } from "react";

//Array

export default function TodoItem({
  /*useState()*/
  handleInputChange,
  newInputValue,
  handleClickProp,
  /*handleChange function
handleClick function */
}) {
  //copy of Array
  //if condition
  
  return (
    <div>
      <label>New Item</label>
      <p>
        <input type="text" onChange={handleInputChange} value={newInputValue} />{" "}
      </p>
      <button onClick={handleClickProp}>Add</button>
    </div>
  );
}
