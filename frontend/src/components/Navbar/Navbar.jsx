import React from "react"
import { NavLink , Link} from "react-router-dom"
import "./Navbar.css"
import logo_sneakers from "../../img/logo_sneakers.png"
import Login from "../../pages/Login"
import { Button} from "react-bootstrap"

const Navbar = () => {


	const handleClick = e => {
	
		localStorage.clear("id")
	}

	
	return (
		<nav>
			<ul className="liste">
				<NavLink to="/">
					<img src={logo_sneakers} alt="logo" className="logo"></img>
				</NavLink>
				<li className="items ">
					<NavLink className="text-decoration : none " to="/hommes">
						Hommes
					</NavLink>
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
			<NavLink to="/login">
			{ (localStorage.getItem("id"))?
				<Button className="btn" id="btnNav" onClick = {handleClick}>
					Se Déconnecter
				</Button>
				:
					<Button className="btn" id="btnNav">
						Se connecter
					</Button>

				}
				
	
			</NavLink>
		</nav>
	)
}

export default Navbar
