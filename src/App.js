// components
import React from 'react';
import Table from './components/Table/Table';
import Header from './components/Header/Header';

// router
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// styles
import './App.css';

function App() {
  return (
    <Router>
      <Route>
        <Header />
        <Table />
      </Route>
      <Redirect path="/*" to="/" />
    </Router>
  );
}

export default App;
