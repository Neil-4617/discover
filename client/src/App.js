import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Clients from './components/Clients.js' 
import Posts from './components/Posts.js' 

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ApolloProvider client={client} >
      <div className="container">
        <h1>Start a blog</h1>
        <Clients />
        <Posts />
      </div>
    </ApolloProvider>
  );
}

export default App;
