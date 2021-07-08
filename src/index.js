import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NotificationSystem from './NotificationSystem';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <NotificationSystem>
      <App />
    </NotificationSystem>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
