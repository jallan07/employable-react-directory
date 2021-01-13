import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import generateUniqueId from 'generate-unique-id';
import Moment from 'react-moment';
import API from '../../utils/API';
import Search from '../Search/Search';

const TableContainer = () => {
  // create the search state object aling with the setSearch method
  const [searchState, setSearch] = useState('');
  // create the employees state object along with the setEmployees method
  const [employees, setEmployees] = useState([]);
  // when the component loads, run the api call
  useEffect(() => {
    API.getData().then(({ data }) => {
      setEmployees(data.results);
      // TODO remove console log
      console.log(data.results);
    });
  }, []);

  let filteredEmployees = employees.filter((employee) => {
    return (
      // allow users to search for first/last name, email or phone
      employee.name.first.toLowerCase().indexOf(searchState) !== -1 ||
      employee.name.last.toLowerCase().indexOf(searchState) !== -1 ||
      employee.email.toLowerCase().indexOf(searchState) !== -1 ||
      employee.phone.indexOf(searchState) !== -1
    );
  });

  function onChange(e) {
    // save whatever the user types into the search bar into the searchState object
    setSearch(e.target.value);
  }

  return (
    <div className="container">
      <Search onChange={onChange} />
      <Table striped bordered hover id="employeeTable">
        <thead>
          <tr>
            <th className="text-center" onClick={() => {}}>
              ID
            </th>
            <th className="text-center">Photo</th>
            <th className="text-center">Name</th>
            <th className="text-center">Phone</th>
            <th className="text-center">Email</th>
            <th className="text-center">Birthday</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee, index) => {
            // generate the id
            const id = generateUniqueId({
              length: 5,
              useLetters: false
            });
            // reformate the date of birth for each employee (called in the dob column)
            const dateToFormat = employee.dob.date;
            return (
              <tr key={index} className="text-center">
                {/* Assign a random number for their ID */}
                <td className="align-middle text-center">{id}</td>
                <td className="align-middle text-center">
                  {/* Add the profile image of employee, and set the alt tag to their name */}
                  <img
                    className="employee"
                    src={employee.picture.medium}
                    alt={`Employee Profile | ${employee.name.first} ${employee.name.last}`}
                  ></img>
                </td>
                {/* Add the employee's name */}
                <td className="align-middle text-center">
                  {employee.name.first} {employee.name.last}
                </td>
                {/* Add the employee phone number */}
                <td className="align-middle text-center">{employee.phone}</td>
                {/* Add the employee email address and make it clickable */}
                <td className="align-middle text-center">
                  <a href={`mailto:${employee.email}`}>{employee.email}</a>
                </td>
                {/* Add the employee's date of birth in a month-day-year format using the react-moment package */}
                <td className="align-middle text-center">
                  <Moment format="MMM DD, YYYY">{dateToFormat}</Moment>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TableContainer;
