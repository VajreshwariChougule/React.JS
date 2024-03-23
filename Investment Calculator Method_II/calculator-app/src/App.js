import './App.css';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';
import { useState } from 'react';
import Example from './components/Example';

function App() {
  const[investmentOne, setInvestmentOne]=useState("")
  const[investmentTwo, setInvestmenttwo]=useState("")
  const[inputValue, setInputValue]=useState({     
    initialInvestment:" ",
    annualInvestment:" ",
    expectedReturn:" ",
    duration:" "
})
  
const[input, setInput]=useState({
  investmentThree: "",
  investmentFour: ""
});

function handleChange(inputIndentifier, newValue){  
    setInputValue(prevState=>{
        return{
            ...prevState,
            [inputIndentifier]: +newValue
        }
    })
}


function handleInvestmentOne(event){
    setInvestmentOne(event.target.value)
}
function handleInvestmentTwo(event){
    setInvestmenttwo(event.target.value)
}

function handleInput(inputIndentify, newVal){
    setInput(prevStat=>{
        return{...prevStat,
        [inputIndentify]: newVal
        }
    })
}

console.log(inputValue)
  return (
    <div className="App">
      <Header/>
      <UserInput handleChange={handleChange} inputValue={inputValue}/>
      <Results inputValue={inputValue}/>
      <Example handleInput={handleInput} input={input} handleInvestmentOne={handleInvestmentOne} handleInvestmentTwo={handleInvestmentTwo} exampleFun={handleInput} investmentOne={investmentOne} investmentTwo={investmentTwo}/>
    </div>
  );
}

export default App;
