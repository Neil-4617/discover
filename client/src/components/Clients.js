import { useQuery } from '@apollo/client'

// get users query
import { GET_USERS } from '../graphql/queries.js'

const Clients = () => {
	const { loading, error, data } = useQuery(GET_USERS)
		
	

	if(loading) return <p>Loading...</p>
	if(error) return <p>Something went wrong</p>

	return (
		<>{ !loading && !error && (
			<div>
				{data.users.map(user =>(
					<div key={user.id}>
						<span>{user.firstname}</span>
						<span>{user.lastname}</span>
						<span>{user.email}</span>
						<span>{user.createdAt}</span>
						<span>{user.updatedAt}</span>
						<span><button onClick={ (e) => console.log(user.id)} >Delete</button></span>
						<hr/>
					</div>
				))}
			</div>
			)
		}</>
	)
}

export default Clients