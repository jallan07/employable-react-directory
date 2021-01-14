import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Header = () => {
  return (
    <Jumbotron className="row jumbotron">
      <div className="container my-1 col-md-7 text-center">
        <h3>A Powerfully Simple Employee Table Directory</h3>
      </div>
      <div className="row text-center mx-auto">
        <p className="subheading col-md-7 text-center container">
          With Employable, you can filter your employee table by first name,
          last name, phone number, or email using the search bar, or you can
          sort the name and age columns by clicking on the column headers.
        </p>
      </div>
    </Jumbotron>
  );
};

export default Header;
