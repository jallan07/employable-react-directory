import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap/';

const Search = () => {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <InputGroup className="mb-4 col-md-10 mx-auto text-center">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">
              <i class="fas fa-id-badge mr-3" style={{ fontSize: '3em' }}></i>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
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
