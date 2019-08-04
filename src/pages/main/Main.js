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
          <div className="main-content">
            <div className="main-logo"></div>
            {/* <div className="me"/> */}
            <div className="main-phrase">
              <div className="name">Sieun, Lim</div>
              <div className="sub-name">I AM DEVELOPER</div>
              <div className="tags">
              #<a className="color-a"> Intelligent Laziness</a> #<a className="color-b"> Simplicity</a> #<a className="color-c"> Intuitive</a> #<a className="color-d"> Flexible</a> 
                <br/> #<a className="color-e"> Talk is cheap, Show me the code</a>
              </div>
            </div>
            <div className="offset-md-4 col-md-3 ">
              <div className="display-4 main-menu">
                  <div><a href="#about">ABOUT</a></div>
                  <div><a href="#works">WORKS </a></div>
                  <div><a href="/labs">LABS</a></div>
                  <div className="menu-contact"><a href="#">CONTACT<nbps/></a></div>
              </div>
            </div>
            
            {/* <div className="menu">
              <i className="far fa-address-card fa-xs"><a href="#resume-view"> Resume</a></i><br/>
              <i className="far fa-file-powerpoint fa-xs"> Projects</i><br/>
              <i className="far fa-comments fa-xs"><a href="/blog"> Blog</a></i><br/>
              <i className="far fa-address-book fa-xs"> Contact</i>
            </div> */}
          </div>
        </div>
    )
  }
}


