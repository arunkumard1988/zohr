import React, { Component } from 'react';

class PanelHeading extends Component {
    render() {
        return (
            <div className="panel__heading">
                <h2>{this.props.headingText}</h2>
            </div>
        );
    }
}

export default PanelHeading;