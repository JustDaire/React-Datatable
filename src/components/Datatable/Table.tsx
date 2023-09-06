import React, { useContext } from 'react';
import Paginator from './Paginator';

// const theme = useContext(ThemeContext);

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

function TableRows({ rows }) {
  // Create table row element
  let rowArray: any = [];
  for (let i = 0; i <= rows.length; i++) {
    // Prevent the config from loading the element twice
    if (rowArray[i]) {
      rows.push(
        <tr>
          <td>{rowArray[i].name}</td>
          <td>{rowArray[i].email}</td>
          <td>{rowArray[i].address.city}</td>
        </tr>
      );
    }
  }

  // return rows;

  return rows.map((row) => (
    <tr key={row.name}>
      <td>{row.name}</td>
      <td>{row.email}</td>
      <td>{row.address.city}</td>
    </tr>
  ));
}

function Table({ headers, data }) {
  return (
    <>
      <table className="table table-bordered">
        <TableHeaders headers={headers} />
        <tbody>
          <TableRows rows={data} />
        </tbody>
      </table>
      <Paginator />
    </>
  );
}

// let admins = require('~/app/admins.json');
// console.log(admins[0].userName);

export default Table;
