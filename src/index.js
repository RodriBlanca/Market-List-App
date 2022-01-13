import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import MarketListApp from './MarketListApp';
import './index.css';

ReactDOM.render(
  <Router>
    <MarketListApp />
  </Router>,
  document.getElementById('root')
);

