import { calculateInvestmentResults } from "../calculateResults"

export default function Results({inputValue}){
    var results= calculateInvestmentResults(inputValue)
    console.log(results)
    return(
        <table align="center">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map((object, index)=>
                <tr key={index}>
                    <td>{object.year}</td>
                    <td>{object.valueEndOfYear}</td>
                    <td>{object.interest}</td>
                    <td>{object.interest}</td>
                    <td>{object.annualInvestment}</td>
                </tr>)}
                
            </tbody>
        </table>
    )
}