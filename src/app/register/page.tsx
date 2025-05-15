import React, { useState } from 'react'

const Register = () => {
	const [userEmail, setUserEmail] = useState('')
	const [userPassword, setUserPassword] = useState('')
	const handleChange = e => {
		const { name, value } = e.target
		if (name === 'userEmail') {
			setUserEmail(value)
		} else if (name === 'userPassword') {
			setUserPassword(value)
		}
	}

	return (
		<>
			<input
				name='userEmail'
				type='userEmail'
				value={userEmail}
				onChange={handleChange}
			/>
			<input
				name='userPassword'
				type='userPassword'
				value={userPassword}
				onChange={handleChange}
			/>
			{/* <button onClick={handleSubmit}>Register</button> */}
		</>
	)
}

export default Register
