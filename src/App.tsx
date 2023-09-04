import { FC } from 'react';
import Customers from './Customers';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>React Datatable</h1>
      <p>Start editing to see some magic happen :)</p>
      <Customers />
    </div>
  );
};
