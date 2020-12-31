import React, { useContext, useState } from "react"
import TotalContext from "../context/TotalContext"
import PanierContext from "../context/PanierContext"
import { Table, Alert, Image } from "react-bootstrap"
import { FaPlusCircle, FaRegTrashAlt } from "react-icons/fa"

const Panier = () => {
	const { panier, setPanier } = useContext(PanierContext)
	const { total, setTotal } = useContext(TotalContext)


    const ajouterAuPanier = produit => {
		setPanier([...panier, { ...produit }])
		setTotal(total + produit.prix)
		console.log(produit.prix)
	}

	const supprimerPanier = (produit, index) => {
		// J'utilise index et non id pour permettre à mon panier de contenir plusieurs fois le même produit
		// --> Obligation d'avoir une key unique sur une liste
		panier.splice(index, 1)
		setPanier([...panier])
		const { prix } = produit
		setTotal(Math.round((total - prix )* 100) / 100)
	

	}
	console.log(total)

    console.log(panier)
    const nbre = 1;
    const port = "http://localhost:3001/"
	return (
		<div>
			<h1 className="mb-10">
				<Alert variant="success">{`Vous avez ${panier.length} article${
					panier.length > 1 ? "s" : ""
				} dans votre panier !`}</Alert>
			</h1>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Nbre de Pièces</th>
						<th>Designation</th>
						<th>Categorie</th>
						<th>Image</th>
						<th>Prix</th>
						<th>Add</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{panier.map((p, index) => (
						<tr>
							<td key={index}> {index + 1}</td>

							<td>{p.id !== p.id ? nbre : nbre + 1}</td>
							<td> {p.designation}</td>
							<td> {p.categorie}</td>
							<td>
								<Image
									src={port + p.image}
									rounded
									className="w-12"
								/>
							</td>
							<td> {p.prix} €</td>
							<td>
								<FaPlusCircle
									onClick={() => ajouterAuPanier(p, index)}
								/>
							</td>
							<td>
								<FaRegTrashAlt
									onClick={() => supprimerPanier(p, index)}
								/>
							</td>
						</tr>
					))}

					<th colSpan="4" className="font-semibold text-3xl">
						Total
					</th>
					<th colSpan="3" className="font-semibold text-3xl">
						{total} €
					</th>
				</tbody>
			</Table>
		</div>
	)
}

export default Panier
