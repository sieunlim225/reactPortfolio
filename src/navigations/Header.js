import React, { Component } from 'react';
import './header.css';


export default class Header extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  
  render(){
    return (
        <div className="header">
          <div class="navbar navbar-expand-md navbar-dark fixed-top bg-light">
            <a class="navbar-brand" href="#">L</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
          {/* <nav className="navbar navbar-light bg-transparent">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-target" aria-controls="mainCol" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav> */}
        </div>
    )
  }
}






