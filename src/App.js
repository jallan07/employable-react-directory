// components
import React from 'react';
import Table from './components/Table/Table';
import Header from './components/Header/Header';

// router
import { BrowserRouter as Router, Route } from 'react-router-dom';
// styles
import './App.css';

function App() {
  return (
    <Router>
      <Route>
        <Header />
        <Table />
      </Route>
    </Router>
  );
}

export default App;
