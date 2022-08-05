import Box from '@mui/material/Box'

import Nav from './Nav'
const Header = () => {
	return(
		<>
			<Nav/>
			<Box sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
				}}>
			</Box>
		</>
	)
}

export default Header