import { gql } from '@apollo/client'

// Add User
export const ADD_USER = gql`
	mutation addUser($firstname: String!, $lastname: String!, $email: String!){
		addUser(firstname: $firstname, lastname: $lastname, email: $email){
			id
			firstname
			lastname
			email
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