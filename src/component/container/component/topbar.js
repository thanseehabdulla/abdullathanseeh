import React, {Component} from 'react';
import './topbar.css';
import Detail from './builddetail'
import Profile from './profile'
import Portfolio from './portfolio'
import About from './about'
import Contact from './contact'
import Footer from './footer'
import './animate.css'
import './portfolio.css'
import { Link } from 'react-router-dom';



export default class TopBar extends Component {
    render() {
        return (
            <div className="App backgroundwhite">
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                    data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">ATS-Abdulla Thanseeh Studio </a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="/">Home</a></li>
                                <li><a href="https://github.com/thanseehabdulla">Git</a></li>
                                <li><a href="/tutorials">Tutorials</a></li>
                                <li><a href="/graphics">Design Assets</a></li>
                                <li><Link
                                    to="route"
                                    onClick={(event) => { event.preventDefault(); window.open(process.env.PUBLIC_URL + '/myresume.pdf')}}>
                                    <a href={process.env.PUBLIC_URL + '/myresume.pdf'} target="_blank">Why Should You Hire Me? Checkout My Resume</a>
                                </Link>
                                </li>

                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="/donate"><span className="glyphicon glyphicon-user"></span> If Interested, Donate
                                    Us to Feed Poor</a></li>
                                {/*<li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>*/}
                            </ul>

                        </div>
                    </div>
                </nav>

                <Profile/>
                <Portfolio/>
                <About/>
                <Contact/>

                <Footer/>

            </div>
        );
    }

}

