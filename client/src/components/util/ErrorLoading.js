import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SvgIcon from '@mui/material/SvgIcon'
import ErrorIcon from '@mui/icons-material/Error'

const ErrorLoading = () => {
	return (
        <Box sx={{
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '80vh',
            gap: 2,
          }}>
          <SvgIcon color='error' fontSize='large'>
            <ErrorIcon />
          </SvgIcon>
          <Typography>Oooppps! Something went wrong..</Typography>
          <Box 
            component='img'
            src='./assets/images/misc-junked-tool-part.svg'
            alt='error image'
            sx={{
                height: '20vh',
                py: '4rem',
            }}  />
        </Box>
	)
}

export default ErrorLoading