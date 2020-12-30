import React,{useContext, useState}from 'react'
import PanierContext from "../context/PanierContext"
import ShopCard  from "../components/Card/ShopCard"
const Panier = () => {
    const { panier, setPanier } = useContext(PanierContext)
    const [somme, setSomme] = useState(0)

const supprimerPanier = (index, produit) => {
	// J'utilise index et non id pour permettre à mon panier de contenir plusieurs fois le même produit vas y
	// --> Obligation d'avoir une key unique sur une liste
	panier.splice(index, 1)
	setPanier([...panier])
	const { prix } = produit
	setSomme(somme - prix)
}

console.log(panier)

    return (
		<div>
			{panier.map((index, p) => (
				<ShopCard data={p} action={() => supprimerPanier(index, p)} />
			))}
		</div>
	)
}

export default Panier
