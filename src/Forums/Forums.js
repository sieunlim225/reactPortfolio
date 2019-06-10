import React from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import './Forums.css';

 export default class Forums extends React.Component{

    static propTypes = {
        forumId: PropTypes.number,
        forumSubject: PropTypes.string,
        forumContent: PropTypes.string,
        forumCreated: PropTypes.string,
        userId: PropTypes.number,
        userName: PropTypes.string,
        forumHit: PropTypes.number,
    }
    render(){
        return(
        <Table dark>
            <thead>
                <tr>
                    <th>#</th>
                    <th>제목</th>
                    <th>내용</th>
                    <th>등록자</th>
                    <th>조회수</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">{this.props.forumId}</th>
                    <td>{this.props.forumSubject}</td>
                    <td>{this.props.forumContent}</td>
                    <td>{this.props.userId}</td>
                    <td>{this.props.forumHit}</td>
                </tr>
            </tbody>
      </Table>
 
        )
    }
}
// Project.propTypes = {
//          title: PropTypes.string.isRequired,
//          img: PropTypes.string
//      }
// function Project({title},{img}){
//     return(
//         <div>
//             <ProjectImg img={img}/>
//             <h1>{title}</h1>
//         </div>
//     )
// }
//------------------------------------------
// class ProjectImg extends Component{
//     render(){
//         return(
//             <img src={this.props.img} alt='aa'/>
//         )
//     }
// }
//------------------------------------------
// 
// function ProjectImg({img}){
//     return(
//         <img src={img} alt='aa'/>
//     )
// }
// //타입체크
// ProjectImg.propTypes = {
//     img : PropTypes.string
// }
