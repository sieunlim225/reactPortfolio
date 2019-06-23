import React, { Component } from 'react';
import Main from './main/main.js';
import './app.css';


export default class App extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  
  render(){
    return (
      <Main/>
    )
  }
}


