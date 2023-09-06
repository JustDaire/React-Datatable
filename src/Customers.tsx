import React from 'react';
import Table from './components/Datatable/Table';
import Users from './data/users.json';

const headers = ['Name', 'Email', 'Location'];

const Customers = () => {
  return (
    <>
      <Table headers={headers} data={Users} />
    </>
  );
};

// let admins = require('~/app/admins.json');
// console.log(admins[0].userName);

export default Customers;
