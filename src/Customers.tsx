import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import Table from './components/Datatable/Table';
import Users from './data/users.json';

const headers = ['Name', 'Email', 'Location'];

const Customers = () => {
  const [state, setState] = useState({
    data: [],
    limit: 5,
    activePage: 1,
  });

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/users?_page=1&_limit=${state.limit}`
    )
      .then((response) => response.json())
      .then((json) => {
        // console.log('json', json);
        setState((prev) => ({
          ...prev,
          data: json,
        }));
      });
    // console.log('State', state);
  }, [state.limit]);
  console.log('State', state);
  // console.log('Data:', state.data);
  const handlePageChange = (pageNumber) => {
    setState((prev) => ({ ...prev, activePage: pageNumber }));

    fetch(
      `https://jsonplaceholder.typicode.com/users?_page=${pageNumber}&_limit=${state.limit}`
    )
      .then((response) => response.json())
      .then((json) => {
        setState((prev) => ({
          ...prev,
          data: json,
        }));
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <h1>Bootstrap Table</h1>
      <Pagination className="px-4">
        {state.data.map((_, index) => {
          return (
            <Pagination.Item
              onClick={() => handlePageChange(index + 1)}
              key={index + 1}
              active={index + 1 === state.activePage}
            >
              {index + 1}
            </Pagination.Item>
          );
        })}
      </Pagination>
      <h1>Bootstrap Table from component</h1>
      <Table headers={headers} data={Users} />
    </>
  );
};

// let admins = require('~/app/admins.json');
// console.log(admins[0].userName);

export default Customers;
