import {Link} from 'react-router-dom'

// Materail UI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SvgIcon from '@mui/material/SvgIcon'
import ReportIcon from '@mui/icons-material/Report';

import imgfile from '../assets/404.png'


const PageNotFound = () => {

	return (
		<Box
			sx={{
				maxHeigth: '50vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				my: '4rem'

			}}
			>
			<Box 
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: 1,
					color: 'error.main'
				}}>
				<SvgIcon alignItems='center' sx={{ fontSize: '4rem' }} >
					<ReportIcon />
				</SvgIcon>
				<Typography variant = 'h2'>
					404
				</Typography>
			</Box>
			<Typography variant= 'h5'>Page not found</Typography>
			<Link to='/'>Back to homepage</Link>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					maxHeigth: '9vh',
					maxWidth: '50vw'
				}}
				>
				<Box component='img' src={imgfile} alt = '404 lost astronaut image' sx={{ height:'14rem'}} />
			</Box>
		</Box>
	)
}

export default PageNotFound