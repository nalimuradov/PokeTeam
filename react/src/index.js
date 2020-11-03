import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import the app component from app.js
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import * as serviceWorker from './serviceWorker';

// render app to the document root
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
