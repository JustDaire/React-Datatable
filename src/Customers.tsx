import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import Table from './components/Datatable/Table';
import Users from './data/users.json';

const headers = ['Name', 'Email', 'Location'];

const Customers = () => {
  const [state, setState] = useState({
    data: [],
    limit: 10,
    activePage: 1,
  });

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((res) => {
        setState((prev) => ({
          ...prev,
          data: res.data,
        }));
      })
      .catch((error) => console.error(error));
  }, [state.limit]);
  const handlePageChange = (pageNumber) => {
    setState((prev) => ({ ...prev, activePage: pageNumber }));

  // useEffect(() => {
  //   fetch(
  //     `./data/users.json`
  //     // `https://jsonplaceholder.typicode.com/users?_page=1&_limit=${state.limit}`
  //   )
  //     .then((res) => {
  //       setState((prev) => ({
  //         ...prev,
  //         data: res.data,
  //       }));
  //     })
  //     .catch((error) => console.log(error));
  // }, [state.limit]);
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
