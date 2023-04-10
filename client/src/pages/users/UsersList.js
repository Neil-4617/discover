import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import PersonIcon from '@mui/icons-material/Person'

import { getFullname } from '../../util/util.js'

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
				<ListItemText primary={getFullname(user.firstname, user.lastname)} secondary={user.email} />
			</ListItem>
		</List>
	)
}

export default UsersList