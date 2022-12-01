import { 
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLNonNull } from 'graphql'

// graphql custom scalar
import {GraphqlDateTimeCustom} from './datetime.js'

// mongoose model
import { User } from '../models/User.js'

// User Type
export const UserType = new GraphQLObjectType({
	name: 'User',
	description: 'This represent a User',
	fields: {
		id: {type: GraphQLNonNull(GraphQLID)},
		firstname: {type: GraphQLNonNull(GraphQLString)},
		lastname: {type: GraphQLNonNull(GraphQLString)},
		email: {type: GraphQLNonNull(GraphQLString)},
		password: {type: GraphQLNonNull(GraphQLString)},
		role: {type: GraphQLNonNull(GraphQLString)},
		token: {type: GraphQLString},
		createdAt: {type: GraphqlDateTimeCustom},
		updatedAt: {type: GraphqlDateTimeCustom}
	},
})

export const PostType = new GraphQLObjectType({
	name: 'Post',
	description: 'This represent Post/s of a User',
	fields: () => ({
		id: {type: GraphQLNonNull(GraphQLID)},
		title: {type: GraphQLNonNull(GraphQLString)},
		text: {type: GraphQLNonNull(GraphQLString)},
		createdAt: {type: GraphqlDateTimeCustom},
		updatedAt: {type: GraphqlDateTimeCustom},
		user: {
			type: UserType,
			resolve(parent){
				return User.findById(parent.authorId)
			}
		},
	}),	
})