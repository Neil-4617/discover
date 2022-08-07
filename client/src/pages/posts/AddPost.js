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
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				gap: 2,
				m: '1rem',
				py: '2rem',
			}}
			>
			<Typography>Create a new post</Typography>
				<Box
					sx={{
						maxHeight: '75vh',
						minWidth: '50vw',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						gap: 2,
						p: '2rem',
					}}>
			 
					<FormControl fullWidth>
						<TextField placeholder='title' />
					</FormControl>
						
					<FormControl
						fullWidth
						sx={{
							minHeight: '50vh',
						}} 
						>
					<TextField 
						multiline
						minRows = {15}
						maxRows = {15}
						placeholder='type your post here...'
						
					/>
					</FormControl>
					<Button variant='contained' >Add Post</Button>
				</Box>
			
		</Box>
	)
}

export default AddPost