import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Material UI
import Box from '@mui/material/Box'

// components
import Nav from './components/Nav' 
import Footer from './components/Footer' 
import Users from './pages/users/Users' 
import Homepage from './pages/home/Homepage' 
import Dashboard from './pages/users/Dashboard' 
import AddPost from './pages/posts/AddPost' 
import Post from './pages/posts/Post' 
import Register from './pages/register/Register' 
import LoginPage from './pages/login/LoginPage' 
import PageNotFound from './pages/PageNotFound' 
import Layout from './components/Layout'
import Linkpage from './components/Linkpage'
import RequireAuth from './components/RequireAuth'


//  context
import { AuthProvider } from './components/context/AuthProvider'

// Apollo setup
// Link 
const httpLink = new HttpLink({
  uri: 'http://localhost:5000/graphql'
})

// token
const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('token')

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})
// cache
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
  link: authLink.concat(httpLink),
  cache
})

const App = () => {
  return (
    <ApolloProvider client={client} >
    <AuthProvider>
      <Router>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column', 
          minHeight:'100vh' }} >
          <Nav />
          <Routes>
            <Route path='/'  element={<Layout/>} >

              {/* protected routes */}
              <Route element={<RequireAuth />}>
                <Route path='/dashboard'  element={<Dashboard/>} />
                <Route path='/users'  element={<Users/>} />
                <Route path='/addpost'  element={<AddPost/>} />
                <Route path='/post/:id'  element={<Post/>} />
              </Route>

              {/* public routes */}
              <Route path='/'  element={<Homepage/>} />
              <Route path='/linkpage'  element={<Linkpage/>} />
              <Route path='/login'  element={<LoginPage/>} />
              <Route path='/register'  element={<Register/>} />
              
              <Route path='*'  element={<PageNotFound/>} />
            
            </Route>
          </Routes>
          <Footer/>
        </Box>
      </Router>
    </AuthProvider>
    </ApolloProvider>
  )
}

export default App;
