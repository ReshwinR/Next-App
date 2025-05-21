'use client'
import { Stack, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Checkbox = () => {
	const [cbList, setCBList] = useState([
		{ id: '1', name: 'CB1', isChecked: false },
		{ id: '2', name: 'CB2', isChecked: false },
		{ id: '3', name: 'CB3', isChecked: false },
		{ id: '4', name: 'CB4', isChecked: false },
	])
	const [selection, setSelection] = useState<boolean>(false)
	const handleChecks = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value, checked } = event.target
		const updatedList = cbList.map(item => {
			return item.id === value ? { ...item, isChecked: checked } : item
		})
		setCBList(updatedList)
	}
	const handleSelection = (value: boolean) => {
		const updatedList = cbList.map(item => {
			return { ...item, isChecked: value }
		})
		setCBList(updatedList)
	}
	useEffect(() => {
		handleSelection(selection)
	}, [selection])
	return (
		<>
			<Button
				variant='contained'
				sx={{ mb: 3 }}
				onClick={() => setSelection(prev => !prev)}
			>
				{selection ? 'DeselectAll' : 'SelectAll'}
			</Button>
			{cbList.map(({ id, name, isChecked }) => (
				<Stack direction='row' gap={2} key={id}>
					<input
						type='checkbox'
						name={name}
						value={id}
						checked={isChecked}
						onChange={handleChecks}
					/>
					<p>{name}</p>
				</Stack>
			))}
			<Stack direction='row' gap={2} sx={{ mt: 2, alignItems: 'center' }}>
				<h3>Select checkboxes:</h3>
				{cbList.map(
					({ id, name, isChecked }) => isChecked && <span key={id}>{name}</span>
				)}
			</Stack>
		</>
	)
}
export default Checkbox
