import React from 'react'
import { Card, Button} from "react-bootstrap"
import { MdAddShoppingCart } from "react-icons/md"

const ShopCard = (props) => {
	const { data , action  } = props
	
    
	const { designation, description ,categorie, prix, image } = data
	const port = "http://localhost:3001/"
    return (
		<Card style={{ width: "20rem" }}>
			<Card.Img
				variant="top"
				src={port + image}
				style={{ width: "20rem", height: "20.6rem" }}
			/>
			<Card.Body>
				<Card.Title>{designation}</Card.Title>
				<Card.Text className="truncate ...">{description}</Card.Text>
				<div className="flex items-center justify-between">
					<Card.Text>{prix} €</Card.Text>
					<Button pill variant="primary">
						<MdAddShoppingCart onClick = {action} />
					</Button>
				</div>
			</Card.Body>
		</Card>
	)
}

export default ShopCard
