import React from 'react'
import "./Navbar.css"
import logo_sneakers from '../img/logo_sneakers.png'
import Login from '../pages/login'
import Button from "react-bootstrap/Button"

const Navbar = () => {
    


    return (
         <nav>   
             <ul className="liste">
                 <img src={logo_sneakers} alt="logo" className="logo"></img>
                 <li className="items">Hommes</li>
                 <li className="items">Femmes</li>
                 <li className="items">Enfants</li>
             </ul>
              <Button onClick={Login} className="btn">Se connecter</Button> 
        </nav>
    )
}

export default Navbar