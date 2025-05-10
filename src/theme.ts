'use client'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
	breakpoints: {
		values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1550 },
	},
	spacing: [0, 4, 8, 16, 24, 32, 40, 48, 64],
	palette: {},
	// components: {
	// },
	typography: {
		fontFamily: 'var(--font-roboto)',
	},
})

export default theme
