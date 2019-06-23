import React, { Component } from 'react';
import './main.css';


export default class Main extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  
  render(){
    return (
        <div className="main text-center">
          <div className="me"/>
          <div className="display-2">Sieun, Lim</div>
          <div className="blockquote">Talk is cheap, <br/>Show me the code</div>
          <br/>
          <div className="menu">
            <i className="far fa-address-card fa-xs"> Resume</i><br/>
            <i className="far fa-file-powerpoint fa-xs"> Projects</i><br/>
            <i className="far fa-comments fa-xs"> Blog</i><br/>
            <i className="far fa-address-book fa-xs"> Contact</i>
          </div>
        </div>
       
    )
  }
}

