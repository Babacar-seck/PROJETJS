import { Button, Form } from "react-bootstrap"
import React, { useState, useEffect } from "react"
import { Redirect } from "react-router"

const Login = () => {
	const [user, setUser] = useState([])
	const [userEmail, setUserEmail] = useState("")
	const [password, setPassword] = useState("")
	const [redirect, setRedirect] = useState(false)
	const onSubmitForm = async e => {
		e.preventDefault()
		const response = await fetch("http://localhost:3001/login", {
			method: "POST",
			 headers : {"Content-type" : "application/json"},
			body: JSON.stringify({
				email: userEmail,
				password: password,
			}),
		})
		const data = await response.json()
		setRedirect(true)
		 localStorage.setItem("id", data)
	}
	return (
		<div>
			{redirect ? <Redirect to="/AccueilUser" /> : null}
			<Form onSubmit={onSubmitForm} action={"/AccueilUser"}>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						className="w-50"
						value={userEmail}
						onChange={e => setUserEmail(e.target.value)}
				
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
		</div>
	)
}

export default Login
