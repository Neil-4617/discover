// Material UI
import Box from '@mui/material/Box'
import { Outlet } from 'react-router-dom'

// components
import Nav from './Nav'
import Footer from './Footer'

const Layout = () => {
	return(
		<Box sx={{
          display: 'flex',
          flexDirection: 'column', 
          minHeight:'100vh' }} >
			<Nav />
				<Box
					sx={{
						minHeight: '80vh',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						gap: 2,
						padding: '2rem',
						mx: '2rem'
					}}
					>
					<Outlet />
				</Box>
			<Footer />
		</Box>
	)
}

export default Layout