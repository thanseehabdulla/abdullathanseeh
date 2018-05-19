import React, {Component} from 'react';
import './topbar.css';
import './freelancer.css'
import profile from './../../../images/profile.png'


export default class Profile extends Component {
    render() {
        return (
            <div className="App overallpadding">
                <div className="row">
                    <div className="col-lg-12">
                        <img className="img-responsive imgrec"
                             width="20%" src={profile} alt=""/>
                        <div className="intro-text textrec"
                             >
                            <h1 className="name">Abdulla Thanseeh</h1>
                            <hr className="star-light" style={{'textAlign':'justify'}}/>
                                <h6> Software Developer (2.5+ yrs)</h6>
                                <hr style={{borderColor:'#0000009e'}}/>
                                <a href="#fh5co-work" className="scroll-down" address="true"></a>
                                <p className="pararec" >
                                    <b>Overview:</b></p>
                                <span className="spanrec" >
                                    Expert in Android App Developement -Expert Ionic App Developement -
                                    Expert in MEAN STACK development -
                                    Slim3 Oauth2 instant mobile rest API Generation-IOS Swift App Supporte-
                                    Laravel Framework supporte-
                                    LibGDX 2D adventure Game Developer-Openfire XMPP setup and
                                    connection to Android App via Smack dependency and
                                    Ionic2 via Strophe-Photoshop/Gimp/krita Intermediate designer-
                                    Beginner in  Ruby on rails basic setup-terminal Expert in Linux -
                                    Git Intermediate -Intermediate in Asterisk free pbx setup -
                                    Beginner in Godot game engine development </span>
                                <br/>
                                <hr/>

                                <p className="para2rec" ><b>Project's
                                    handled as a Employee:</b></p>
                                <span className="span2rec" >Locator Android App-Slim3 instant Api generation with Oauth2 for backend android App-Queue Management Hospitality Ionic2 App - Bug fixes and features added in Expressjs node Application for Machinary website (Prox) - Convertion of android app to Ios swift3 suportee-Laravel setup and basic addition of middleware and controller for routing -School Attendance system complete android App and website with php (noframework)-Openfire XMPP setup for both android and Ionic App using stophe and smack plugin respectively - Asterisk free pbx setup using
                                    SIP phones for call handling in bussiness hours
                                    - MEAN Stack complete suite for gas booking and delievery </span>
                        </div>
                    </div>
                </div>


            </div>

    );
    }
    }