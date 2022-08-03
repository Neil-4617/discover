import { 
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID } from 'graphql'

// type definition
import {UserType} from './typeDef.js'
import {PostType} from './typeDef.js'

// mongoose model
import { User } from '../models/User.js' 
import { Post } from '../models/Post.js' 

export const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addUser: {
			type: UserType,
			args: { 
				firstname: { type: new GraphQLNonNull(GraphQLString) }, 
				lastname: { type: new GraphQLNonNull(GraphQLString) }, 
				email: { type: new GraphQLNonNull(GraphQLString) }, 
				},
			resolve(_, args) {
				const user = new User({
					firstname: args.firstname,
					lastname: args.lastname,
					email: args.email
				})
				return user.save()
			}
		},
		addPost: {
			type: PostType,
			args: { 
				title: { type: new GraphQLNonNull(GraphQLString) }, 
				text: { type: new GraphQLNonNull(GraphQLString) },  
				authorId: { type: new GraphQLNonNull(GraphQLID) } 
				},
			resolve(_, args) {
				const post = new Post({
					title: args.title,
					text: args.text,
					authorId: args.authorId
				})
				return post.save()
			}
		},
		
	}
})