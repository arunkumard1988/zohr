import React, { Component } from 'react';
import PanelHeading from '../panel_heading';

class ItemMaster extends Component {
    render() {
        return (
            <div className="flex-grid">
                <div className="panel flex-col">
                    <PanelHeading headingText="Item Master"/>
                </div>
            </div>
        );
    }
}

export default ItemMaster;