import { useQuery } from '@apollo/client'

import Box from '@mui/material/Box'

// get users query
import { GET_ALL_POST } from '../../graphql/queries.js'

import PostList from './PostList'
import ErrorLoading from '../../components/util/ErrorLoading'
import LoadingData from '../../components/util/LoadingData'


const Posts = () => {
	const { loading, error, data } = useQuery(GET_ALL_POST)

	if(loading) return <LoadingData/>

	if(error) return <ErrorLoading/>
	
	return (
		<>{ !loading && !error && (<>
					{data.posts.map(post =>(
						<PostList key={post.id} post={post} />
					))}
			</>					
			)
		}</>
	)
}

export default Posts