import { 
	GraphQLObjectType,
	GraphQLID,
	GraphQLString } from 'graphql'

// User Type
export const UserType = new GraphQLObjectType({
	name: 'User',
	fields: () => ({
		id: {type: GraphQLID},
		firstname: {type: GraphQLString}
	})
})