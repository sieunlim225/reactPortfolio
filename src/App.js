import React, { Component } from 'react';
import {Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';


export default class App extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  
  render(){
    return (
      // <Container className="container">
      //   <Row>
      //     <Col>
      <Container>
        <Row>
          <Col className="text-center">
            <div className="me"/>
            <div className="display-2">Sieun, Lim</div>
            <div className="blockquote">Talk is cheap, Show me the code</div>
            <br/>
            <div className="menu">
              <button className="btn btn-dark btn-lg btn-block">Resume</button>
              <button className="btn btn-light btn-lg btn-block">Projects</button>
              <button className="btn btn-dark btn-lg btn-block">Blog</button>
              <button className="btn btn-light btn-lg btn-block">Contact</button>
            </div>
          </Col>
        </Row>
      </Container>
        
      //     </Col>
      //   </Row>
      // </Container>
    )
  }
}


