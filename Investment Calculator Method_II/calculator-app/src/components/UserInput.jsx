import { useState } from "react"
//using 1 useState for 4 inputs
//default value is object and entering 4 values
export default function UserInput({handleChange, inputValue}){                
    
    
    return(
        <section>
            <div>
                <p>
                    <label>Initial Investment</label>
                    <input type="number" onChange={(event)=>handleChange("initialInvestment", event.target.value)} value={inputValue.initialInvestment}/>
                </p>
                <p>
                    <label> Annual Investment</label>
                    <input type="number" onChange={(event)=>handleChange("annualInvestment", event.target.value)} value={inputValue.annualInvestment} />
                </p>
            </div>
            <div>
                <p>
                    <label>Expected Return</label>
                    <input type="number" onChange={(event)=>handleChange("expectedReturn", event.target.value)} value={inputValue.expectedReturn}/>
                </p>
                <p>
                    <label> Duration</label>
                    <input type="number" onChange={(event)=>handleChange("duration", event.target.value)} value={inputValue.duration}/>
                </p>
            </div>
        </section>
    )
}