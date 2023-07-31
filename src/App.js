import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Search from './pages/Search';
import { ApolloClient, InMemoryCache, ApolloProvider } from'@apollo/client';

function App() {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://countries.trevorblades.com",
  })
  return (
    <>
    <ApolloProvider  client={client}>                     
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/search' element={<Search />} />
          </Routes>
        </Router>
      </div>
    </ApolloProvider>
    </>
  );
}

export default App;
