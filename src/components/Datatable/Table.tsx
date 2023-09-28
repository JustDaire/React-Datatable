import React, { useContext, useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import Paginator from './Paginator';

// const theme = useContext(ThemeContext);

function TableHeaders({ headers }) {
  return (
    <>
      <thead>
        <tr>
          {headers.map((header) => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>
    </>
  );
}

function TableRows({ rows }) {
  return rows.map((row) => (
    <tr key={row.name}>
      <td>{row.name}</td>
      <td>{row.email}</td>
      <td>{row.address.city}</td>
    </tr>
  ));
}

function Table({ headers, data }) {
  // console.log('data', data);
  return (
    <>
      <table className="table table-bordered">
        <TableHeaders headers={headers} />
        <tbody>
          <TableRows rows={data} />
        </tbody>
      </table>
    </>
  );
}

export default Table;
