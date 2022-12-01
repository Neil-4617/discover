import bcrypt from 'bcrypt'

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

// token
import { createToken } from '../auth.js'

export const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	description: 'Represent type of changes to collection',
	fields: {
		// add user
		addUser: {
			type: UserType,
			description: 'Add user with a default role value for member',
			args: { 
				firstname: { type: new GraphQLNonNull(GraphQLString) }, 
				lastname: { type: new GraphQLNonNull(GraphQLString) }, 
				email: { type: new GraphQLNonNull(GraphQLString) }, 
				password: { type: new GraphQLNonNull(GraphQLString) },
				},
			resolve(_, args) {
				const user = new User({
					firstname: args.firstname,
					lastname: args.lastname,
					email: args.email,
					password: bcrypt.hashSync(args.password, 10),
					role: 'member'
				})
				return user.save()
			}
		},

		// login user
		loginUser: {
			type: UserType,
			description: 'Authenticate User and create a token',
			args: {
				email: { type: new GraphQLNonNull(GraphQLString) }, 
				password: { type: new GraphQLNonNull(GraphQLString) }, 
			},
			resolve(_, args) {
				// check if user exist using email
				const query = User.findOne({email: args.email})
				
				return query.then((user) => user).then((user)=> {
					if(!user) return null
		
					const isPasswordMatched = bcrypt.compareSync(args.password, user.password)

					if (isPasswordMatched) {
						user.token = createToken(user.toObject())
						return user
					}
					else {
						return null
					}
				})
			}
		},

		// delete user
		deleteUser:{
			type: UserType,
			description: 'Remove user completely to collection',
			args: { id: { type: GraphQLNonNull(GraphQLID) } },
			resolve(_, args){
				return User.findByIdAndRemove(args.id)
			}
		},

		// update user
		updateUser: {
			type: UserType,
			description: 'Update User',
			args: {
				id: { type: new GraphQLNonNull(GraphQLID) },
				firstname: { type: new GraphQLNonNull(GraphQLString) },
				lastname: { type: new GraphQLNonNull(GraphQLString) },
				email: { type: new GraphQLNonNull(GraphQLString) },
				role: { type: new GraphQLNonNull(GraphQLString) },
			},
			resolve(_, args){
				return User.findOneAndUpdate(
					args.id,
					{
						$set:{
							firstname: args.firstname,
							lastname: args.lastname,
							email: args.email,
							role: args.role,
							updatedAt: new Date().toISOString()
						},
					},
					{ new: true }
				)
			}
		},

		// add post
		addPost: {
			type: PostType,
			description: 'Authorized user can create post',
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
		
		// delete post
		deletePost:{
			type: PostType,
			description: 'Remove post completely from collection by authorized user',
			args: { id: { type: GraphQLNonNull(GraphQLID) } },
			resolve(_, args){
				return Post.findByIdAndRemove(args.id)
			}
		},

		// update post
		updatePost:{
			type: PostType,
			description: 'Authorized user can update post',
			args: {
				id: { type: new GraphQLNonNull(GraphQLID) },
				title: { type: new GraphQLNonNull(GraphQLString) },
				text: { type: new GraphQLNonNull(GraphQLString) }
			},
			resolve(_, args) {
				const postId = {id : args._id}
				const postDetails = { title: args.title, text: args.text, updatedAt: new Date().toISOString()}
				console.log(postId, postDetails)

				return Post.findOneAndUpdate(postId, postDetails)
			}
		},
	}
})