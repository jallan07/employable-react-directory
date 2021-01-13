import React from 'react';
import Table from 'react-bootstrap/Table';
import TableBody from './TableRows';

const TableContainer = () => {
  return (
    <div className="container">
      <Table striped bordered hover id="employeeTable">
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
        <TableBody />
      </Table>
    </div>
  );
};

export default TableContainer;
