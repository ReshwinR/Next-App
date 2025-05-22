'use client'
import { useState, useEffect, useRef } from 'react'

function Counter() {
	const [count, setCount] = useState(10)
	const timeRef = useRef<NodeJS.Timeout | null>(null)

	//   const handleClick = () => {
	//     setCount(prev=>prev+1);
	//     setCount(prev=>prev+1);
	//     setCount(prev=>prev+1);
	//     // setCount(count + 1);
	//     // setCount(count + 1);
	//   };

	useEffect(() => {
		if (count > 0) {
			timeRef.current = setInterval(() => {
				setCount(prev => prev - 1)
			}, 1000)
			return () => {
				if (timeRef?.current) {
					clearInterval(timeRef.current)
				}
			}
		}
	}, [count])

	const handleClick = () => {
		setCount(10)
	}

	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={handleClick}>Countdown</button>
		</div>
	)
}

export default Counter
