import React, { Component } from 'react';
import './main.css';


export default class Main extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  
  render(){
    return (
        <div className="main">
          <div className="main-content text-center collapse" id="mainCol">
            <div className="me"/>
            <div className="display-2">Sieun, Lim</div>
            <div className="blockquote">Talk is cheap, <br/>Show me the code</div>
            <br/>
            <div className="menu">
              <i className="far fa-address-card fa-xs"><a href="#resume-view"> Resume</a></i><br/>
              <i className="far fa-file-powerpoint fa-xs"> Projects</i><br/>
              <i className="far fa-comments fa-xs"><a href="/blog"> Blog</a></i><br/>
              <i className="far fa-address-book fa-xs"> Contact</i>
            </div>
          </div>
          <nav className="navbar navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="mainCol" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>
        </div>
    )
  }
}


