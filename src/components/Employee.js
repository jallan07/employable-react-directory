import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Employee() {
  // create the employee state object along with the createEmployee method
  const [employee, createEmployee] = useState([]);
  // when the component loads, run the api call
  useEffect(() => {
    axios.get('https://api.randomuser.me/').then((response) => {
      let employeeData = response.data.results;
      // add the employee data to the employee state object
      createEmployee(employeeData);
      console.log(employeeData); //? properly logs the response
      console.log(employee); //! currently coming back undefined....
    });
  }, []);

  return <div>{employee.name.first}</div>;
}

export default Employee;
