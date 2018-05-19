import React, { Component } from 'react';
import './topbar.css';

export default class Contact extends Component {
    render() {
        return (
            <div className="App paddingTop">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2>Contact Me</h2>
                                <hr className="star-primary"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 col-lg-offset-2">
                                <h4> Mail me at: thanseehabdulla@gmail.com </h4>
                                <h4> Contact Number : +919847444106</h4>
                                <h4> Lives in : Cochin , Kerela </h4>
                                <h4> HomeTown : kasaragod , kerela </h4>
                            </div>
                        </div>
                    </div>



            </div>
        );
    }
}