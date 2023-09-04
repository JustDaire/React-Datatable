import React from 'react';
import Users from './data/users.json';

function TableRow() {
  // Create table row element
  let rows: any = [];
  for (let i = 0; i <= Users.length; i++) {
    // Prevent the config from loading the element twice
    if (Users[i]) {
      rows.push(
        <tr>
          <td>{Users[i].name}</td>
          <td>{Users[i].email}</td>
          <td>{Users[i].address.city}</td>
        </tr>
      );
    }
  }
  return rows;
}

const Customers = () => {
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <TableRow />
        </tbody>
      </table>
    </>
  );
};

// let admins = require('~/app/admins.json');
// console.log(admins[0].userName);

export default Customers;
