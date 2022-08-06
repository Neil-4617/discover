import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

const LoadingData = () => {
	return (
		<Box 
			sx={{
				display:'flex', 
				justifyContent:'center', 
				alignItems: 'center',
				minHeight: '80vh'}}>
			<CircularProgress/>
		</Box>
	)
}

export default LoadingData