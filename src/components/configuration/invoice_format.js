import React, { Component } from 'react';
import PanelHeading from '../panel_heading';
import Loading from '../loading.js';

class InvoiceFormat extends Component {
    state = {
        isLoading: true
    };
    componentDidMount() {
        setTimeout(() => this.setState({ isLoading: false }), 1500);
    }
    render() {
        const { isLoading } = this.state;
        return (
            <div className="flex-grid">
                <div className="panel flex-col">
                    {isLoading ? <Loading/>  : <PanelHeading headingText="Invoice Format"/> }                  
                </div>
            </div>
        );
    }
}

export default InvoiceFormat;