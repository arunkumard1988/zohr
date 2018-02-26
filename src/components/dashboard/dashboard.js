import React, { Component } from 'react';
import PanelHeading from '../panel_heading';

class DashBoard extends Component {
    render() {
        return (
            <div className="flex-grid">
                <div className="panel flex-col">
                    <PanelHeading headingText="Dashboard"/>
                </div>
            </div>
        );
    }
}

export default DashBoard;