import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './main.css';
import './head.css';
import './form.css';
//import File from './File.js';
//import Program from './Program.js';
//import Student from './Student.js';
import Form from './Form.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>
);