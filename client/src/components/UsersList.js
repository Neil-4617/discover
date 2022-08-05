import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import PersonIcon from '@mui/icons-material/Person'

import { getFullname, titleCase } from './util'

const UsersList = ({user}) => {
	return (
		<List 
			sx={{
				minWidth: '50vw',
				maxWidth: '80vw'
			}}>
			<ListItem>
				<ListItemAvatar>
					<PersonIcon />
				</ListItemAvatar>
				<ListItemText primary={titleCase(getFullname(user.firstname, user.lastname))} secondary={user.email} />
			</ListItem>
		</List>
	)
}

export default UsersList