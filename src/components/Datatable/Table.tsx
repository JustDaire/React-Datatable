import React from 'react';
import Users from '../../data/users.json';

const headers = ['Name', 'Email', 'Location'];

function TableRows({ value }) {
  // Create table row element
  let rows: any = [];
  for (let i = 0; i <= value.length; i++) {
    // Prevent the config from loading the element twice
    if (value[i]) {
      rows.push(
        <tr>
          <td>{value[i].name}</td>
          <td>{value[i].email}</td>
          <td>{value[i].address.city}</td>
        </tr>
      );
    }
  }
  return rows;
}

function TableHeaders({ headers }) {
  let rows: any = [];
  for (let i = 0; i <= headers.length; i++) {
    if (headers[i]) {
      rows.push(<th>{headers[i]}</th>);
    }
  }
  return (
    <>
      <thead>
        <tr>{rows}</tr>
      </thead>
    </>
  );
}

function Table() {
  return (
    <>
      <table>
        <TableHeaders headers={headers} />
        <tbody>
          <TableRows value={Users} />
        </tbody>
      </table>
    </>
  );
}

// let admins = require('~/app/admins.json');
// console.log(admins[0].userName);

export default Table;
