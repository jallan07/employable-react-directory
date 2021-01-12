import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import generateUniqueId from 'generate-unique-id';
import Moment from 'react-moment';

const Employees = () => {
  // create the employees state object along with the setEmployees method
  const [employees, setEmployees] = useState([]);
  // when the component loads, run the api call
  useEffect(() => {
    axios
      .get(
        'https://randomuser.me/api/?results=142&nat=us' //&inc=name,email,dob,phone,id,picture
      )
      .then((response) => {
        setEmployees(response.data.results);
        // TODO remove console log
        console.log(response.data.results);
      });
  }, []);

  return (
    <div className="container">
      <Table striped bordered hover>
        {/* Set Table Headers */}
        <thead>
          <tr>
            <th className="text-center">ID</th>
            <th className="text-center">Photo</th>
            <th className="text-center">Name</th>
            <th className="text-center">Phone</th>
            <th className="text-center">Email</th>
            <th className="text-center">Birthday</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            // generate the id
            const id = generateUniqueId({
              length: 5,
              useLetters: false
            });
            // reformate the date of birth for each employee (called in the dob column)
            const dateToFormat = employee.dob.date;
            return (
              <tr key={id} className="text-center">
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

export default Employees;
