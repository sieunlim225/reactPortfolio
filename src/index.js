import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import 'bootstrap/dist/css/bootstrap.min.css';
export { default as Header } from './pages/Header';

ReactDOM.render(<Root />, document.getElementById('root'));