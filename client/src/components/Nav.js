import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'

const Nav = () => {
	return (
		<AppBar 
			component='nav' 
			position='static' 
			sx={{
				minHeight: '10vh'
			}}>
			<Toolbar>
				<Box 
					component='img' 
					alt='logo' 
					src='./assets/images/NavBrand-Portfolio.svg'
					sx={{ 
							height:'50px',
							py: '2px'
						}}/>
			</Toolbar>
		</AppBar>
	)
}

export default Nav