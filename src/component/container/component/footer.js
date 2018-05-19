import React, { Component } from 'react';
import './topbar.css';
import Detail from './builddetail'
import './font-awesome.css'
import logo from './../../../images/logo2.png'

export default class Footer extends Component {
    render() {
        return (
            <div className="App backgroundblack paddingTop" style={{paddingBottom:'0px'}}>

                    <div className="footer-above">
                        <div className="container">
                            <div className="row">
                                <div className="footer-col col-md-4">
                                    <h3>Location</h3>
                                    <p>Kasaragod
                                        <br/>Kerela, IND 671123</p>
                                </div>
                                <div className="footer-col col-md-4">
                                    <h3>Around the Web</h3>
                                    <ul className="list-inline">
                                        <li>
                                            <a href="https://www.facebook.com/thanseeh.abdulla.35"
                                               className="btn-social btn-outline"><span
                                                className="sr-only">Facebook</span><i
                                                className="fa fa-fw fa-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://plus.google.com/u/1/106486245277526412257"
                                               className="btn-social btn-outline"><span
                                                className="sr-only">Google Plus</span><i
                                                className="fa fa-fw fa-google-plus"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/AbduThanseeh"
                                               className="btn-social btn-outline"><span
                                                className="sr-only">Twitter</span><i
                                                className="fa fa-fw fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/thanseeh-abdulla-ab78aba2/"
                                               className="btn-social btn-outline"><span
                                                className="sr-only">Linked In</span><i
                                                className="fa fa-fw fa-linkedin"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://abdullathanseeh.wordpress.com/"
                                               className="btn-social btn-outline"><span
                                                className="sr-only">Wordpress</span><i
                                                className="fa fa-fw fa-wordpress"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://stackoverflow.com/users/8676214/abdulla-thanseeh"
                                               className="btn-social btn-outline"><span className="sr-only">Stack OverFlow</span><i
                                                className="fa fa-fw fa-stack-overflow"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://play.google.com/store/apps/dev?id=6899856045075552526&hl=en"
                                               className="btn-social btn-outline"><span
                                                className="sr-only">Playstore</span><i
                                                className="fa fa-fw fa-play"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://author.chupamobile.com/author/Thanseeh"
                                               className="btn-social btn-outline"><span
                                                className="sr-only">chupamobiles</span><i
                                                className="fa fa-fw fa-shopping-cart"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.freelancer.in/u/thanseehabdulla"
                                               className="btn-social btn-outline"><span
                                                className="sr-only">Freelance.com</span><i
                                                className="fa fa-fw fa-briefcase"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://bitbucket.org/thanseeh_abdulla/"
                                               className="btn-social btn-outline"><span
                                                className="sr-only">Bitbucket</span><i
                                                className="fa fa-fw fa-bitbucket"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/channel/UCxEvBaIu_KgKkT32M0cBXLQ?view_as=subscriber"
                                               className="btn-social btn-outline"><span
                                                className="sr-only">Youtube</span><i
                                                className="fa fa-fw fa-youtube"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://thanseehabdulla.blogspot.in/"
                                               className="btn-social btn-outline"><span
                                                className="sr-only">Blogger</span><i
                                                className="fa fa-fw fa-rss"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer-col col-md-4">
                                    <h3>About ATS App Studios</h3>
                                    <p style={{textAlign: 'justify'}}>ATS App Studios is a App store account established
                                        since 2015 when Abdulla Thanseeh got in the
                                        field of tech and was inspired by some of the inventive ideas and thought of his
                                        friends to
                                        benifit Society, Whether it is expressed in the form of a game or app.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                <Detail/>
                    <div className="footer-below" style={{backgroundColor:'#111',padding:'7px 0px'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <img src={logo} width={65} height={65}/>   Copyright &copy; Abdulla Thanseeh 2018
                                </div>
                            </div>
                        </div>
                    </div>


            </div>
        );
    }
}