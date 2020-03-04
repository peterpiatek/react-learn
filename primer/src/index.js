import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import AppAssigment1 from './AppAssigment1';
import AppS3 from './AppS3';
import AppS7 from './AppS7';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(<AppS3 AppTitle='My React learn app'/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
