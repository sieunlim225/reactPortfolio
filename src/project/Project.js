import React, { Component } from 'react';
import './Project.css';

export default class Project extends Component{

    static propTypes = {
       // title: PropTypes.string,
        //img: PropTypes.string
        
    }
    render(){
        return(
            <div>
                <ProjectImg img={this.props.img}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class ProjectImg extends Component{
    render(){
        return(
            <img src={this.props.img}/>
        )
    }
}
