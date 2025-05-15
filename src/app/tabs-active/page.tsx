'use client'
import React, { useState } from 'react'
import Tabs from '../components/tabs'

const ButtonActive = () => {
	const [tab, setTab] = useState('input-tab-1')

	const tabsData = [
		{
			slug: 'output-tab-1',
			category: 'output',
			label: 'Output Tab 1',
		},
		{
			slug: 'output-tab-2',
			category: 'output',
			label: 'Output Tab 2',
		},
		{
			slug: 'input-tab-1',
			category: 'input',
			label: 'Input Tab 1',
		},
		{
			slug: 'output-tab-3',
			category: 'output',
			label: 'Output Tab 3',
		},
		{
			slug: 'new-tab-2',
			category: 'new',
			label: 'New tab',
		},
	]
	return (
		<>
			<div>ButtonActive</div>
			<Tabs data={tabsData} tab={tab} onChange={newTab => setTab(newTab)} />
		</>
	)
}

export default ButtonActive
