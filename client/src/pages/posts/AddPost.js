import { useState } from 'react'

// Material UI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

const AddPost = () => {
	
	const [title, setTitle] = useState('')
	const [text, setText] = useState('')

	const onSubmit = (e) => {
		e.preventDefault()

		if(title === '' || text === '') {
			return alert('Please fill in all fields')
		}
		console.log(title, text)
		alert('Post Added')
		setTitle('')
		setText('')
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
				>
				<Typography>Create a new post</Typography>
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
								value = {title}
								onChange={(e) => setTitle(e.target.value)} />
						
							<TextField 
								multiline
								minRows = {10}
								placeholder='type your post here...'
								value={text}
								onChange={(e) => setText(e.target.value)}
							/>
							<Box textAlign = 'center'>
								<Button variant='contained' onClick={onSubmit}>Add Post</Button>
							</Box>
						</FormControl>
					</Box>
			</Box>
		</>
	
	)
}

export default AddPost