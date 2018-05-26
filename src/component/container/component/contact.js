import React, {Component} from 'react';
import './topbar.css';
import Form from './form/contactus'


export default class Contact extends Component {
    render() {
        return (
            <div className="App paddingTop">
                <div style={{display:'flex',flexWrap:'wrap',flexDirection: 'row',justifyContent:'space-evenly'}}>
                    <div className="">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2>Contact Me</h2>
                                <hr className="star-primary"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 text-left" style={{fontSize: '16px'}}>
                                <h5> Mail: thanseehabdulla@gmail.com </h5>
                                <h5> Contact : +919847444106</h5>
                                <h5> Available at : Cochin , Kerala </h5>
                                <h5> HomeTown : kasaragod , kerala </h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Form/>
                    </div>
                </div>
            </div>
        );
    }
}