import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from './component/todobox';

import {BrowserRouter,Routes,Route} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

  <Routes>

  <Route path="/" element={<TodoList/>}/>
  </Routes>
</BrowserRouter>
);

