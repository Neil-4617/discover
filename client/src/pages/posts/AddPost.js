import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

// title
// text
// button

const AddPost = () => {



	return (
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
						<TextField placeholder='title' />
						
						<TextField 
							multiline
							minRows = {10}
							placeholder='type your post here...'
							
						/>
						<Box textAlign = 'center'>
							<Button variant='contained' >Add Post</Button>
						</Box>
					</FormControl>
				</Box>
		</Box>
	)
}

export default AddPost