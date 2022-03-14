import React from "react"
import {Link} from "react-router-dom"
import '../CSS/Navbar.css'

function NavBar(){
    return(
        <div className="nav">
            
           
           

            <ul >
                <li className="LinkBtn"><Link to="/">Home</Link></li>
                <li className="LinkBtn"><Link to="/details">About us</Link></li>
                <li className="LinkBtn"><Link  to="/details2">Contact</Link></li>
            </ul>
           
        </div>
       
    )
}






export default NavBar