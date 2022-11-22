import { gql } from '@apollo/client'

// Add User
export const ADD_USER = gql`
	mutation addUser($firstname: String!, $lastname: String!, $email: String!){
		addUser(firstname: $firstname, lastname: $lastname, email: $email){
			id
			firstname
			lastname
			email
			role
			token
			createdAt
			updatedAt
		}
	}
`

// Login User
export const LOGIN_USER = gql`
	mutation loginUser($email: String!, $password: String!){
		loginUser(email: $email, password: $password){
			id
			firstname
			lastname
			email
			role
			token
			createdAt
			updatedAt	
		}
	}
`

// Delete user
export const DELETE_USER = gql`
	mutation deleteUser($id: ID){
		deleteUser(id: $id){
			id
			firstname
			lastname
			email
			createdAt
			updatedAt
		}
	}
`
// Add Post

export const ADD_POST = gql`
	mutation addPost($title: String!, $text: String! $authorId: ID!){
		addPost(title: $title, text: $text, authorId:$authorId){
			id
			title
			text
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
// Delete Post

export const DELETE_POST = gql `
	mutation deletePost($id: ID!){
		deletePost(id: $id){
			id
			title
			text
			createdAt
			updatedAt
			
		}
	}
`
