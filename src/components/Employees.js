import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import generateUniqueId from 'generate-unique-id';

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
            <th>Employee ID</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Birthday</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            // generate the id
            const id = generateUniqueId({
              length: 5,
              useLetters: false
            });

            return (
              <tr key={id}>
                {/* Assign a random number for their ID */}
                <td>{id}</td>
                <td>
                  {/* Add the profile image of employee, and set the alt tag to their name */}
                  <img
                    src={employee.picture.thumbnail}
                    alt={`Employee Profile | ${employee.name.first} ${employee.name.last}`}
                  ></img>
                </td>
                {/* Add the employee's name */}
                <td>
                  {employee.name.first} {employee.name.last}
                </td>
                {/* Add the employee phone number */}
                <td>{employee.phone}</td>
                {/* Add the employee email address and make it clickable */}
                <td>
                  <a href={`mailto:${employee.email}`}>{employee.email}</a>
                </td>
                <td>{employee.dob.date}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Employees;
