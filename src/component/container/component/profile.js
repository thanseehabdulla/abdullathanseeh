import React, {Component} from 'react';
import './topbar.css';
import './freelancer.css'
import profile from './../../../images/profile2.jpeg'


export default class Profile extends Component {
    render() {
        return (
            <div className="App overallpadding">
                <div className="row">
                    <div className="col-lg-12">
                        <img className="img-responsive imgrec" src={profile} alt=""/>
                        <div className="intro-text textrec"
                             >
                            <h1 className="name">Abdulla Thanseeh</h1>
                            {/*<hr className="star-light" style={{'textAlign':'justify'}}/>*/}
                                <h6> Software Developer (2.7+ yrs)</h6>
                                <h6> Work at Sinergia media labs</h6>
                                <hr style={{borderColor:'#0000009e'}}/>
                                <a href="#fh5co-work" className="scroll-down" address="true"></a>
                              <br/>
                                <p className="pararec" >
                                    <b>Overview:</b></p>
                                <span className="spanrec" >
                                    Hand on experience in React-Redux-Saga-firebase,Hand on experience in MEAN(Mongodb,Expressjs,Angular,Node)STACK development -Hand on experience in Wordpress-Hand on experience in Android App Developement -Hand on experience Ionic App Developement -
                                    Slim3 Oauth2 instant mobile rest API Generation-
                                    Hand on experience in Graphic design(Krita)-
                                    LibGDX 2D adventure Game Developer
                                    -terminal Hand on experience in Linux -
                                    Git Hand on experience -Hand on experience in Asterisk free pbx setup -
                                    Hand on experience in Godot game engine development </span>
                                <br/>
                                <hr/>

                                <p className="para2rec" ><b>Project's
                                    handled as a Employee:</b></p>
                                <span className="span2rec" >Ui development for NGO website -Wordpress functionality(membership) extention project -Locator Android complete App-Slim3 instant Api generation with Oauth2 for backend android App - Bug fixes and features added in Expressjs node Application for Machinary website (Prox) -School Attendance system complete android App and website with php (noframework)-Openfire XMPP setup for both android and Ionic App using stophe and smack plugin respectively
                                    - MEAN Stack complete suite for gas booking and delievery </span>
                        </div>
                    </div>
                </div>


            </div>

    );
    }
    }