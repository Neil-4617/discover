// dependencies
import express from 'express' 
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import { graphqlHTTP } from 'express-graphql'
import { GraphQLSchema } from 'graphql'

import {schema} from './schema/schema.js'

// env
dotenv.config()
const port = process.env.PORT || 5000


// initialized express
const app = express()

// cors enable
app.use(cors())

// graphql
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }))

// listen
app.listen(port, console.log(`Server running on port ${port}`))
