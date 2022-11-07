import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'

// MaterialUI
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

// get post query
import {  GET_POST } from '../../graphql/queries.js'

import ErrorLoading from '../../components/util/ErrorLoading'
import LoadingData from '../../components/util/LoadingData'
import { getFullname, dateFormat, titleCase } from '../../components/util/util'


const Post = () => {

	const { id }  = useParams()
	const { loading, error, data } = useQuery(GET_POST, {variables: {id}})

	if(loading) return <LoadingData/>

	if(error) return <ErrorLoading/>

	return (
		<>
			{!loading && !error && (
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
				}}
				>
					<Box alignSelf='flex-start'>
						<Link to={'/'}>
							<IconButton size='large'>
								<ArrowBackIcon/>
							</IconButton>
						</Link>
					</Box>
					<Card sx={{
						minHeight: '20vh',
						minWidth: '30vw',
						maxWidth: '50vw',
						padding: '0.75rem'
					}}>
						<CardHeader
							title={titleCase(data.post.title)}
							subheader={getFullname(data.post.authorId.firstname, data.post.authorId.lastname)}
						/>
						<CardContent>
							<Typography 
								variant='subtitle2'
								color='text.secondary'
								sx={{
									fontStyle:'italic'
								}}
								>{dateFormat(data.post.updatedAt)}</Typography>
							<Typography variant='body2' color='text.secondary' my='3px'>
								{data.post.text}
							</Typography>	
						</CardContent>
					</Card>
				</Box>
			)}
		</>
	)
}

export default Post