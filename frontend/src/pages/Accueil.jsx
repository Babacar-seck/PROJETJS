import React, { useState, useEffect,useContext } from "react"
import { Carousel, Button } from "react-bootstrap"
import ShopCard from "../components/Card/ShopCard"
import Styles from "./accueil.module.css"
import PanierContext from '../context/PanierContext'

const Accueil = props => {
	const [product, setProduct] = useState([])
	// const [panier, setPanier] = useState([])
	const { panier, setPanier} = useContext(PanierContext)
	const [loading, setLoading] = useState(true)



	useEffect(() => {
		(async function () {
			const response = await fetch("http://localhost:3001/products")
			const responseData = await response.json()
			if (response.ok) {
				setProduct(responseData)
			} else {
				alert(JSON.stringify(responseData))
			}
			setLoading(false)
		})()
	}, [])

	if (loading) {
		return "Chargement..."
	}

	const ajouterPanier = (product) => {
		setPanier([...panier, {...product}])
		
	}
	console.log(panier)

	const productChild = product.filter(p => p.categorie == "Enfants")
	//console.log(productChild)
	const productMen = product.filter(p => p.categorie == "Hommes")
	// console.log(productMen)
	const productWomen = product.filter(p => p.categorie == "Femmes")
	// console.log(productWomen)

	const imageCarousel = [
		{
			image: "chaussure.jpg",
			description: "Basket Enfants",
		},
		{
			image: "shoesEnfant.jpg",
			description: "Basket Femmes",
		},
		{
			image: "nike.jpg",
			description: "Basket Hommes",
		},
	]
	return (
		<div>
			<Carousel className="d-block w-100">
				{imageCarousel.map(p => (
					<Carousel.Item key={p.id} interval={1000}>
						<img
							className=" w-100 "
							src={p.image}
							alt="First slide"
						/>
						<Carousel.Caption>
							<h3 className="text-red-700">{p.categorie}</h3>
							<p className="text-red-700">{p.description}</p>
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>

			<section>
				<h2 style={{ fontSize: "5rem", textAlign: "center" }}>
					Enfants
				</h2>
				<div id="section" className="flex items-center justify-between">
					{productChild.map(p => (
						<ShopCard data={p} action={() => ajouterPanier(p)} />
					))}
				</div>
				<h2 style={{ fontSize: "5rem", textAlign: "center" }}>
					Hommes
				</h2>
				<div id="section" className="flex items-center justify-between">
					{productMen.map(p => (
						<ShopCard data={p} action={() => ajouterPanier(p)} />
					))}
				</div>
				<h2 style={{ fontSize: "5rem", textAlign: "center" }}>
					Femmes
				</h2>
				<div id="section" className="flex items-center justify-between">
					{productWomen.map(p => (
						<ShopCard data={p} action={() => ajouterPanier(p)} />

					))}
				</div>
			</section>
		</div>
	)
}

export default Accueil
