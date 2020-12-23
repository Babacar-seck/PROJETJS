import React, { useState, useEffect} from 'react'
import {Carousel, Button} from "react-bootstrap"
import ShopCard from "../components/Card/ShopCard"


const  Accueil = (props) =>  {
	const { img4, img5, img6 } = props 

	const [product, setProduct] = useState([])
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		(async function () {
			const response = await fetch(
				"http://localhost:3001/products"
			)
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


		const 	productChild = product.filter(p =>
				p.categorie == "Enfants"
			)
			console.log(productChild)
				const productMen = product.filter(
					p => p.categorie == "Hommes"
				)
				console.log(productMen)
				const productWomen = product.filter(p => p.categorie == "Femmes")
				console.log(productWomen)
	

    return (
		<div>
			<Carousel className="w-70">
				{product.map(p => (
					<Carousel.Item key={p.id} interval={1000}>
						<img
							className="d-block w-100"
							src={img4}
							alt="First slide"
						/>
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>{p.description}</p>
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
			<section>
				<div id="section">
					<h2>Enfants</h2>
					{productChild.map(p => (
						<ShopCard data={p} />
					))}
				</div>
					<h2>Hommes</h2>
				<div id="section" className="flex space-x-4">
					{productMen.map(p => (
						<ShopCard data={p} />
					))}
				</div>
				<div id="section">
					<h2>Femmes</h2>
					{productWomen.map(p => (
						<ShopCard data={p} />
					))}
				</div>
			</section>
		</div>
	)
}








export default Accueil
