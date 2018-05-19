import React, { Component } from 'react';
import logo from './../../logo.svg';
import './App.css';
import TopBar from './component/topbar'

export default class BaseApp extends Component {
    render() {
        return (
            <div className="App">
                <TopBar/>

            </div>
        );
    }
}


