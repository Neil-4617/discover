import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
// import AccountCircle from '@mui/icons-material/AccountCircle'
// import EmailIcon from '@mui/icons-material/Email'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import { useState } from 'react'

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

const Login = () => {
	const [values, setValues] = useState(initialValues);


	const onSubmit = (e) => {
		e.preventDefault()
		if(values.email === ''){
			return alert('Please fill all fields')
		}
		console.log(values)
		alert("successfully register")
		setValues(initialValues)
	}

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({
		  ...values,
		  showPassword: !values.showPassword,
		})
	}

	const handleClickShowConfirmPassword = () => {
		setValues({
		  ...values,
		  showConfirmPassword: !values.showConfirmPassword,
		})
	}


	const handleMouseDown = (event) => {
		event.preventDefault();
	};
	return (
		<Container>
			<Box 
				component= 'form'
				sx={{
					maginTop: '2rem',
					padding: '2rem',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: 2,
				}}>
				<FormControl sx = {{ m: 1, width: '16rem' }} variant = 'outlined'>
					<InputLabel htmlFor = 'outlined-adornment-email'>Email</InputLabel>
					<OutlinedInput
						id = 'outlined-adornment-email'
						type = 'email'
						value = {values.email}
						onChange = {handleChange('email')}
						label = 'Email'
					/>
				</FormControl>

				<FormControl sx = {{ m: 1, width: '16rem' }} variant = 'outlined'>
					<InputLabel htmlFor = 'outlined-adornment-password'>Password</InputLabel>
					<OutlinedInput
						id = 'outlined-adornment-password'
						type = {values.showPassword ? 'text' : 'password'}
						value = {values.password}
						onChange = {handleChange('password')}
						endAdornment = {
							<InputAdornment position='end'>
								<IconButton
								  aria-label = 'toggle password visibility'
								  onClick = { handleClickShowPassword}
								  onMouseDown = {handleMouseDown}
								  edge = "end"
								>
								  {values.showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
							}
						label="Password"
						/>
				</FormControl>

				<FormControl sx={{ m: 1, width: '16rem' }} variant='outlined' >
					<InputLabel>Confirm Password</InputLabel>
					<OutlinedInput
						id = "outlined-adornment-confirm-password"
						type = {values.showConfirmPassword ? 'text' : 'password'}
						value = {values.confirmPassword}
						onChange = { handleChange('confirmPassword') }
						label = "Confirm Password"
						endAdornment = {
								<InputAdornment position='end'>
									<IconButton
										aria-label = 'toggle confirm password visibility'
										onClick = {handleClickShowConfirmPassword}
										onMouseDown = {handleMouseDown}
										edge = "end"
									>
										{values.showConfirmPassword ? <VisibilityOff/> : <Visibility/>}
									</IconButton>
								</InputAdornment>
							}
						/>
				</FormControl>

				<Button variant = 'contained' onClick ={onSubmit}  >Login</Button>
			</Box>
		</Container>
	)
}

export default Login