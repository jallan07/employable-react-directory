import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Header = () => {
  return (
    <Jumbotron className="row">
      <div className="container my-1 col-md-5 text-center">
        <h1>employ•able</h1>
        <h4>Employee Table Directory</h4>
        <p className="subheading">
          With Employable, you can filter your employee table by first name,
          last name, phone number, or email using the search bar, or you can
          sort the name and age columns by clicking on the column headers.
        </p>
      </div>
    </Jumbotron>
  );
};

export default Header;
