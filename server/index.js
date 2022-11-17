// dependencies
import express from 'express' 
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import { graphqlHTTP } from 'express-graphql'
import { GraphQLSchema } from 'graphql'

import {authVerify} from './auth.js'
import {schema} from './schema/schema.js'

// env
dotenv.config()
const port = process.env.PORT || 5000


// initialized express
const app = express()

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.once('open', ()=>{
	console.log("Now connected to Local MongoDB Server")
})


// cors enable
app.use(cors())

// graphql
app.use('/graphql', graphqlHTTP((req, res) => ({ 
	schema, 
	graphiql: process.env.NODE_ENV === 'development',
	context: {
        request: req,
        currentUser: authVerify(req.headers.authorization)
    }
})))

// listen
app.listen(port, console.log(`Server running on port ${port}`))
