import { FC } from 'react';
import Customers from './Customers';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div className="container">
      <h1>React Datatable</h1>
      <p>Using Bootstrap (for now)</p>
      <Customers />
    </div>
  );
};
