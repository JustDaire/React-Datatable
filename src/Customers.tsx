import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import Table from './components/Datatable/Table';
import Users from './data/users.json';
import { createTodos, filterTodos, getCustomers } from './utils';

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
  // console.log('State', state);
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
      <Table headers={headers} data={state.data} />
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
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
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </>
  );
};

export default Customers;
