import React, { Component } from 'react';
import './about.css';
export default class About extends Component {
    constructor(props){
      super(props)
      this.state={}
    }
    
    render(){
      return (
          <div className="about">
                <div className="about-cover"></div>
                <div className="about-cover2">image</div>
                <div className="about-body display-4">
                    
                    <div className="about-side">
                        <div className="display-4 about-phrase"><div className="about-phrase-a">WORDS THAT</div><div className="about-phrase-b">DESCRIBES ME</div></div>
                    </div>
                    
                    <div className="about-content">
                        <div id="lazy"># Intelligent Laziness</div>
                        <div>Efficiency is Intelligent Laziness <br></br> 최고의 효율은 총명한 게으름에서 얻을 수 있다.</div>
                    </div>
                </div>

          </div>
      )
    }
}