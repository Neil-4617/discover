// Dependencies
import { createContext, useState, useEffect } from 'react' 
import { useMutation } from '@apollo/client'
import { useNavigate, useLocation } from 'react-router-dom'

// graphql
import { ADD_USER, LOGIN_USER } from '../../graphql/mutations'

// DataContext
const DataContext = createContext({})

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

export const DataProvider = ({children}) => {
	const [auth, setAuth] = useState({})
	const [currentUser, setCurrentUser] = useState(false)
	const [sign, setSign] = useState(true)
	const [values, setValues] = useState(initialValues)

	const location = useLocation()
	const navigate = useNavigate()

	// check if user still login
	useEffect(() => {}, [currentUser])

	// handle user register
	const [addUser]= useMutation(ADD_USER)

	const addNewUser = (e) => {
		e.preventDefault()
		if(values.firstname === '' || values.lastname === '' || values.email === '' || values.password === ''){
			return alert('Please fill all fields')
		}
		addUser({
			variables: { 
				firstname:values.firstname, 
				lastname:values.lastname, 
				email: values.email, 
				password: values.password 
			},
		}).then((response) =>{
			const data = response.data.addUser

			if (data){
				localStorage.setItem('userId', data.id)
				localStorage.setItem('user', data.firstname)
				localStorage.setItem('role', data.role)
				localStorage.setItem('token', data.token)
				
				// store in global context
				setAuth({userId: data.id, user:data.firstname, role: data.role, token: data.token})
				setCurrentUser(true)
				alert("successfully registered")
				// check where page heading and page came from
				navigate(location.state?.from?.pathname || '/dashboard', { replace: true })
				// clean up
				setValues(initialValues)
			}
			else{
				alert("Login Failed")
			}
		})
	}
	// end user register

	// handle user login
	const [loginUser] = useMutation(LOGIN_USER) 

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
				setCurrentUser(true)
				alert("successfully login")
				setValues(initialValues)
				navigate(location.state?.from?.pathname || '/dashboard', { replace: true })
			}
			else {
				alert("Login Failed")
			}
		})
	} 
	// end user login

	// handle user logout
	const logoutUser = () => {
		localStorage.removeItem('token')
		localStorage.removeItem('userId')
		localStorage.removeItem('user')
		localStorage.removeItem('role')
		setCurrentUser(false)
		setSign(true)
		navigate('/')
	}
	// end user logout

	// handle changes
	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	// handle Click for ShowPassword
	const handleClickShowPassword = () => {
		setValues({
		  ...values,
		  showPassword: !values.showPassword,
		})
	}
	
	// handle Click for ShowConfirmPassword
	const handleClickShowConfirmPassword = () => {
		setValues({
		  ...values,
		  showConfirmPassword: !values.showConfirmPassword,
		})
	}

	// handle mouse down
	const handleMouseDown = (e) => {
		e.preventDefault();
	};

	return (
		<DataContext.Provider value={{
			auth, 
			setAuth,
			logoutUser,
			currentUser,
			setCurrentUser,
			sign,
			setSign,
			handleChange,
			initialValues,
			values,
			setValues,
			addNewUser,
			handleMouseDown,
			handleClickShowPassword,
			handleClickShowConfirmPassword,
			navigate,
			login,

			}}>

			{children}
		</DataContext.Provider>
	)
}

export default DataContext
