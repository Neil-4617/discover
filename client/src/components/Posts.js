import { useQuery } from '@apollo/client'

// get users query
import { GET_ALL_POST } from '../graphql/queries.js'

const Posts = () => {
	const { loading, error, data } = useQuery(GET_ALL_POST)


	if(loading) return <p>Loading...</p>
	if(error) return <p>Something went wrong</p>

	return (
		<>{ !loading && !error && (
			<div>
				{data.posts.map(post =>(
					<div key={post.id}>
						<p>{post.title}</p>
						<p>{post.text}</p>
						<p>
							<span>{post.authorId.firstname}</span>
							<span>{post.authorId.lastname}</span>
						</p>
						<p>{post.createdAt}</p>
						<p>{post.updatedAt}</p>
						<div><button onClick= {(e)=> console.log(post.id) } >Delete</button></div>
						<hr/>
					</div>
				))}
			</div>
			)
		}</>
	)
}

export default Posts