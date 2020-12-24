import React, { useState, useEffect} from 'react'
import {Carousel, Button} from "react-bootstrap"
import Login from "./Login"


const  AccueilUser = (props) =>  {

	const {storage} = props
	const [product, setProduct] = useState([])

	console.log(localStorage.getItem("id"))
    return (
		<div>
		
		</div>
	)
}








export default AccueilUser
