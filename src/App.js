// components
import React from 'react';
import Employees from './components/Employees';
import Header from './components/Header';
import Navigation from './components/Navigation';
// router
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// styles
import './App.css';

function App() {
  return (
    <Router>
      <Route>
        <Navigation />
        <Header />
        <Employees />
      </Route>
      {/* redirect any other page requests back to the home page for a true singlepage experience*/}
      <Redirect from="*" to="/" />
    </Router>
  );
}

export default App;
