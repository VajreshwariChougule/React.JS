


export default function Example({exampleFun, input, handleInvestmentOne, handleInvestmentTwo, investmentOne, investmentTwo}){
    

    return(
        <div>
            <label>Investment 1</label>
            <input type="number" onChange={handleInvestmentOne} value={investmentOne}/>
            <label>Investment 2</label>
            <input type="number"  onChange={handleInvestmentTwo} value={investmentTwo}/>
            <label>Investment 3</label>
            <input type="number" onChange={(event)=>exampleFun("investmentThree", event.target.value)} value={input.investmentThree}/>
            <label>Investment 4</label>
            <input type="number" onChange={(event)=>exampleFun("investmentFour", event.target.value)} value={input.investmentFour}/>
        </div>
    )
}