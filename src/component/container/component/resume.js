import React, { Component } from 'react';
import './topbar.css';
import { Document, Page } from 'react-pdf';


export default class Resume extends Component {

    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages });
    }


    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <div>
                <Document
                    file={resume}
                    onLoadSuccess={this.onDocumentLoad}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
            </div>
        );

    }
}