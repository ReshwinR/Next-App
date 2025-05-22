'use client'
import React, { useState, useRef } from 'react'
const Stopwatch = () => {
	const [count, setCount] = useState(0)
	const timerRef = useRef<NodeJS.Timeout | null>(null)
	const startHandler = () => {
		timerRef.current = setInterval(() => {
			setCount(prev => prev + 1)
		}, 500)
	}
	const stopHanlder = () => {
		if (timerRef?.current) clearInterval(timerRef?.current)
	}
	const resetHanlder = () => {
		setCount(0)
		if (timerRef?.current) clearInterval(timerRef.current)
	}
	console.log('timer', count)
	return (
		<>
			<p>Count : {count}</p>
			<button onClick={startHandler}>Start</button>
			<button onClick={stopHanlder}>Stop</button>
			<button onClick={resetHanlder}>Reset</button>
		</>
	)
}
export default Stopwatch
