import React, { Component } from 'react';
import './main.css';



export default class Main extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  
  render(){
    return (
        <div className="container-fluid main">
          <div className="row main-content">
            {/* <div className="me"/> */}
            <div class="col-md-5 main-phrase">
              <div className="display-1 name">Sieun, Lim</div>
              <div className="display-2 sub-name">I AM DEVELOPER</div>
              <div className="blockquote text-left"># Intelligent Laziness # Simplicity # Intuitive # Free <br/> # Talk is cheap, Show me the code</div>
            </div>
            <div class="offset-md-4 col-md-3 ">
              <div className="display-4 main-menu">
                  <div>About</div>
                  <div><a href="#">WORKS</a></div>
                  <div><a href="#">BLOG</a></div>
                  <div><a href="#">CONTACT</a></div>
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


