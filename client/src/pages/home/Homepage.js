// Dependencies
import { useContext } from 'react'

// Material UI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// components
import Posts from '../posts/Posts' 
import LoginPage from '../login/LoginPage' 
import RegisterPage from '../register/Register' 

import DataContext from '../../components/context/DataContext'

// initial values
const initialValues = {
	firstname:'',
	lastname: '',
	email:'',
	password:'',
	confirmPassword: '',
	showPassword: false,
	showConfirmPassword: false,
}

const Homepage = () => {
	const {sign, setSign} = useContext(DataContext)



		// <>	
		// 	<Box
		// 		sx={{
		// 			display: 'flex',
		// 			flexDirection: 'column',
		// 			justifyContent: 'Center',
		// 			alignItems: 'center',
		// 			gap: 2,
		// 			py: '2rem'
		// 		}}>
		// 		<Typography variant='h5' >Sign {sign? 'in': 'up'}</Typography>
		// 		{sign ? <LoginPage />: <RegisterPage />}
		// 		<Button variant = 'outlined' onClick={() => setSign(!sign)}>
		// 			<Typography variant='caption' >{sign? 'Create account': 'Sign in instead'}</Typography>
		// 		</Button>
		// 	</Box>
		// </>
	return (
		<Posts/>
	)
} 

export default Homepage