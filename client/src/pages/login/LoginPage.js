import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import useAuth from '../../components/hooks/useAuth'

import { LOGIN_USER } from '../../graphql/mutations'


// initial values
const initialValues = {
	email:'',
	password:'',
	showPassword: false,
}

const LoginPage = () => {
	const {setAuth} = useAuth() 

	const navigate = useNavigate()
	const location = useLocation()
	// check where page heading and page came from
	const from = location.state?.from?.pathname || '/'



	const [loginUser] = useMutation(LOGIN_USER) 
	const [values, setValues] = useState(initialValues)

	const login = (e) => {
		e.preventDefault()
		if(values.email === '' || values.password === ''){
			return alert('Please fill all fields')
		}
		loginUser({
			variables: {
				email: values.email, 
				password: values.password
			}
		}).then((response) => {
			const data = response.data.loginUser

			if (data){
				localStorage.setItem('userId', data.id)
				localStorage.setItem('user', data.firstname)
				localStorage.setItem('role', data.role)
				localStorage.setItem('token', data.token)
				
				// store in global context
				setAuth({userId: data.id, user:data.firstname, role: data.role, token: data.token})
				alert("successfully login")
				setValues(initialValues)
				navigate(from, { replace: true })
			}
			else {
				alert("Login Failed")
			}
		})
	} 


	const handleChange = (prop) => (e) => {
		setValues({ ...values, [prop]: e.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({
		  ...values,
		  showPassword: !values.showPassword,
		})
	}


	const handleMouseDown = (e) => {
		e.preventDefault()
	}
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
				}}
				onSubmit= {(e) => login(e)} >
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

				<Button variant = 'contained' type='submit'>Login</Button>
			</Box>
	)
}

export default LoginPage