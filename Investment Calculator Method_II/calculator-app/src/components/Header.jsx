import img from "./Logo.png"
export default function Header(){
    return( 
        <header>
            <img src={img} alt="Not found" height="70px"/>
            <h1>Investment Calculator</h1>
        </header>
    )
        
    
}