import { 
	GraphQLObjectType, 
	GraphQLID,
	GraphQLList } from 'graphql'

import {UserType} from './typeDef.js'
import {users} from '../sampleData.js'


// query
export const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		user: {
			type: UserType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return users.find( user => user.id === parseInt(args.id))
			}
		},
		getAllUsers: {
			type: new GraphQLList(UserType),
			args: { id: { type: GraphQLID } },
			resolve(_, args){
				return users
			}
		}
	}
})