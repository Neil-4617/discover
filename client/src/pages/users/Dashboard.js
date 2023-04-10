// Material UI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client'

import { ADD_POST } from '../../graphql/mutations'
import { GET_ALL_POST_BY_USER, GET_ALL_POST} from '../../graphql/queries'

import UserPosts from './UserPosts'
import AddPost from '../posts/AddPost'



const Dashboard = () => {
	const [addPost] = useMutation(ADD_POST)
	
	const {data} = useQuery(GET_ALL_POST_BY_USER)
	const {postData} = useQuery(GET_ALL_POST)

	const [isOpen, setIsOpen] = useState(false)
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')

	const user = localStorage.getItem('user') || null
	const userId = localStorage.getItem('userId')

	const addPostButtonLabel = isOpen ? 'Close' : 'Create Post' 

	useEffect(() => {}, [data])

	// handle add/submit post
	const handleAddPost = (e) => {
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
					body: body,
					authorId: userId
				},
				refetchQueries: [{query: GET_ALL_POST}],
			}).then((response) => {
				const post = response.data.addPost

				if(post){
					alert('Add Post Successful')
					setTitle('')
					setBody('')
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
				
				<Button onClick={() => setIsOpen(!isOpen)}>{addPostButtonLabel}</Button>
				{isOpen ? <AddPost handleAddPost={handleAddPost} title={title} setTitle={setTitle} body={body} setBody={setBody}/>: null}
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						gap: 2,
						padding: '2rem',
						mx: '2rem'
					}}>
					{data 
						? (data.userPosts.map(userPost =>
							<UserPosts key={userPost.id} userPost={userPost} />
							) )
						: (<Typography>Your post will display here...</Typography>)
					}
				</Box>
			</>
			: <>
				<Typography sx={{ mx:'auto' }}>user login failed</Typography>
				<Link to='/login'>Click here to login</Link>
			</>
		}
		</>
	)
}

export default Dashboard