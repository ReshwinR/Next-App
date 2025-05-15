'use client'
import React, { useEffect, useState } from 'react'

const FetchApi = () => {
	const [fruits, setFruits] = useState([])
	const [mainFruits, setMainFruits] = useState([])
	const [userInput, setUserInput] = useState('')
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(data => data.json())
			.then(response => {
				setFruits(response)
				setMainFruits(response)
			})
	}, [])

	console.log(fruits)
	const handleChange = event => {
		const { value } = event.target
		setUserInput(value)
	}

	useEffect(() => {
		if (!userInput) {
			setFruits(mainFruits)
		}
		const sample = [...fruits]
		const filteredFruits = sample.filter(fruit =>
			fruit.name.includes(userInput)
		)
		console.log(filteredFruits)
		setFruits(filteredFruits)
		// setFruits(prev => prev.filter(fruits.name === userInput))
	}, [userInput])
	console.log('use', userInput)

	return (
		<>
			<input
				type='text'
				name='search'
				value={userInput}
				onChange={handleChange}
			></input>
			<div>
				{fruits.map(fruit => {
					const { id, name, email } = fruit
					return (
						<p key={id}>
							<span className='highlight'>{userInput}</span>
							{name.slice(userInput.length)}
							{/* ${userInput}${name.slice(userInput.Length)}` */}
							{/* {name} - {email} */}
						</p>
					)
				})}
			</div>
		</>
	)
}

export default FetchApi
