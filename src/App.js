import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Resume from './pages/Resume';
import Header from './pages/Header';
import Main from './pages/Main';


export default class App extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  
  render(){
    return (
      //exact 는 / 포함된 URI 모든 곳에서 호출이됨
      <div className="app">
      <Route exact path="/" component={Main}/>
      <Route exact path="/" component={Resume}/>


      <Route path="/blog" component={Header}/>
     
      </div>
    )
  }
}


