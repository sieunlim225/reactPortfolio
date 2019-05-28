import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Project from './project/Project';

const projectse = [
  "프로젝트A",
  "프로젝트B",
  "프로젝트C"
]

const projectImgs = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVGN5f3de-6NAmvo-jr_eANXZFvwXy3APC4MehJhdjccmUeuwd",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIS-tCV51jsoSYZv0j8pwatNWZrSLDifH78gJ6k1CdPbPj1tDb-Q",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF0WNXR6PkhsZC2uqQG4Nw8w9K1ibmRaBwwEAUJkw2NQCkL_QsLw"
]

const projects = [
  {
    title: "프로젝트A",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVGN5f3de-6NAmvo-jr_eANXZFvwXy3APC4MehJhdjccmUeuwd"
  },
  {
    title: "프로젝트B",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIS-tCV51jsoSYZv0j8pwatNWZrSLDifH78gJ6k1CdPbPj1tDb-Q"
  },
  {
    title: "프로젝트C",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF0WNXR6PkhsZC2uqQG4Nw8w9K1ibmRaBwwEAUJkw2NQCkL_QsLw"
  }

]

export default class App extends Component {
  render(){
    return (
      
      <div className="App">
        {projects.map((project, index) => {
          return <Project title={project.title} img={project.img} key={index}/>
        })}
      </div>
    )
  }
}


