import React, { Component } from 'react';
import './topbar.css';
import cabin from './../../../images/flag/cabin.png'
import cake from './../../../images/flag/cake.png'
import circus from './../../../images/flag/circus.png'
import safe from './../../../images/flag/safe.png'
import submarine from './../../../images/flag/submarine.png'
import game from './../../../images/flag/game.png'

export default class PortfolioDetail extends Component {
    render() {
        return (
            <div className="App backgroundwhite" >
                {/*Portfolio Modals */}
                <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2">
                                    <div className="modal-body">
                                        <h2>jo mon adventure in kerela: The game of super heroes</h2>
                                        <hr className="star-primary"/>
                                        <img src={cabin} className="img-responsive img-centered" alt=""/>
                                        <p><a style={{color:'#333'}} href="https://play.google.com/store/apps/details?id=com.boontaran.games.jomon&hl=en">GooglePlay</a></p>
                                        <ul className="list-inline item-details">
                                            <li>Client:
                                                <strong>5-18 Age
                                                </strong>
                                            </li>
                                            <li>Date:
                                                <strong>April 2016
                                                </strong>
                                            </li>
                                            <li>Service:
                                                <strong>Game Development
                                                </strong>
                                            </li>
                                        </ul>
                                        <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i>
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2">
                                    <div className="modal-body">
                                        <h2>Shaaji Paapan</h2>
                                        <hr className="star-primary"/>
                                        <img src={circus} className="img-responsive img-centered" alt=""/>
                                        <p><a style={{color:'#333'}} href="https://play.google.com/store/apps/details?id=com.beta.supercat&hl=en">GooglePlay</a></p>
                                        <ul className="list-inline item-details">
                                            <li>Client:
                                                <strong>5-18 Age
                                                </strong>
                                            </li>
                                            <li>Date:
                                                <strong>Dec 2017
                                                </strong>
                                            </li>
                                            <li>Service:
                                                <strong>Game Development
                                                </strong>
                                            </li>
                                        </ul>
                                        <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i>
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2">
                                    <div className="modal-body">
                                        <h2>Cut The Infected Fruit</h2>
                                        <hr className="star-primary"/>
                                        <img src={game} className="img-responsive img-centered" alt=""/>
                                        <p><a style={{color:'#333'}} href="https://play.google.com/store/apps/details?id=com.jomon.fruitslicing&hl=en">GooglePlay</a></p>
                                        <ul className="list-inline item-details">
                                            <li>Client:
                                                <strong>5-18 Age
                                                </strong>
                                            </li>
                                            <li>Date:
                                                <strong>Dec 2017
                                                </strong>
                                            </li>
                                            <li>Service:
                                                <strong>Game Development
                                                </strong>
                                            </li>
                                        </ul>
                                        <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i>
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2">
                                    <div className="modal-body">
                                        <h2>Web App Viewer</h2>
                                        <hr className="star-primary"/>
                                        <img src={cake} className="img-responsive img-centered" alt=""/>
                                        <p><a style={{color:'#333'}} href="https://play.google.com/store/apps/details?id=com.app.ats.com.bookmarkme&hl=en">GooglePlay</a></p>
                                        <ul className="list-inline item-details">
                                            <li>Client:
                                                <strong>18+ Age
                                                </strong>
                                            </li>
                                            <li>Date:
                                                <strong>JAN 2017
                                                </strong>
                                            </li>
                                            <li>Service:
                                                <strong>App Development
                                                </strong>
                                            </li>
                                        </ul>
                                        <button id="btnSubmit" type="button" className="btn btn-default" data-dismiss="modal"><i
                                            className="fa fa-times"></i> Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}