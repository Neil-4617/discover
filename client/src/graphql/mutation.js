import { gql } from '@apollo/client'

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