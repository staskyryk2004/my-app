import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './main.css';
import './head.css';
import './form.css';
import './education.css';
import './marvel.css';
//import File from './File.js';
//import Program from './Program.js';
//import Student from './Student.js';
//import Form from './Form.js';
//import Marvel from './Marvel.js';
import DC from './DC.js';
//import Education from './Education.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DC super="Super-Man" wonder="Wonder-Woman" batman="Batman" />
  </React.StrictMode>
);