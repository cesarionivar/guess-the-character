import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Characters } from './components/Characters';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Characters />
    </ApolloProvider>
  );
}

export default App;
