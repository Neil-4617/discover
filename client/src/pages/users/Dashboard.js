// Material UI
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client'

import AddPost from '../posts/AddPost'
import { ADD_POST } from '../../graphql/mutations'
// import { GET_ALL_POST_BY_USER } from '../../graphql/queries'

const Dashboard = () => {
	const [addPost] = useMutation(ADD_POST)
	


	const [isOpen, setIsOpen] = useState(false)
	const [title, setTitle] = useState('')
	const [text, setText] = useState('')
	const navigate = useNavigate()

	const user = localStorage.getItem('user')
	const userId = localStorage.getItem('userId')

	// const {data} = useQuery(GET_ALL_POST_BY_USER, {
	// 	variables: {userId}
	// })

	const addPostButtonLabel = isOpen ? 'Close' : 'Create Post' 

	// handle user logout
	const logoutUser = () => {
		localStorage.removeItem('token')
		localStorage.removeItem('userId')
		localStorage.removeItem('user')
		localStorage.removeItem('role')
		navigate('/')
	}

	// handle add/submit post
	const handleSubmit = (e) => {
		e.preventDefault()
		// check user id
		if(!user){
			return alert('User data error')
		}
		else{
			// add post
			addPost({
				variables: {
					title: title,
					text: text,
					authorId: userId
				}
			}).then((response) => {
				const post = response.data.addPost

				if(post){
					alert('Add Post Successful')
					setText('')
					setTitle('')
					setIsOpen(!isOpen)
				}
				else{
					alert('Failed, Try again...')
				}
			})
		}
	}
	

	return (
		<>
		{ user 
			?<>	
				 
				<Typography>{user}'s Dashboard</Typography>
				
				<Button onClick={() => navigate('/')}>Go to Homepage</Button>
				<Button>Profile</Button>
				<Button onClick={logoutUser}>Logout</Button>
				<Button onClick={() => setIsOpen(!isOpen)}>{addPostButtonLabel}</Button>
				{isOpen ? <AddPost handleSubmit={handleSubmit} title={title} setTitle={setTitle} text={text} setText={setText}/>: null}
				<ul>
					<li>List of User's Post</li>
				</ul>
			</>
			: <>
				{navigate('/') }
				<Typography>user login failed</Typography>
				<Link to='/login'>Click here to login</Link>
			</>
		}
		</>
	)
}
export default Dashboard