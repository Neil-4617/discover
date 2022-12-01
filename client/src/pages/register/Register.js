// Dependencies
import { useContext} from 'react'

// Material UI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
// import AccountCircle from '@mui/icons-material/AccountCircle'
// import EmailIcon from '@mui/icons-material/Email'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


import DataContext from '../../components/context/DataContext'

const Register = () => {
	const {
		values,
		handleChange,
		handleClickShowPassword,
		handleClickShowConfirmPassword,
		handleMouseDown,
		addNewUser
		} = useContext(DataContext)

	return (
			<Box
				component= 'form'
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: 1
				}}
				onSubmit={(e) =>addNewUser(e)}
			>	
				<Typography variant='h6'>Sign in</Typography>
				<FormControl sx = {{ m: 1, width: '16rem' }} variant = 'outlined'>
					<InputLabel htmlFor = 'outlined-adornment-firstname'>Firstname</InputLabel>
					<OutlinedInput
						id = 'outlined-adornment-firstname'
						type = 'text'
						value = {values.firstname}
						onChange = {handleChange('firstname')}
						label = 'Firstname'
					/>
				</FormControl>

				<FormControl sx = {{ m: 1, width: '16rem' }} variant = 'outlined'>
					<InputLabel htmlFor = 'outlined-adornment-lastname'>Lastname</InputLabel>
					<OutlinedInput
						id = 'outlined-adornment-lastname'
						type = 'text'
						value = {values.lastname}
						onChange = {handleChange('lastname')}
						label = 'Lastname'
					/>
				</FormControl>
				
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
				<Button variant = 'contained' type='submit' sx={{mb:'1rem'}} >Sign up</Button>
			</Box>
	)
} 

export default Register