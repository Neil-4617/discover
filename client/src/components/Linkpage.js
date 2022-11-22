import { Link } from 'react-router-dom'

const Linkpage = () => {
	return(
		<>

			<Link to='/login'>Login</Link>
			<Link to='/register'>Register</Link>
			
			<Link to='/'>Homepage</Link>
			<Link to='/addpost'>Add Post</Link>
			<Link to='/dashboard'>User Dashboard</Link>
			<Link to='/users'>Admin Panel</Link>
		</>
	)
}

export default Linkpage