import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Box from '@mui/material/Box'

import Header from './components/Header'
import Posts from './components/Posts' 
import Users from './components/Users' 
import Footer from './components/Footer' 

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ApolloProvider client={client} >
      <Box>
        <Header />
        <Users />
        <Posts />
        <Footer />
      </Box>
    </ApolloProvider>
  )
}

export default App;
