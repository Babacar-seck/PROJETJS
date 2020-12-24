import React, {useState, useEffect}from "react"
import ShopCard from "../components/Card/ShopCard"

const Femmes = () => {
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
	const productWomen = product.filter(p => p.categorie == "Femmes")

	return (
		<div>
			<h1> Femmes</h1>
			<img
				src="nike.jpg"
				className=" h-5 space-y-4 img-fluid"
				style={{ maxheight: "80vh", width: "100em" }}
			/>
			<h2 style={{ fontSize: "7rem" }}>Nos Nouveautés</h2>
			<div id="section" className="grid grid-cols-3 gap-8">
				{productWomen.map(p => (
					<ShopCard data={p} className="mt-20" />
				))}
			</div>
		</div>
	)
}

export default Femmes
