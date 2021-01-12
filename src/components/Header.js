import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Header = () => {
  return (
    <Jumbotron className="row">
      <div className="container my-2 col-md-5 text-center">
        <h1>employ•able</h1>
        <h4>Employee Table Directory</h4>
      </div>
    </Jumbotron>
  );
};

export default Header;
