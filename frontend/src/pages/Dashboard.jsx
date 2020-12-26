import React, { useState, useEffect} from 'react'
import {Alert, Button} from "react-bootstrap"
import Login from "./Login"


const Dashboard = props => {
	const { storage } = props
	const [user, setUser] = useState([])
const id = localStorage.getItem("id")
		useEffect(() => {
			;(async function () {
				const response = await fetch(`http://localhost:3001/users/${id}`)
				const responseData = await response.json()
				if (response.ok) {
					setUser(responseData)
				} else {
					alert(JSON.stringify(responseData))
				}
			})()
		}, [])

	console.log(id)
		console.log(user)
	return (
		<div>
			<h1 class="text-center mb-5">Bienvenu(e) {user.firstname} </h1>
			<Alert variant="success">
				<Alert.Heading>Hey, nice to see you</Alert.Heading>
				<p>
					Aww yeah, you successfully read this important alert
					message. This example text is going to run a bit longer so
					that you can see how spacing within an alert works with this
					kind of content.
				</p>
				<hr />
				<p className="mb-0">
					Whenever you need to, be sure to use margin utilities to
					keep things nice and tidy.
				</p>
			</Alert>
		</div>
	)
}








export default Dashboard