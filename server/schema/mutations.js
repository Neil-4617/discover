import { 
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLString } from 'graphql'

import {UserType} from './typeDef.js'
import {users} from '../sampleData.js'

export const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addUser: {
			type: UserType,
			args: { firstname: { type: new GraphQLNonNull(GraphQLString) } },
			resolve(_, args) {
				console.log(users.length + 1)
				users.push({ id: users.length + 1, firstname: args.firstname })
				return args
			}
		}
	}
})