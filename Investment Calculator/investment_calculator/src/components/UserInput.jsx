


export default function UserInput({handleInitialInvest, handleAnnualInvest, handleExpected, handleDura, initialInvestmentValue, annualInvestmentValue, expectedReturnValue, durationValue}){
    

    function handleInitialInvestment(event){
        handleInitialInvest(event.target.value)
        
    }
    function handleAnnualInvestment(event){
        handleAnnualInvest(event.target.value)
    }
    function handleExpectedReturn(event){
        handleExpected(event.target.value)
    }
    function handleDuration(event){
        handleDura(event.target.value)
    }

    
    
    return(
        <div>
            <label>Initial Investment</label>
            <input type="number" onChange={handleInitialInvestment} value={initialInvestmentValue}/>
            <label>Annual Investment</label>
            <input type="number" onChange={handleAnnualInvestment} value={annualInvestmentValue}/>
            <label>Expected Return</label>
            <input type="number" onChange={handleExpectedReturn} value={expectedReturnValue}/>
            <label>Duration</label>
            <input type="number" onChange={handleDuration} value={durationValue}/>
        </div>
    )
}

