import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { Layout } from './Layout';
import { NoMatch } from './components/NoMatch';
import { Home } from './components/Home';
import Login  from './components/Login';
import { List, People } from './components/People';
import { NavigationBar } from './components/NavigationBar';

function App() {
  const [token, setToken] = useState();

  if (!token){
    return (
      <Login setToken={setToken} />
    )
  }

  return (
    <div className="App">
      <React.Fragment>
        <NavigationBar />
        <Layout>
          <Router>
            <Routes>
              <Route path="/" element={<List />} />
              <Route path="Home" element={<Home />} />
              <Route path="People" element={<List />}  />
              <Route element={<NoMatch/>} />
            </Routes>
          </Router>
        </Layout>
      </React.Fragment>
    </div>
  );
}

export default App;
