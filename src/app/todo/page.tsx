'use client'
import React, { useState } from 'react'

//name, desc, date, status, id
interface TaskType {
	userName: string
	userId: string
	userStatus: string
}
const TodoApp = () => {
	const [todos, setTodos] = useState<TaskType[]>([])
	//   const [uName, setUname] = useState(String)
	const [task, setTask] = useState<TaskType>({})
	const handleChange = (event: React.FocusEventHandler<HTMLInputElement>) => {
		const { name, value } = event?.target
		console.log({ name, value })
		setTask({ ...task, [name]: value })
		// const sampleTask = {...task}
		// sampleTask[name] = value
		// setTask(sampleTask)
	}
	const handleSubmit = () => {
		setTodos(prev => [...prev, task])
	}

	console.log(task, todos)
	return (
		<>
			<div>TodoApp</div>
			<input type='text' name='userName' id='name' onBlur={handleChange} />
			{/* <input
        type="text"
        name="description"
        id="description"
        onBlur={handleChange}
      /> */}
			<input type='text' name='userStatus' id='status' onBlur={handleChange} />
			<input type='text' name='userId' id='id' onBlur={handleChange} />
			<button onClick={handleSubmit}>Add</button>

			{todos.map(task => {
				return (
					<div key={task.userId}>
						<p>{task.userName}</p>
						<p>{task.userStatus}</p>
						<p>{task.userId}</p>
						{/* <p>{task.name}</p>
            <p>{task.name}</p> */}
					</div>
				)
			})}
		</>
	)
}

export default TodoApp
