import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import "antd/dist/antd.css";
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <App id="app"/>
  </React.StrictMode>,
  document.getElementById('root')
);
