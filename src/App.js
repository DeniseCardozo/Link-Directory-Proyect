import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';

function App() {
  return (
    <React.Fragment>
        <NavBar />
        <Route path={"/home"} component={Home} />
        <Route path={"/about"} component={About} />
    </React.Fragment>

    
  );
}

export default App;
