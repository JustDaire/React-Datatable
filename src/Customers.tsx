import React from 'react';
import Table from './components/Datatable/Table';
import Users from './data/users.json';

const Customers = () => {
  return (
    <>
      <Table data={Users}/>
    </>
  );
};

// let admins = require('~/app/admins.json');
// console.log(admins[0].userName);

export default Customers;
