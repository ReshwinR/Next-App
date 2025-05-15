import React from 'react'
import './styles.css'

type TabObject = {
	slug: string
	label: string
	category: string
}
type TabProps = {
	data: Array<TabObject>
	tab: string
	onChange: (newTab: string) => void
}
const Tabs = ({ data, tab, onChange }: TabProps) => {
	// const retrieveFilters = data.map((item) => item.category);
	// const uniqueFilters = [...new Set(retrieveFilters)];
	// console.log("retrieveFilters", uniqueFilters);

	//groupby
	// const result = Object.groupBy(data, item=>item.category);
	// const uniqueFilters = Object.values(result)

	const result = data.reduce((acc, cur) => {
		(acc[cur?.category] = acc[cur?.category] || []).push(cur)
		return acc
	}, {})
	const uniqueFilters = Object.values(result)

	console.log({ result, uniqueFilters })
	return (
		<div className='container'>
			{uniqueFilters.map(category => {
				return (
					<React.Fragment key={category?.[0]?.category}>
						<div className='divider'></div>
						{category?.map(item => {
							return (
								<div key={item.slug}>
									{/* {item.category === category && ( */}
									<button
										key={item.slug}
										onClick={() => onChange(item.slug)}
										className={`${tab === item.slug && 'buttonActive'}`}
									>
										<p>{item.label}</p>
									</button>
									{/* )} */}
								</div>
							)
						})}
					</React.Fragment>
				)
			})}
		</div>
	)
}

export default Tabs
