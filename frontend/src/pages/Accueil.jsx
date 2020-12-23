import React, { useState, useEffect} from 'react'
import {Carousel, Button} from "react-bootstrap"
import ShopCard from "../components/Card/ShopCard"
import Styles from './accueil.module.css'


const  Accueil = (props) =>  {

	const [product, setProduct] = useState([])
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


		const 	productChild = product.filter(p =>
				p.categorie == "Enfants"
			)
				//console.log(productChild)
				const productMen = product.filter(
					p => p.categorie == "Hommes"
				)
				// console.log(productMen)
				const productWomen = product.filter(p => p.categorie == "Femmes")
				// console.log(productWomen)
	
					const imageCarousel = [
						{
							image: "adidas.jpg",
							description: "Basket Enfants",
						},
						{
							image: "gazelle.jpg",
							description: "Basket Femmes",
						},
						{
							image: "nike.jpg",
							description: "Basket Hommes",
						},
					]
    return (
		<div>
			<Carousel className="h-25">
				{imageCarousel.map(p => (
					<Carousel.Item key={p.id} interval={1000}>
						<img
							className=" w-100 h-100"
							src={p.image}
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
