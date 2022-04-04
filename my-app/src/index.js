import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import { robots } from './users';
import App from './App'

ReactDOM.render(
  <App robots={robots} />,
  document.getElementById('root'));

