


export default function TodoList({ userDataProp, handleDeleteProp}){
    
    
    return(
        <div>
            <h3>Todo List</h3>
            
            {userDataProp.map((object, index)=>
            <ul key={index}>
                
                <li>
                <input type="checkbox" />
                    {object.newItem} 
                    <button onClick={()=>handleDeleteProp(index)} >Delete</button>
                    </li>
            </ul>
            )}
        </div>
    )
}