import React,{useState }from 'react'
import { useForm } from "react-hook-form"
import { Button, Form,Col } from "react-bootstrap"


const Register = () => {
	const { register, handleSubmit, watch, reset,errors } = useForm()
	const onSubmit = (data,e )=> {
		console.log(data)
		e.target.reset()
	}


	console.log(watch("password"))
	console.log(watch("confirm"))
    return (
		<div>
			{/* {JSON.stringify({
				email: email,
				password: password,
			})} */}
			<h1>Inscription</h1>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridText">
						<Form.Label>FirstName</Form.Label>
						<Form.Control
							type="text"
							placeholder="FirstName"
							name="firstname"
							// ref={register({ required: true, maxLength: 20 })}
							ref={register}
						/>
						{errors.firstname && (
							<span className="text-red-400">
								This field is required
							</span>
						)}
					</Form.Group>

					<Form.Group as={Col} controlId="formGridText">
						<Form.Label>LastName</Form.Label>
						<Form.Control
							type="text"
							placeholder="LastName"
							name="lastname"
							ref={register}
						/>
					</Form.Group>
					<Form.Group as={Col} controlId="formGridText">
						<Form.Label>UserName</Form.Label>
						<Form.Control
							type="text"
							placeholder="UserName"
							name="username"
							ref={register}
						/>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							name="email"
							ref={register}
						/>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
							name="password"
							ref={register({
								pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
							})}
						/>
						{errors.password && (
							<span className="text-red-400">
								Password Too short
							</span>
						)}
					</Form.Group>
					<Form.Group as={Col} controlId="formGridPassword">
						<Form.Label> Confirm Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Confirm Password"
							name="confirm"
							ref={register({
								validate: value =>
									value === watch("password") || (
										<span>Password fields don't match</span>
									),
								required: "Password required",
								minLength: { value: 8, message: "Too short" },
								defaultValue: " ",
							})}
						/>
						{errors.confirm && (
							<span className="text-red-400">
								Password fields don't match
							</span>
						)}
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridAddress1">
						<Form.Label>Rue</Form.Label>
						<Form.Control
							placeholder="1234 Main St"
							name="rue"
							ref={register}
						/>
					</Form.Group>
					<Form.Group as={Col} controlId="formGridCity">
						<Form.Label>Ville</Form.Label>
						<Form.Control name="ville" ref={register} />
					</Form.Group>
					<Form.Group as={Col} controlId="formGridZip">
						<Form.Label>Zip</Form.Label>
						<Form.Control name="codePostal" ref={register} />
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridAddress1">
						<Form.Label>Number Phone</Form.Label>
						<Form.Control
							placeholder="09 56 56 56 56"
							name="phone"
							ref={register}
						/>
					</Form.Group>
				</Form.Row>
				<Form.Group id="formGridCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	)
}

export default Register
