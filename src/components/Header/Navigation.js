import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar className="navigationbar" bg="primary" expand="lg">
      <div className="container">
        <Navbar.Brand className="navbrand" href="/">
          Employ <i className="fas fa-user-circle fa-xs"></i> able
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              className="mx-2"
              href="https://joshallan.dev"
              target="_blank"
            >
              <i className="fas fa-at mr-2"> </i> Created By Josh Allan
            </Nav.Link>
            <Nav.Link
              className="mx-2"
              href="https://github.com/jallan07/employable-react-directory"
              target="_blank"
            >
              <i className="fab fa-github mr-2"> </i> View Source Code
            </Nav.Link>
            <Nav.Link
              className="mx-2"
              href="https://reactjs.org/"
              target="_blank"
            >
              <i className="fab fa-react mr-2"> </i>Powered By React
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navigation;
