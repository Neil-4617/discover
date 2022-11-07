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
            minHeight: '60vh',
            gap: 2,
            py: '2rem',
          }}>
          <SvgIcon color='error' sx={{fontSize:'5rem' }} >
            <ErrorIcon />
          </SvgIcon>
          <Typography>Oooppps! Something went wrong..</Typography>
          <Box 
            component='img'
            src='./assets/images/misc-junked-tool-part.svg'
            alt='error image'
            sx={{
                maxHeight: '10rem',
                m: '0.25rem',
                p: '3rem',
            }}  />
        </Box>
	)
}

export default ErrorLoading