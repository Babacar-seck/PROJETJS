import React from 'react'
import {Card , Button} from "react-bootstrap"

const ShopCard = (props) => {
    const { data , index  } = props
    
	const { designation, description ,categorie, prix, image } = data

console.log(image)
    return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src={image} />
			<Card.Body>
				<Card.Title>{designation}</Card.Title>
				<Card.Text>{description}</Card.Text>
				<Button variant="primary">Acheter</Button>
			</Card.Body>
		</Card>
	)
}

export default ShopCard
