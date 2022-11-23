import { 
	GraphQLObjectType, 
	GraphQLID,
	GraphQLList } from 'graphql'

// type 
import { UserType, PostType } from './typeDef.js'

// custom scalar
import {GraphqlDateTimeCustom} from './datetime.js'

// mongoose models
import { User } from '../models/User.js'
import { Post } from '../models/Post.js'

// query
export const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		currentDate: {
			type: GraphqlDateTimeCustom,
			resolve(){
				return new Date()
			}
		},
		users: {
			type: new GraphQLList(UserType),
			resolve(){
				return User.find()
			}
		},
		user: {
			type: UserType,
			args: { id: { type: GraphQLID } },
			resolve(_, args) {
				return User.findById(args.id)
			}
		},
		posts: {
			type: new GraphQLList(PostType),
			resolve(_, args){
				return Post.find()
			}
		},
		post: {
			type: PostType,
			args: { id: { type: GraphQLID } },
			resolve(_, args) {
				return Post.findById(args.id)
			}
		},
		userPosts:{
			type: new GraphQLList(PostType),
			resolve(_, args, context) {
				const userId = context.currentUser._id
				const postByUser = Post.find({ authorId: userId})
				return postByUser
			}
		}

		
	}
})