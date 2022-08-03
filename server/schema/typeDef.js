import { 
	GraphQLObjectType,
	GraphQLID,
	GraphQLString } from 'graphql'

// graphql custom scalar
import {GraphqlDateTimeCustom} from './datetime.js'

// mongoose model
import { User } from '../models/User.js'

// User Type
export const UserType = new GraphQLObjectType({
	name: 'User',
	fields: () => ({
		id: {type: GraphQLID},
		firstname: {type: GraphQLString},
		lastname: {type: GraphQLString},
		email: {type: GraphQLString},
		createdAt: {type: GraphqlDateTimeCustom},
		updatedAt: {type: GraphqlDateTimeCustom}
	}),
})

export const PostType = new GraphQLObjectType({
	name: 'Post',
	fields: () => ({
		id: {type: GraphQLID},
		title: {type: GraphQLString},
		text: {type: GraphQLString},
		createdAt: {type: GraphqlDateTimeCustom},
		updatedAt: {type: GraphqlDateTimeCustom},
		authorId: {
			type: UserType,
			resolve(parent){
				return User.findById(parent.authorId)
			}
		},
	}),	
})