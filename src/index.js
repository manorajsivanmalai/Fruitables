import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProducutProvider from './contextapi/productcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProducutProvider>
      <App />
    </ProducutProvider>
  </React.StrictMode>
);

