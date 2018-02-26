import React, { Component } from 'react';

class NoMatch extends Component {
    render() {
        return (
            <div className="flex-grid">
                <div className="panel flex-col pnf-panel">
                    <div className="pnf-card">
                        <div className="pnf-card__404-text">
                            <h2>404</h2>
                            <h3>Page Not Found</h3>
                            <p>The Requested Page was not Found</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NoMatch;