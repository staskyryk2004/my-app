import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './main.css';
import './head.css';
//import File from './File.js';
//import Program from './Program.js';
import Student from './Student.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Student />
  </React.StrictMode>
);
