import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import { Navbar } from 'react-bootstrap/';

const Navigation = () => {
  return (
    <Fragment>
      <Navbar bg="light" expand="lg">
        <Link to="/">
          <Navbar.Brand to="/">employ•able</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Bring in the Search component and add to the main navigation */}
          <Search />
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default Navigation;
