import React from "react"
import { NavLink } from "react-router-dom"
import "./Navbar.css"
import logo_sneakers from "../../img/logo_sneakers.png"
import Login from "../../pages/Login"
import { Button} from "react-bootstrap"

const Navbar = () => {
	return (
		<nav >
			<ul className="liste">
				<a href="/">
					<img src={logo_sneakers} alt="logo" className="logo"></img>
				</a>
				<li className="items">
					<NavLink to="/hommes">Hommes</NavLink>
				</li>
				<li className="items">
					<NavLink to="/femmes" exact>
						Femmes
					</NavLink>
				</li>
				<li className="items">
					<NavLink to="/enfants" exact>
						Enfants
					</NavLink>
				</li>
			</ul>
			<Button onClick={Login} className="btn">
				Se connecter
			</Button>
		</nav>
	)
}

export default Navbar
