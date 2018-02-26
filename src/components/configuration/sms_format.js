import React, { Component } from 'react';
import PanelHeading from '../panel_heading';

class SmsFormat extends Component {
    render() {
        return (
            <div className="flex-grid">
                <div className="panel flex-col">
                    <PanelHeading headingText="SMS Format"/>
                </div>
            </div>
        );
    }
}

export default SmsFormat;