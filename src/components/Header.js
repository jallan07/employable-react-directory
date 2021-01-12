import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Header = () => {
  return (
    <Jumbotron className="row">
      <div className="container my-5 col-md-5 text-center">
        <h1>employ•able</h1>
        <h4>A Simple Employee Table Directory</h4>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
      </div>
    </Jumbotron>
  );
};

export default Header;
