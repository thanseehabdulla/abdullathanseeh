import React, {Component} from 'react';
import './topbar.css';

import Contact from './contact'
import Footer from './footer'
import './animate.css'
import './portfolio.css'
import './gallery.css'
import { Link } from 'react-router-dom';


export default class Graphics extends Component {
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

   <div className="row overallpadding" style={{backgroundColor:'azure'}}>
       <div className="gallery">
           <a target="_blank" href="#">
               <img src="https://instagram.fmaa1-1.fna.fbcdn.net/vp/5edbe61249a8225c3de4d15940d9c3cd/5B8589A2/t51.2885-15/e35/31694792_182742902280341_482274889756049408_n.jpg" alt="Fjords" width="300" height="200"/>
           </a>
           <div className="desc">Reach Us to Design you only @ Rs 500/- onwards</div>
       </div>

       <div className="gallery">
           <a target="_blank" href="#">
               <img src="https://instagram.fmaa1-1.fna.fbcdn.net/vp/0b3798a06885fdf367a2e54441238b28/5B8925D9/t51.2885-15/e35/31556860_279897709219502_5564778139453751296_n.jpg" alt="Fjords" width="300" height="200"/>
           </a>
           <div className="desc">Reach Us to Design you only @ Rs 500/- onwards</div>
       </div>

       <div className="gallery">
           <a target="_blank" href="#">
               <img src="https://instagram.fmaa1-1.fna.fbcdn.net/vp/ee506fc1d04590ce64e8162fdcdafdc8/5B9DDB39/t51.2885-15/e35/31556960_484789791937146_7081752045710999552_n.jpg" alt="Fjords" width="300" height="200"/>
           </a>
           <div className="desc">Reach Us to Design you only @ Rs 500/- onwards</div>
       </div>

       <div className="gallery">
           <a target="_blank" href="#">
               <img src="https://instagram.fmaa1-1.fna.fbcdn.net/vp/dbeb8fe3a9377c17834a333ee12da748/5BA1818E/t51.2885-15/e35/31556804_176462813071255_7616635603328696320_n.jpg" alt="Fjords" width="300" height="200"/>
           </a>
           <div className="desc">Reach Us to Design you only @ Rs 500/- onwards</div>
       </div>

       {/*<div className="gallery">*/}
           {/*<a target="_blank" href="#">*/}
               {/*<img src="https://instagram.fmaa1-1.fna.fbcdn.net/vp/cbaa7a0728795adebde276acba36063c/5B8D8307/t51.2885-15/e35/30856524_2054493664877963_5155076703667617792_n.jpg" alt="Fjords" width="300" height="200"/>*/}
           {/*</a>*/}
           {/*<div className="desc">Reach Us to Design you only @ Rs 500/- onwards</div>*/}
       {/*</div>*/}

       <div className="gallery">
           <a target="_blank" href="#">
               <img src="https://instagram.fmaa1-1.fna.fbcdn.net/vp/ae7c16801f7a6023f391b64c7aaf375a/5B8822F4/t51.2885-15/e35/30856279_164570724225517_8597339570884837376_n.jpg" alt="Fjords" width="300" height="200"/>
           </a>
           <div className="desc">Reach Us to Design you only @ Rs 500/- onwards</div>
       </div>

       <div className="gallery">
           <a target="_blank" href="#">
               <img src="https://instagram.fmaa1-1.fna.fbcdn.net/vp/8e522b38ff40215c1f449314208645c3/5B8A1217/t51.2885-15/e35/30602064_1802159926754887_9181001754983006208_n.jpg" alt="Fjords" width="300" height="200"/>
           </a>
           <div className="desc">Reach Us to Design you only @ Rs 500/- onwards</div>
       </div>

       <div className="gallery">
           <a target="_blank" href="#">
               <img src="https://instagram.fmaa1-1.fna.fbcdn.net/vp/5edbe61249a8225c3de4d15940d9c3cd/5B8589A2/t51.2885-15/e35/31694792_182742902280341_482274889756049408_n.jpg" alt="Fjords" width="300" height="200"/>
           </a>
           <div className="desc">Reach Us to Design you only @ Rs 500/- onwards</div>
       </div>

       <div className="gallery">
           <a target="_blank" href="#">
               <img src="https://instagram.fmaa1-1.fna.fbcdn.net/vp/0b3798a06885fdf367a2e54441238b28/5B8925D9/t51.2885-15/e35/31556860_279897709219502_5564778139453751296_n.jpg" alt="Fjords" width="300" height="200"/>
           </a>
           <div className="desc">Reach Us to Design you only @ Rs 500/- onwards</div>
       </div>

       <div className="gallery">
           <a target="_blank" href="#">
               <img src="https://instagram.fmaa1-1.fna.fbcdn.net/vp/ee506fc1d04590ce64e8162fdcdafdc8/5B9DDB39/t51.2885-15/e35/31556960_484789791937146_7081752045710999552_n.jpg" alt="Fjords" width="300" height="200"/>
           </a>
           <div className="desc">Reach Us to Design you only @ Rs 500/- onwards</div>
       </div>

       <div className="gallery">
           <a target="_blank" href="#">
               <img src="https://instagram.fmaa1-1.fna.fbcdn.net/vp/dbeb8fe3a9377c17834a333ee12da748/5BA1818E/t51.2885-15/e35/31556804_176462813071255_7616635603328696320_n.jpg" alt="Fjords" width="300" height="200"/>
           </a>
           <div className="desc">Reach Us to Design you only @ Rs 500/- onwards</div>
       </div>

       {/*<div className="gallery">*/}
       {/*<a target="_blank" href="#">*/}
       {/*<img src="https://instagram.fmaa1-1.fna.fbcdn.net/vp/cbaa7a0728795adebde276acba36063c/5B8D8307/t51.2885-15/e35/30856524_2054493664877963_5155076703667617792_n.jpg" alt="Fjords" width="300" height="200"/>*/}
       {/*</a>*/}
       {/*<div className="desc">Reach Us to Design you only @ Rs 500/- onwards</div>*/}
       {/*</div>*/}

       <div className="gallery">
           <a target="_blank" href="#">
               <img src="https://instagram.fmaa1-1.fna.fbcdn.net/vp/ae7c16801f7a6023f391b64c7aaf375a/5B8822F4/t51.2885-15/e35/30856279_164570724225517_8597339570884837376_n.jpg" alt="Fjords" width="300" height="200"/>
           </a>
           <div className="desc">Reach Us to Design you only @ Rs 500/- onwards</div>
       </div>

       <div className="gallery">
           <a target="_blank" href="#">
               <img src="https://instagram.fmaa1-1.fna.fbcdn.net/vp/8e522b38ff40215c1f449314208645c3/5B8A1217/t51.2885-15/e35/30602064_1802159926754887_9181001754983006208_n.jpg" alt="Fjords" width="300" height="200"/>
           </a>
           <div className="desc">Reach Us to Design you only @ Rs 500/- onwards</div>
       </div>

       <div className="gallery">
           <a target="_blank" href="#">
               <img src="https://instagram.fmaa1-1.fna.fbcdn.net/vp/0a8b6de695e97fc7f0292a51580289ff/5BA1CFCC/t51.2885-15/e35/30591627_220354312067498_81853319223443456_n.jpg" alt="Fjords" width="300" height="200"/>
           </a>
           <div className="desc">Reach Us to Design you only @ Rs 500/- onwards</div>
       </div>

</div>

                {/*<Contact/>*/}
                <Footer/>

            </div>
        );
    }

}

