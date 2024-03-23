export default function Results({finalResult}){
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
                {finalResult.map((object, index)=> <tr key={index}>
                    <td>{object.Year}</td>
                    <td>{object.InvestmentValue}</td>
                    <td>{object.Interest}</td>
                    <td>{object.TotalInterest}</td>
                    <td>{object.Investedcapital}</td>
                </tr>)}
            </tbody>
        </table>
    )
}