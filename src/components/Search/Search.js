import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap/';

const Search = ({ onChange }) => {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <InputGroup className="mt-5 mb-4 col-md-8 mx-auto text-center">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">
              <i
                className="fas fa-user-circle"
                style={{ fontSize: '1.6em' }}
              ></i>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            onChange={onChange}
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </div>
    </div>
  );
};

export default Search;
