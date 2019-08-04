import React, { Component } from 'react';
import './labsHeader.css';



export default class LabsHeader extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  
  render(){
    return (
       
          <div className="labs-header">
            
            <div className="labs-logo"><p>Lim's Lab</p></div>
            <div className="labs-menu">
              <ul>
                <li><a>Home</a></li>
                <li><a>Labs</a></li>
                <li><a>Blog</a></li>
                <li><a>Coop</a></li>
              </ul>
            </div>
          </div>
        
    )}
    }