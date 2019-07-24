import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import About from './pages/About';
import Resume from './pages/Resume';

import Header from './navigations/Header';
import Main from './pages/Main';
import Works from './pages/Works';


export default class App extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  
  render(){
    return (
      //exact 는 / 포함된 URI 모든 곳에서 호출이됨
      <div className="app">
        
        {/* <Route path="/" component={Header}/> */}
      
        <Route exact path="/" component={Main}/>
        <Route exact path="/" component={About}/>
        <Route exact path="/" component={Works}/>
        {/* <Route exact path="/" component={Resume}/> */}
        
      </div>
    )
  }
}


