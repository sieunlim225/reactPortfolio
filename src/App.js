import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Forums from './Forums/Forums';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  
  componentDidMount(){
    //많은 함수를 불러오는 곳인 만큼 리펙토링하여 필요한 함수만 넣는다.
    this._getProjects();
  }

  _getProjects = async () => {
  //async 이전 라인의 작업이 끝날때까지 기다리지 않는다
    const forums = await this._callApi();
    //뒤에있는 함수가 성공에상관없이 끝나면 
    this.setState({
      forums
      //forums: forums
    })
  }
  _callApi = () =>{
    return fetch('https://localhost:8080/forums')
    .then(res => res.json())
    
    .then( json => json.content )
  
      //.then(() => .then()) 콜백지옥을 피하자

    .catch(err => console.log(err))
  }
  renderForums = () => {
    const forums = this.state.forums.map((forum, index) => {
      
      return <Forums forumId={forum.forumId} forumSubject={forum.forumSubject} forumContent={forum.forumContent} userId={forum.userId} forumHit={forum.forumHit} key={index}/>
      //return <Forums props={forum} key={index}/>
    })
    return forums
  }
  render(){
    return (
      <div className="App">
        {this.state.forums ? this.renderForums() : 'Loading...'}
      </div>
    )
  }

  

}


