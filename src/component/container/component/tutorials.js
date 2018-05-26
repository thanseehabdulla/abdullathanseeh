import React, {Component} from 'react';
import './topbar.css';

import Contact from './contact'
import Footer from './footer'
import './animate.css'
import './portfolio.css'
import { Link } from 'react-router-dom';

import {Carousel} from '3d-react-carousal';

let slides = [

    <iframe className="mediaplay" src="https://www.youtube.com/embed/IoPx_rSicrM" frameBorder="0"
            allow="autoplay; encrypted-media" allowFullScreen></iframe>,
    <iframe className="mediaplay" src="https://www.youtube.com/embed/EFwa5Owp0-k" frameBorder="0"
            allow="autoplay; encrypted-media" allowFullScreen></iframe>,
    <iframe className="mediaplay" src="https://www.youtube.com/embed/2EaopRDxNrw" frameBorder="0"
            allow="autoplay; encrypted-media" allowFullScreen></iframe>,

    <iframe className="mediaplay" src="https://www.youtube.com/embed/YnJNAXIFJ2E" frameBorder="0"
    allow="autoplay; encrypted-media" allowFullScreen></iframe>,
    <iframe className="mediaplay" src="https://www.youtube.com/embed/i5qpS_D8Law" frameBorder="0"
            allow="autoplay; encrypted-media" allowFullScreen></iframe>,
    <iframe className="mediaplay" src="https://www.youtube.com/embed/-67hh86N42Q" frameBorder="0"
            allow="autoplay; encrypted-media" allowFullScreen></iframe>,
    <iframe className="mediaplay" src="https://www.youtube.com/embed/Xd7huBu39qk" frameBorder="0"
            allow="autoplay; encrypted-media" allowFullScreen></iframe>,
    <iframe className="mediaplay" src="https://www.youtube.com/embed/KMX1mFEmM3E" frameBorder="0"
            allow="autoplay; encrypted-media" allowFullScreen></iframe>,
    <iframe className="mediaplay" src="https://www.youtube.com/embed/Zftx68K-1D4" frameBorder="0"
            allow="autoplay; encrypted-media" allowFullScreen></iframe>


];
export default class Tutorials extends Component {
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
                <div className="App backgroundblack paddingTop" style={{backgroundColor: 'darkcyan', paddingBottom: '0px'}}>
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12 text-center">
                            <h2>Best of Tutorials in youtube</h2>
                            {/*<hr className="star-primary"/>*/}
                        </div>
                    </div>
                    <Carousel slides={slides} autoplay={true}/>

                </div>
                </div>


                <Contact/>
                <Footer/>

            </div>
        );
    }

}

