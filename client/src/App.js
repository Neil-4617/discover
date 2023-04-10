import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// components
import Users from './pages/users/Users' 
import Homepage from './pages/home/Homepage' 
import Dashboard from './pages/users/Dashboard' 
import AddPost from './pages/posts/AddPost' 
import Post from './pages/posts/Post' 
import Register from './pages/register/Register' 
import LoginPage from './pages/login/LoginPage' 
import PageNotFound from './pages/PageNotFound' 
import Layout from './layout/Layout'
import RequireAuth from './components/RequireAuth'
import UpdatePostForm from './pages/posts/UpdatePostForm'


//  context
import { DataProvider } from './components/context/DataContext'

// Apollo setup
// Link 
// uri: 'http://localhost:5000/graphql'

const httpLink = new HttpLink({
  uri: 'https://neil-discover-api.onrender.com/graphql'
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
      <Router>
        <DataProvider>
        <Routes>
          <Route path='/'  element={<Layout/>} >

            {/* protected routes */}
            <Route element={<RequireAuth />}>
              <Route path='/dashboard'  element={<Dashboard/>} />
              <Route path='/users'  element={<Users/>} />
              <Route path='/addpost'  element={<AddPost/>} />
              <Route path='/post/:id'  element={<Post/>} />
              <Route path='/post-edit/:id'  element={<UpdatePostForm/>} />
            </Route>

            {/* public routes */}
            <Route path='/'  element={<Homepage/>} />
            <Route path='/login'  element={<LoginPage/>} />
            <Route path='/register'  element={<Register/>} />
            
            <Route path='*'  element={<PageNotFound/>} />
          
          </Route>
        </Routes>
      </DataProvider>
      </Router>
    </ApolloProvider>
  )
}

export default App;
