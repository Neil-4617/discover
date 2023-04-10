import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { getFullname, dateFormat, titleCase } from '../../util/util'
 
const PostList = ({post}) => {

	return (
		<Card sx={{
			minHeight: '20vh',
			minWidth: '30vw',
			maxWidth: '50vw',
			padding: '0.75rem'
		}}>
			<CardHeader
				title={titleCase(post.title)}
				subheader={getFullname(post.user.firstname, post.user.lastname)}
			>
			</CardHeader>
			<CardContent>
				<Typography 
					variant='subtitle2'
					color='text.secondary'
					sx={{
						fontStyle:'italic'
					}}
					>{dateFormat(post.updatedAt)}</Typography>
				<Typography variant='body2' color='text.secondary' my='3px' noWrap>
					{post.body}
				</Typography>
				<Link to= {'/post/'+ post.id}>
					<Button size='small'>
						<Typography variant="caption">
							continue reading...
						</Typography>
					</Button>
				</Link>
			</CardContent>
		</Card>
	)
}

export default PostList