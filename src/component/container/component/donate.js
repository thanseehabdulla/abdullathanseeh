import React, {Component} from 'react';
import './topbar.css';

import Contact from './contact'
import Footer from './footer'
import './animate.css'
import './portfolio.css'
import { Link } from 'react-router-dom';
import {Carousel} from '3d-react-carousal';
import {StripeProvider} from 'react-stripe-elements';
import MyStoreCheckout from './MyStoreCheckout';
import StripeCheckout from 'react-stripe-checkout';


let slides = [

    <iframe className="mediaplay" src="https://www.youtube.com/embed/BGQbJzib_4w" frameBorder="0"
            allow="autoplay; encrypted-media" allowFullScreen></iframe>,
    <iframe className="mediaplay" src="https://www.youtube.com/embed/QvkDDA62-tw" frameBorder="0"
            allow="autoplay; encrypted-media" allowFullScreen></iframe>,
    <iframe className="mediaplay" src="https://www.youtube.com/embed/stmRd6GqQqM" frameBorder="0"
            allow="autoplay; encrypted-media" allowFullScreen></iframe>




];
export default class Donate extends Component {

    onToken = (token) => {
        fetch('/save-stripe-token', {
            method: 'POST',
            body: JSON.stringify(token),
        }).then(response => {
            response.json().then(data => {
                alert(`We are in business, ${data.email}`);
            });
        });
    }


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
                                <h2>Why Do we Need Charity</h2>
                                {/*<hr className="star-primary"/>*/}
                            </div>
                        </div>
                        <Carousel slides={slides} autoplay={true}/>

                    </div>

                </div>


                {/*<StripeProvider apiKey="pk_test_12345">*/}
                    {/*<MyStoreCheckout />*/}
                {/*</StripeProvider>*/}

    <div className="row backgroundwhite" style={{paddingTop: '10px',marginRight:'0px'}}>
        <div className="col-xs-12 col-sm-4 portfolio-item">
            <a className="portfolio-link" data-toggle="modal">
                <div className="caption">
                    <div className="caption-content">
                        {/*<i className="fa fa-search-plus fa-3x"></i>*/}
                    </div>
                </div>
                <img src="https://reg-charity.org/wp-content/uploads/2014/05/icon_charityrecommendations_2000x1200px-850x510.png" className="img-responsive"
                     alt="Submarine"/>
            </a>
            <h4>Donate $1 for our vision</h4>
            <StripeCheckout
                amount={100}
                currency="USD"
                name="pay 1 dollar for poor people"
                description="We are raising fund for poor people"
                ComponentClass="div"
                panelLabel="Give Money"
                email="thanseehabdulla@gmail.com"
                locale="en"
                billingAddress={false}
                zipCode={false}
                alipay ={true}
                bitcoin={true}
                image="https://reg-charity.org/wp-content/uploads/2014/05/icon_charityrecommendations_2000x1200px-850x510.png"
                token={this.onToken}
                stripeKey="pk_test_fZgUL4Rq6H908J3D96wse1wv"
            />
        </div>
        <div className="col-xs-12 col-sm-4 portfolio-item">
            <a className="portfolio-link" data-toggle="modal">
                <div className="caption">
                    <div className="caption-content">
                        {/*<i className="fa fa-search-plus fa-3x"></i>*/}
                    </div>
                </div>
                <img src="https://reg-charity.org/wp-content/uploads/2014/05/icon_charityrecommendations_2000x1200px-850x510.png" className="img-responsive"
                     alt="Submarine"/>
            </a>
            <h4>Donate $10 for our vision</h4>
            <StripeCheckout
                amount={1000}
                currency="USD"
                name="pay 10 dollar for poor people"
                description="We are raising fund for poor people"
                ComponentClass="div"
                panelLabel="Give Money"
                email="thanseehabdulla@gmail.com"
                locale="en"
                billingAddress={false}
                zipCode={false}
                alipay ={true}
                bitcoin={true}
                image="https://reg-charity.org/wp-content/uploads/2014/05/icon_charityrecommendations_2000x1200px-850x510.png"
                token={this.onToken}
                stripeKey="pk_test_fZgUL4Rq6H908J3D96wse1wv"
            />
        </div>
        <div className="col-xs-12 col-sm-4 portfolio-item">
            <a className="portfolio-link" data-toggle="modal">
                <div className="caption">
                    <div className="caption-content">
                        {/*<i className="fa fa-search-plus fa-3x"></i>*/}
                    </div>
                </div>
                <img src="https://reg-charity.org/wp-content/uploads/2014/05/icon_charityrecommendations_2000x1200px-850x510.png" className="img-responsive"
                     alt="Submarine"/>
            </a>
            <h4>Donate $100 for our vision</h4>
            <StripeCheckout
                amount={10000}
                currency="USD"
                name="pay 100 dollar for poor people"
                description="We are raising fund for poor people"
                ComponentClass="div"
                panelLabel="Give Money"
                email="thanseehabdulla@gmail.com"
                locale="en"
                billingAddress={false}
                zipCode={false}
                alipay ={true}
                bitcoin={true}
                image="https://reg-charity.org/wp-content/uploads/2014/05/icon_charityrecommendations_2000x1200px-850x510.png"
                token={this.onToken}
                stripeKey="pk_test_fZgUL4Rq6H908J3D96wse1wv"
            />
        </div>

        <div className="col-xs-12 col-sm-4 portfolio-item">
            <a className="portfolio-link" data-toggle="modal">
                <div className="caption">
                    <div className="caption-content">
                        {/*<i className="fa fa-search-plus fa-3x"></i>*/}
                    </div>
                </div>
                <img src="https://reg-charity.org/wp-content/uploads/2014/05/icon_charityrecommendations_2000x1200px-850x510.png" className="img-responsive"
                     alt="Submarine"/>
            </a>
            <h4>Donate Rs 100 for our vision</h4>
            <StripeCheckout
                amount={100}
                currency="INR"
                name="pay Rs 100 for poor people"
                description="We are raising fund for poor people"
                ComponentClass="div"
                panelLabel="Give Money"
                email="thanseehabdulla@gmail.com"
                locale="en"
                billingAddress={false}
                zipCode={false}
                alipay ={true}
                bitcoin={true}
                image="https://reg-charity.org/wp-content/uploads/2014/05/icon_charityrecommendations_2000x1200px-850x510.png"
                token={this.onToken}
                stripeKey="pk_test_fZgUL4Rq6H908J3D96wse1wv"
            />
        </div>
        <div className="col-xs-12 col-sm-4 portfolio-item">
            <a className="portfolio-link" data-toggle="modal">
                <div className="caption">
                    <div className="caption-content">
                        {/*<i className="fa fa-search-plus fa-3x"></i>*/}
                    </div>
                </div>
                <img src="https://reg-charity.org/wp-content/uploads/2014/05/icon_charityrecommendations_2000x1200px-850x510.png" className="img-responsive"
                     alt="Submarine"/>
            </a>
            <h4>Donate Rs 500 for our vision</h4>
            <StripeCheckout
                amount={500}
                currency="INR"
                name="pay Rs 500 for poor people"
                description="We are raising fund for poor people"
                ComponentClass="div"
                panelLabel="Give Money"
                email="thanseehabdulla@gmail.com"
                locale="en"
                billingAddress={false}
                zipCode={false}
                alipay ={true}
                bitcoin={true}
                image="https://reg-charity.org/wp-content/uploads/2014/05/icon_charityrecommendations_2000x1200px-850x510.png"
                token={this.onToken}
                stripeKey="pk_test_fZgUL4Rq6H908J3D96wse1wv"
            />
        </div>
        <div className="col-xs-12 col-sm-4 portfolio-item">
            <a className="portfolio-link" data-toggle="modal">
                <div className="caption">
                    <div className="caption-content">
                        {/*<i className="fa fa-search-plus fa-3x"></i>*/}
                    </div>
                </div>
                <img src="https://reg-charity.org/wp-content/uploads/2014/05/icon_charityrecommendations_2000x1200px-850x510.png" className="img-responsive"
                     alt="Submarine"/>
            </a>
            <h4>Donate Rs 2000 for our vision</h4>
            <StripeCheckout
                amount={2000}
                currency="INR"
                name="pay Rs 2000 for poor people"
                description="We are raising fund for poor people"
                ComponentClass="div"
                panelLabel="Give Money"
                email="thanseehabdulla@gmail.com"
                locale="en"
                billingAddress={false}
                zipCode={false}
                alipay ={true}
                bitcoin={true}
                image="https://reg-charity.org/wp-content/uploads/2014/05/icon_charityrecommendations_2000x1200px-850x510.png"
                token={this.onToken}
                stripeKey="pk_test_fZgUL4Rq6H908J3D96wse1wv"
            />
        </div>
    </div>

<hr/>

                <Contact/>
                <Footer/>

            </div>
        );
    }

}

