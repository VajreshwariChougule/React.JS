import img from "./Logo.png"
export default function Header(){
    return(
        <div>
        <img src={img} alt="Not found" height="50px" />
        <h1>Investment Calculator</h1>
        </div>
    )
}
