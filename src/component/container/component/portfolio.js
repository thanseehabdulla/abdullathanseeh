import React, {Component} from 'react';
import './topbar.css';
import cabin from './../../../images/flag/cabin.png'
import cake from './../../../images/flag/cake.png'
import circus from './../../../images/flag/circus.png'
import ds1 from './../../../images/flag/ds1.mp4'
import ds2 from './../../../images/flag/ds2.mp4'
import ds3 from './../../../images/flag/ds3.mp4'
import safe from './../../../images/flag/safe.png'
import submarine from './../../../images/flag/submarine.png'
import game from './../../../images/flag/game.png'
import {Carousel} from '3d-react-carousal';
import PorfolioDetail from './portfoliodetail'


let slides = [
    <video className="mediaplay" controls>
        <source src={ds2} type="video/mp4"/>
    </video>, <video className="mediaplay" controls>
        <source src={ds1} type="video/mp4"/>
    </video>,
    <video className="mediaplay" controls>
        <source src={ds3} type="video/mp4"/>
    </video>,
    <iframe className="mediaplay" src="https://www.youtube.com/embed/aYKqEKtrMDI" frameBorder="0"
            allow="autoplay; encrypted-media" allowFullScreen></iframe>,
    <iframe className="mediaplay" src="https://www.youtube.com/embed/TGijN-kkKWU" frameBorder="0"
            allow="autoplay; encrypted-media" allowFullScreen></iframe>,
    <iframe className="mediaplay" src="https://www.youtube.com/embed/7PVtaCbD06U" frameBorder="0"
            allow="autoplay; encrypted-media" allowFullScreen>
</iframe>,
    <img src={cabin} alt="1"/>,
    <img src={cake} alt="2"/>,
    <img src={circus} alt="3"/>,
    <img src={game} alt="4"/>,


];

export default class Portfolio extends Component {


    render() {
        return (
            <div className="App backgroundblack paddingTop" style={{backgroundColor: 'darkcyan', paddingBottom: '0px'}}>


                <div className="container">
                    <div className="row">

                        <div className="col-lg-12 text-center">
                            <h2>Available Apps Games And Websites</h2>
                            {/*<hr className="star-primary"/>*/}
                        </div>
                    </div>
                    <Carousel slides={slides} autoplay={true}/>

                </div>

                <div className="row backgroundwhite" style={{paddingTop: '10px',marginRight:'0px'}}>
                    <div className="col-xs-12 col-sm-4 portfolio-item">
                        <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                            <div className="caption">
                                <div className="caption-content">
                                    {/*<i className="fa fa-search-plus fa-3x"></i>*/}
                                </div>
                            </div>
                            <img src={cabin} className="img-responsive" alt="Cabin"/>
                        </a>
                    </div>
                    <div className="col-xs-12 col-sm-4 portfolio-item">
                        <a href="#portfolioModal2" className="portfolio-link" data-toggle="modal">
                            <div className="caption">
                                <div className="caption-content">
                                    {/*<i className="fa fa-search-plus fa-3x"></i>*/}
                                </div>
                            </div>
                            <img src={circus} className="img-responsive" alt="Slice of cake"/>
                        </a>
                    </div>
                    <div className="col-xs-12 col-sm-4 portfolio-item">
                        <a href="#portfolioModal3" className="portfolio-link" data-toggle="modal">
                            <div className="caption">
                                <div className="caption-content">
                                    {/*<i className="fa fa-search-plus fa-3x"></i>*/}
                                </div>
                            </div>
                            <img src={game} className="img-responsive" alt="Circus tent"/>
                        </a>
                    </div>

                    <div className="col-xs-12 col-sm-4 portfolio-item">
                        <a href="#portfolioModal6" className="portfolio-link" data-toggle="modal">
                            <div className="caption">
                                <div className="caption-content">
                                    {/*<i className="fa fa-search-plus fa-3x"></i>*/}
                                </div>
                            </div>
                            <img src={cake} className="img-responsive"
                                 alt="Submarine"/>
                        </a>
                    </div>
                </div>

                <PorfolioDetail/>
            </div>
        );
    }
}