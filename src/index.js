import React from 'react';
import ReactDOM from 'react-dom/client';
import Todo from './component/todobox';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Todo/>
  </React.StrictMode>
);

