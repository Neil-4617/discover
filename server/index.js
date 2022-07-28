// dependencies
import express from 'express' 
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import { graphqlHTTP } from 'express-graphql'
import { GraphQLSchema } from 'graphql'

// env
dotenv.config()
const port = process.env.PORT || 5000


// initialized express
const app = express()

// cors enable
app.use(cors())

// graphql
const schema = new GraphQLSchema({})

app.use('graphql', graphqlHTTP({ 
	schema, 
	graphiql: process.env.NODE_ENV === 'development'
}))

// listen
app.listen(port, console.log(`Server running on port ${port}`))
