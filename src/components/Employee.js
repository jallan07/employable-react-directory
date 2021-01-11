import React, { useEffect } from 'react';
import getEmployee from '../utils/API';

function Employee() {
  useEffect(() => {
    getEmployee();
  }, []);
  return <div>Hi</div>;
}

export default Employee;
