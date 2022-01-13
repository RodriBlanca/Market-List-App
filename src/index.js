import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import MarketListApp from './MarketListApp';

ReactDOM.render(
  <Router>
    <MarketListApp />
  </Router>,
  document.getElementById('root')
);

