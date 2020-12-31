import React, {useContext}from "react"
import { NavLink , Link} from "react-router-dom"
import "./Navbar.css"
import logo_sneakers from "../../img/logo_sneakers.png"
import Login from "../../pages/Login"
import { Button} from "react-bootstrap"
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa"
import { MdAddShoppingCart } from "react-icons/md"
import PanierContext from "../../context/PanierContext"

const Navbar = () => {

const { panier, setPanier } = useContext(PanierContext)

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
				<li className="items">
					<NavLink to="/panier" className="flex" exact>
						<MdAddShoppingCart className="h-10 w-10" />
						<span className=" border solid black rounded-full">
							{panier.length}
						</span>
					</NavLink>
				</li>
			</ul>
			<NavLink to="/login">
				{localStorage.getItem("id") ? (
					<Button
						className="btn flex"
						id="btnNav"
						onClick={handleClick}
					>
						<span className=" flex">
							<FaSignOutAlt /> Se Déconnecter
						</span>
					</Button>
				) : (
					<Button
						className="btn flex color"
						id="btnNav"
						variant="light"
					>
						<span className=" flex">
							<FaSignInAlt className="mr-3" />
							Se connecter
						</span>
					</Button>
				)}
			</NavLink>
		</nav>
	)
}

export default Navbar
