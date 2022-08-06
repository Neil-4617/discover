import { useQuery } from '@apollo/client'

import Box from '@mui/material/Box'

// get users query
import { GET_USERS } from '../../graphql/queries.js'

import ErrorLoading from '../../components/util/ErrorLoading'
import LoadingData from '../../components/util/LoadingData'
import UsersList from './UsersList'

const Users = () => {
	const { loading, error, data } = useQuery(GET_USERS)
		
	

	if(loading) return <LoadingData />
	if(error) return <ErrorLoading />

	return (
		<>{ !loading && !error && (
			<Box 
				sx={{
					minHeight: '80vh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: 2,
					padding: '2rem',
					mx: '2rem'
				}}>
				{data.users.map(user =>(
					<UsersList key={user.id} user={user}/>
					
				))}
			</Box>
			)
		}</>
	)
}

export default Users