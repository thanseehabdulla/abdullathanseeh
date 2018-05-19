import React, { Component } from 'react';
import './topbar.css';
import logo from './../../../logo.svg'
import redux from './../../../images/redux.png'
import firebase from './../../../images/firebase.png'

export default class Detail extends Component {
    render() {
        return (
            <div className="App backgroundblack">
                <img src={firebase} width={140}/> <img src={redux} width={40}/><img src={logo} width={65}/><p>This website is developed using create-react-app using react-redux-saga-firebase extentions libary extention  </p>


            </div>
        );
    }
}