import React from 'react';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />

      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route path = "/contact" component = {Contact} />
        <Route path = "/about" component = {About} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
