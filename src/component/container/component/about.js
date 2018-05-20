import React, { Component } from 'react';
import './topbar.css';

export default class About extends Component {
    render() {
        return (
            <div className="App paddingTop" style={{backgroundColor:'azure'}}>


                    <div class="container">
                        <div class="row">

                            <div class="col-lg-12 text-center">
                                <h2>About</h2>
                                <hr class="star-light"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-lg-offset-2">
                                <p style={{textAlign: 'justify',fontSize:'16px'}}>Abdulla Thanseeh is a passionate Software Engineer who develops apps on solving the difficulty the
                                    society currenty face.Ats App studios (App Store dev account name) was created by Abdulla Thanseeh
                                    on 2015. The GitHub repo includes the partial source files of some of the projects handled by
                                    Abdulla Thanseeh.</p>
                            </div>
                            <div class="col-lg-4">
                                <p style={{textAlign: 'justify',fontSize:'16px'}}>Whether you're a student looking to showcase your work, a professional looking to attract clients, or
                                    a graphic artist looking to share your projects, Abdulla Thanseeh is the perfect friend to
                                    start </p>
                            </div>

                        </div>
                    </div>
                    <br/>
                    <br/>





            </div>
        );
    }
}