import React, { Component } from 'react';
import './resume.css';

export default class Resume extends Component {
    constructor(props){
      super(props)
      this.state={}
    }
    
    render(){
      return (
          <div className="resume" id="resume-view">
            <div>
                <button className="navbar-toggler"></button>
              <h1>Resume</h1>
              <div>가주아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ</div>
            </div>
          </div>
         
      )
    }
  }