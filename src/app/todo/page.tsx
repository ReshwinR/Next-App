'use client'
import { Button, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'

//name, desc, date, status, id
interface TaskType {
	name: string
	taskId: string
	status: string
}
const TodoApp = () => {
	const [todos, setTodos] = useState<TaskType[]>([])
	const [task, setTask] = useState<TaskType>({
		name: '',
		taskId: '',
		status: '',
	})
	const [disabledAdd, setDisableAdd] = useState(true)
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		// console.log({ name, value })
		setTask(prev => ({ ...prev, [name]: value }) as TaskType)
	}
	// console.log({task,todos})
	const handleSubmit = () => {
		console.log('---', task)
		setDisableAdd(false)
		setTodos(prev => [...prev, task])
		setTask({ name: '', taskId: '', status: '' })
	}
	useEffect(() => {
		if (task.name && task.status && task.taskId) {
			setDisableAdd(false)
		} else {
			setDisableAdd(true)
		}
	}, [task])

	console.log({ task, todos })
	return (
		<>
			<h1 style={{ marginBottom: '16px' }}>TodoApp</h1>
			<input
				type='text'
				name='name'
				id='name'
				value={task.name}
				onChange={handleChange}
				placeholder='Task Name'
			/>
			<input
				type='text'
				name='status'
				id='status'
				value={task.status}
				onChange={handleChange}
				placeholder='Task Status'
			/>
			<input
				type='text'
				name='taskId'
				id='id'
				value={task.taskId}
				onChange={handleChange}
				placeholder='Task Id'
			/>
			<Button variant='contained' disabled={disabledAdd} onClick={handleSubmit}>
				Add
			</Button>

			<Stack gap='16px' sx={{ mt: 3 }}>
				{todos.map((task, index) => {
					return (
						<Stack direction='row' gap='16px' key={task.taskId}>
							<p>{index + 1}.</p>
							<p>{task.name}</p>
							<hr />
							<p>{task.status}</p>
							<hr />
							<p>{task.taskId}</p>
							<hr />
						</Stack>
					)
				})}
			</Stack>
		</>
	)
}

export default TodoApp
