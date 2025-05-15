import React from 'react'
import { Container } from '@mui/material'

interface RootContainerProps {
	children: React.ReactNode
}

const RootContainer = ({ children }: RootContainerProps) => {
	return (
		<Container maxWidth='lg' sx={{ padding: { xs: 3, md: 6 } }}>
			{children}
		</Container>
	)
}

export default RootContainer
