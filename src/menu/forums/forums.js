import React from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import './forums.css';


 export default class Forums extends React.Component{
    //생성자 - 초기화
    constructor(props){
        super(props)
        this.state={}
    }
    static propTypes = {
        forumId: PropTypes.number,
        forumSubject: PropTypes.string,
        forumContent: PropTypes.string,
        forumCreated: PropTypes.string,
        userId: PropTypes.number,
        userName: PropTypes.string,
        forumHit: PropTypes.number,
    }
    _callApi = () =>{
        //return fetch('https://sieunlim225.cafe24.com/forums')
        return fetch('https://localhost:8080/forums')
        .then(res => res.json())
        
        .then( json => json.content )
        
            //.then(() => .then()) 콜백지옥을 피하자

        .catch(err => console.log(err))
    }

    _getForums = async () => {
        //async 이전 라인의 작업이 끝날때까지 기다리지 않는다
        const forums = await this._callApi();
        //뒤에있는 함수가 성공에상관없이 끝나면 아래 실행
        
        this.setState({
            forums
            //forums: forums
        })
    }

    componentDidMount(){
        //컴포넌트 출력물이 DOM에 렌더링 된 후에 실행됩니다
        //많은 함수를 불러오는 곳인 만큼 리펙토링하여 필요한 함수만 넣는다.
            this._getForums();
    }
    
    renderForums = () => {
        const forums = this.state.forums.map((forum, index) => 
            <tr key={index}>
                <th scope="row">{forum.forumId}</th>
                <td>{forum.forumSubject}</td>
                <td>{forum.forumContent}</td>
                <td>{forum.userId}</td>
                <td>{forum.forumHit}</td>
            </tr>)
            //return <Forums forumId={forum.forumId} forumSubject={forum.forumSubject} forumContent={forum.forumContent} userId={forum.userId} forumHit={forum.forumHit} key={index}/>
            //return <Forums props={forum} key={index}/>
        
        return forums
    }


    
    render(){
        return(
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>제목</th>
                    <th>내용</th>
                    <th>등록자</th>
                    <th>조회수ㅁ</th>
                </tr>
            </thead>
            <tbody>
                {this.state.forums ? this.renderForums() : <tr><td>'Loading...'</td></tr>}
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
