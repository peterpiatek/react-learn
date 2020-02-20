import React, { Component } from "react";
import "./App.css";
import { HeaderCom } from "./com/Header-com";
import http from './com/async';

async function sum(){
  let data = await http([1,2,3,4,5]);
  console.log(data);
} 

sum();

export class App extends Component{
  render = () => 
    <div className="container">
      <HeaderCom />
    </div>
}

export default App;
