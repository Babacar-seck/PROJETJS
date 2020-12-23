import React from 'react'
import {Card , Button} from "react-bootstrap"

const ShopCard = (props) => {
    const { data , index  } = props
    
	const { designation, description ,categorie, prix, image } = data
    return (
		<Card style={{ width: "20rem"  }}>
			<Card.Img
				variant="top"
				src="https://source.unsplash.com/MNtag_eXMKw/1600x900"
			/>
			<Card.Body>
				<Card.Title>{designation}</Card.Title>
				<Card.Text>{description}</Card.Text>
				<div className="flex items-center justify-between">
					<Card.Text>{prix} €</Card.Text>
					<Button variant="primary">Acheter</Button>
				</div>
			</Card.Body>
		</Card>
	)
}

export default ShopCard
