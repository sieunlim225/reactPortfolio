import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/main/About';
import Main from './pages/main/Main';
import Works from './pages/main/Works';
import Labs from './pages/labs/Labs';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  
  render(){
    return (
      //exact : path에 포함된 URI 모든 곳에서 호출이됨
      <div className="app">
      <Route>
        <Switch>
          <Route exact path="/">
            <div className="app-main">
              <Route component={Main}/>
              <Route component={About}/>
              <Route component={Works}/>
            </div>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/labs">
            <div className="app-labs">
              <Route component={Labs}/>
            </div>
          </Route>
        </Switch>
      </Route>
      </div>
    )
  }
}


