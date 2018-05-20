import React, { Component } from 'react';
import './topbar.css';
import logo from './../../../logo.svg'
import redux from './../../../images/redux.png'
import firebase from './../../../images/firebase.png'
import krita from './../../../images/flag/krita.svg.png'

export default class Detail extends Component {
    render() {
        return (
            <div className="App backgroundblack">
                <img src={firebase} width={140} title="firebase"/> <img src={redux} width={40} title="redux"/><img src={logo} width={65} title="react"/><img src={krita} width={65} title   ="krita"/><p>This website is developed using create-react-app using react-redux-saga-firebase extentions libary extention  </p>


            </div>
        );
    }
}