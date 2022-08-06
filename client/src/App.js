import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Box from '@mui/material/Box'

import Header from './components/Header'
import Footer from './components/Footer' 
import Posts from './pages/posts/Posts' 
import Users from './pages/users/Users' 
import Register from './pages/register/Register' 

const cache = new InMemoryCache({
  typePolicies: {
    Query:{
      fields: {
        users: {
          merge(existing, incoming){
            return incoming
          }
        },
        posts: {
          merge(existing, incoming){
            return incoming
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache
})

const App = () => {
  return (
    <ApolloProvider client={client} >
      <Box>
        <Header />
        <Register />
        <Users />
        <Posts />
        <Footer />
      </Box>
    </ApolloProvider>
  )
}

export default App;
