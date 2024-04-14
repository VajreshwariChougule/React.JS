import { useContext } from "react"
import { projectContext } from "../store/use-context"




export default function UserInput(){
    const userInput= useContext(projectContext)
    
    return(
        <div>
            <label>Enter your name</label>
            <input type="text" onChange={userInput.handleName} value={userInput.name}/>
            <button onClick={userInput.handleSave}>Save</button>
        </div>
    )
}