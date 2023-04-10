import { gql } from '@apollo/client'

// get users
export const GET_USERS = gql`
	query getUsers {
		users{
			id
			firstname
			lastname
			email
			createdAt
			updatedAt
		}
	}
`
// Get User
export const GET_USER = gql`
	query getUser($id: ID!) {
		user(id: $id){
			id
			firstname
			lastname
			email
			createdAt
			updatedAt
		}
	}
`


//  Get All Post
export const GET_ALL_POST = gql`
	query getPost{
		posts{
			id
			title
			body
			createdAt
			updatedAt
			user{
				id
				firstname
				lastname
			}
		}
	}
`
// Get all posts by user
export const GET_ALL_POST_BY_USER = gql`
	query getAllPostByUser{
		userPosts{
			id
			title
			body
			createdAt
			updatedAt
			user{
				id
				firstname
				lastname
				email
				role
			}
		}
	}
`

// GET POST
export const GET_POST = gql`
	query getPost($id: ID!) {
		post(id: $id){
			id
			title
			body
			createdAt
			updatedAt
			user{
				id
				firstname
				lastname
				email
			}
		}
	}
`