import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Material UI
import Box from '@mui/material/Box'

// components
import Homepage from './pages/home/Homepage' 
import Register from './pages/register/Register' 
import Login from './pages/login/Login' 
import PageNotFound from './pages/PageNotFound' 

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
      <Router>
        <Box>
          <Routes>
            <Route path='/'  element={<Homepage/>} />
            <Route path='/login'  element={<Login/>} />
            <Route path='/register'  element={<Register/>} />
            <Route path='*'  element={<PageNotFound/>} />
          </Routes>
        </Box>
      </Router>
    </ApolloProvider>
  )
}

export default App;
