import React, { Component } from 'react';
import './about.css';
export default class About extends Component {
    constructor(props){
      super(props)
      this.state={}
    }
    
    render(){
      return (
          <div className="about" id="about">
                {/* <div className="about-cover"></div>
                <div className="about-cover2"></div>
                <div className="about-cover3"></div>
                <div className="about-cover4"></div> */}
                <div className="about-body">
                    
                    <div className="about-side">
                        <div className="about-phrase-a">WORDS THAT DESCRIBES ME</div>
                        {/* <div className="about-phrase-b">DESCRIBES ME</div> */}
                    </div>
                    
                    <div className="about-content">
                        <div className="about-me">
                            <div>
                                <div className="code-inline"><div className="type">package</div> sieun{"."}lim</div>
                                <br></br>
                                <div className="code-inline">
                                    <div className="type">import</div> thoughts{"."}of{"."}me
                                </div>
                                <div className="code-inline">
                                    <div className="type">import</div> words{"."}that{"."}describes{"."}me
                                </div>
                                <br></br><br></br>

                                <div className="code-inline">
                                    <div className="type">public class</div>{" "}     
                                    <div className="var">AboutMe</div>{" {"}
                                </div>
                                
                                <br></br>
                                <div className="method">
                                    <div className="code-inline method">
                                        <div className="type">public</div>{" "}
                                        <div className="type">void</div>{" "}
                                        <div className="m-name">getWord</div>{"( "}
                                        <div className="var">Me</div>{" "}
                                        <div className="varName">me</div>{" )  {"}
                                        <br/>

                                        <div className="method-code">
                                            <div className="comment">//나의 간단 정보 설정</div>
                                            <br/>
                                            <div className="varName">me</div>{"."}
                                            <div className="after-method">setName</div>{"('임시은');"}<br/>
                                            <div className="varName">me</div>{"."}
                                            <div className="after-method">setBirth</div>{"('1992');"}<br/>
                                            <div className="varName">me</div>{"."}
                                            <div className="after-method">setMajorIn</div>{"('마케팅 경영');"}<br/>
                                            <div className="varName">me</div>{"."}
                                            <div className="after-method">setSinceLearningtoCode</div>{"('2017 Feb');"}<br/>
                                            <br/>
                                            <div className="comment">//나의 경험 리스트</div>
                                            <br/>
                                            <div>List{"<"}String> expList = Life.getExperience(me);</div>
                                            <br/><br/>
                                            <div>for(String exp : expList){"{"}</div>
                                            <br/>
                                            <div className="method-code">
                                                <div className="comment">//총명한 게으름</div>
                                                <br/>
                                                <div>if("Intelligent Laziness".equals(exp)){"{"}</div>
                                                <div>System.println.out(WordsOfMan.billGates(exp));</div>
                                                <div>}else if("Simplicity&intuitive"){"{"}</div><br/>
                                                <div className="comment">//간단함&직관성</div>
                                                <br/>
                                                <div>System.println.out(WordsOfMan.billGates(exp));</div>
                                                <br/>
                                                <div>}else if("Flexible"){"{"}</div><br></br>
                                                <div className="comment">//융통성</div><br></br>
                                                <div>System.println.out(WordsOfMan.billGates(exp));</div>
                                                <div>}else if("Talk is cheap, Show me the code"){"{"}</div><br></br>
                                                <div className="comment">//말보다 행동</div>
                                                <br/>
                                                <div>System.println.out(WordsOfMan.billGates(exp));</div>
                                            </div>
                                            <br></br>}
                                        </div>
                                        <br></br>
                                        }
                                    </div>
                                    <br></br>
                                    }
                                    
                                </div>
                            </div>
                            {/* <div class=""> 
                            
                            public Thoughts IntelligentLaziness(){"{"}

                                                       }
                            public void static main(args[]){  } # Intelligent Laziness</div>
                            <div className="blockquote">I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it. 
                                <div className="blockquote-footer">Bill Gates</div>
                            </div> 
                            <div>
                                <p>총명한 게으름은 발전의 시바알점이다</p>
                            </div>
                        </div>
                        <div className="about-me">
                            <div id="simple ofme"># Simplicity</div>
                             <div className="blockquote">Everything should be made as simple as possible but not simpler
                                <div className="blockquote-footer">Einstein</div>
                            </div> 
                            <div>
                                <p>심플이즈더베에스트</p>
                            </div>
                        </div>

                        <div className="about-me">
                            <div id="simple ofme"># Intuitive</div>
                             <div className="blockquote">Everything should be made as simple as possible but not simpler
                                <div className="blockquote-footer">Einstein</div>
                            </div> 
                            <div>
                                <p>직관적인 사고, 아키텍처는 곧 simplicity </p>
                            </div>
                        </div>

                        <div className="about-me">
                            <div id="simple ofme"># Flexible</div>
                             <div className="blockquote">Everything should be made as simple as possible but not simpler
                                <div className="blockquote-footer">Einstein</div>
                            </div> 
                            <div>
                                <p>틀에 갇혀있지 않는 융통성을 지닌지니 지뉘</p>
                            </div>
                        </div> */}
                    </div>
                </div>

          </div>
          </div>
      )
    }
}