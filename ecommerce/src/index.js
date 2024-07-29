import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Replace with appropriate router if using a different type

import App from './App'; // Your main application component

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
