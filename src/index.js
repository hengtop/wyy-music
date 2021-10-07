import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//引入初始全局css
import '@/assets/css/reset.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
