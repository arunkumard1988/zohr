import React, { Component } from 'react';
import PanelHeading from '../panel_heading';

class CompanyDetails extends Component {
    render() {
        return (
            <div className="flex-grid">
                <div className="panel flex-col">
                    <PanelHeading headingText="Company Deatils"/>
                </div>
            </div>
        );
    }
}

export default CompanyDetails;