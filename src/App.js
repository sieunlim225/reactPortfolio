import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './main';
import Header from './header';
import TableField from './table';

class App extends Component {
  render(){
    return (
      
      <div className="App">
        <Header/>
        <h1>안녕하세요! 시은시은</h1>
        <Main/>
        <TableField/>
      </div>
    )
  }
}

export default App;
