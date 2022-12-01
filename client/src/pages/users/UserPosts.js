// Material UI
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { Link } from 'react-router-dom'

import { getFullname, dateFormat, titleCase } from '../../components/util/util'

const UserPosts = ({userPost}) => {
	return (
		<Card 
				sx={{
					minHeight: '20vh',
					minWidth: '30vw',
					maxWidth: '50vw',
					padding: '0.75rem'
				}}>
				<CardHeader
					title={titleCase(userPost.title)}
					subheader={getFullname(userPost.user.firstname, userPost.user.lastname)}
				>
				</CardHeader>
				<CardContent>
					<Typography 
						variant='subtitle2'
						color='text.secondary'
						sx={{
							fontStyle:'italic'
						}}
						>{dateFormat(userPost.updatedAt)}</Typography>
					<Typography variant='body2' color='text.secondary' my='3px' noWrap>
						{userPost.text}
					</Typography>
					<Link to= {'/post/'+ userPost.id}>
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

export default UserPosts