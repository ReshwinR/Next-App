'use client'
import React, { useEffect, useRef, useState } from 'react'

const StopWatch = () => {
	const [count, setCount] = useState(0)
	const [clearTimer, setClearTimer] = useState(false)
	const timRef = useRef(null)
	//   useEffect(() => {
	//     timRef.current = setInterval(() => setCount((prev) => prev + 1), 1000);

	//     return () => clearInterval(timRef.current);

	//   }, []);

	useEffect(() => {
		const timer = setInterval(
			() => !clearTimer && setCount(prev => prev + 1),
			1000
		)
		if (clearTimer) clearInterval(timer)
		return () => clearInterval(timer)
	}, [count])
	console.log('coutn out', count)
	const handleEnd = () => {
		// clearInterval(timRef?.current);
		setClearTimer(true)
	}
	return (
		<div className='App'>
			<h1>Count: {count}</h1>
			{/* <button>Start</button> */}
			<button onClick={handleEnd}>End</button>
		</div>
	)
}

export default StopWatch
