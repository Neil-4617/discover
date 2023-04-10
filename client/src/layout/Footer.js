import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SvgIcon from '@mui/material/SvgIcon'
import CopyrightIcon from '@mui/icons-material/Copyright'

const Footer = () => {
	return (
		<Box 
			component='div' 
			sx={{ 
				minHeight: '8vh',
				mt:'auto',
				bgcolor: 'primary.main',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				gap: 1 }}>
				<SvgIcon fontSize='small'>
					<CopyrightIcon/>
				</SvgIcon>
			<Typography variant='caption'>Copyright 2022</Typography>
		</Box>
	)
}

export default Footer