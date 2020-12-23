import React, { useState, useEffect } from "react"
import { Carousel, Button } from "react-bootstrap"
import ShopCard from "../components/Card/ShopCard"

const Enfants = () => {
	const [product, setProduct] = useState([])
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		;(async function () {
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
	const productChild = product.filter(p => p.categorie == "Enfants")

	return (
		<div>
			<img
				src="https://source.unsplash.com/MNtag_eXMKw/1600x900"
				className=" h-5 space-y-4 img-fluid"
				style={{ maxheight: "80vh", width: "100em" }}
			/>
			<h2>Nos Nouveautés</h2>
			<div id="section" className="grid grid-cols-3 gap-8">
				{productChild.map(p => (
					<ShopCard
						
						data={p}
					/>
				))}
			</div>
		</div>
	)
}
export default Enfants