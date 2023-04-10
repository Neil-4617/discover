import { useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client'

// Material UI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

// Mutation
import {  UPDATE_POST } from '../../graphql/mutations.js'

// Query
import { GET_POST } from '../../graphql/queries'

const UpdatePostForm = () => {
	const {id} = useParams()
	const navigate = useNavigate()
	const location = useLocation()
	// check where page heading and page came from
	const from = location.state?.from?.pathname || '/'

	const {data} = useQuery(GET_POST, {variables:{id}})

	const [titleEdit, setTitleEdit] = useState(data.post.title || '')
	const [bodyEdit, setBodyEdit] = useState(data.post.body || '')

	const [updatePost] = useMutation(UPDATE_POST, {
		variables: {
			id: data.post.id,
			title: titleEdit,
			body: bodyEdit
			},
		refetchQueries: [{query: GET_POST, variables: {id: data.post.id}}],
		onCompleted: () => navigate('/dashboard')
	})


	// Update
	const handleUpdatePost = (e) => {
		e.preventDefault()

		if(titleEdit === '' || bodyEdit === ''){
			return alert('Please fill all fields')
		}
		// update post
		updatePost(titleEdit, bodyEdit)
		setTitleEdit('')
		setBodyEdit('')
	}

	return (
		<>
			<Box
				component = "form"
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
				onSubmit = {(e) => handleUpdatePost(e)}
				>
				<Typography>Update Post From</Typography>
					<Box
						sx={{
							minWidth: '50vw'
						}}>
			 
						<FormControl 
							fullWidth
							sx={{
								gap: 2
							}} >
							<TextField 
								placeholder='title'
								value = {titleEdit}
								onChange={(e) => setTitleEdit(e.target.value)} />
						
							<TextField 
								multiline
								minRows = {10}
								placeholder='type your post here...'
								value={bodyEdit}
								onChange={(e) => setBodyEdit(e.target.value)}
							/>
							<Box textAlign = 'center'>
								<Button variant='contained' type='submit'>Update Post</Button>
							</Box>
							<Box textAlign = 'center'>
								<Button variant='contained' type='submit'>Cancel</Button>
							</Box>
							
						</FormControl>
					</Box>
			</Box>
		</>
	)
}

export default UpdatePostForm