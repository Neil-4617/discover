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
	email:'',
	password:'',
	showPassword: false,
}

const Login = () => {
	const [values, setValues] = useState(initialValues);


	const onSubmit = (e) => {
		e.preventDefault()
		if(values.email === ''){
			return alert('Please fill all fields')
		}
		console.log(values)
		alert("successfully login")
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


	const handleMouseDown = (event) => {
		event.preventDefault();
	};
	return (
			<Box 
				component= 'form'
				sx={{
					minHeight: '80vh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: 2,
					p: '2rem',
					mx: '2rem'
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

				<Button variant = 'contained' onClick ={onSubmit}>Login</Button>
			</Box>
	)
}

export default Login