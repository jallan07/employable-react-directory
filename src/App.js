// components
import React from 'react';
import TableContainer from './components/table/TableContainer';
import Header from './components/Header';
import Search from './components/Search';

// router
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// styles
import './App.css';

function App() {
  return (
    <Router>
      <Route>
        <Header />
        <Search />
        <TableContainer />
      </Route>
      {/* redirect any other page requests back to the home page for a true singlepage experience*/}
      <Redirect from="*" to="/" />
    </Router>
  );
}

export default App;
