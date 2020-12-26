import { Button, Form ,Col} from "react-bootstrap"
import React, { useState, useEffect } from "react"
import { Redirect } from "react-router"

const Login = () => {
	const [user, setUser] = useState([])
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [redirect, setRedirect] = useState(false)
	const onSubmitForm = async e => {
		e.preventDefault()
		const response = await fetch("http://localhost:3001/login", {
			method: "POST",
			headers: {
				'Content-type': 'application/json',
				'Accept' : 'application/json',
			},
			body: JSON.stringify({
				email: email,
				password: password,
			})
		})
		 const data = await response.json()
		console.log(response)
		setRedirect(true)
	  localStorage.setItem("id", data)
	}
	return (
		<div>
			{JSON.stringify({
				email: email,
				password: password,
			})}
			{redirect ? <Redirect to="/dashboard" /> : null}
			<h1 class="text-center mb-5">Login </h1>
			<Form onSubmit={onSubmitForm} action={"/dashboard"} className="bg-gray-100">
				<Form.Group controlId="formBasicEmail" className="px-30">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						className="w-50"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						className="w-50"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</Form.Group>
				<Form.Group controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>

			<p class="lead mt-4">
				No Account? <a href="/inscription">Register</a>
			</p>
		</div>
	)
}

export default Login
