import { useContext } from "react"
import { projectContext } from "../store/use-context"

export default function Results(){
   const result= useContext(projectContext)

    return(
        <ul>
            {result.data.map((object, index)=>{
                
                return <li key={index}>
                    {object.name}
                </li>
            })}
        </ul>
    )
}