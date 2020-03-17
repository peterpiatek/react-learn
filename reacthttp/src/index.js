import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
// example of headers default setting added to the request for common/all requests 
// AUTH TOKEN - needs to be replaced with token
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// example of headers modified for all post requests
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(req => {
  console.log(req);
  return req;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

axios.interceptors.response.use(resp => {
  console.log(resp);
  return resp;
}, error => Promise.reject(error)
);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
