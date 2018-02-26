import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div className="nav-aside">
            <div className="logo">
                <h2><NavLink to="/">DELUXE</NavLink></h2>
            </div>
            <nav className="nav-wrap">
                <ul>
                    <li className="single-list">
                        <NavLink exact activeClassName="active" to="/dashBoard" ><i className="icon-grid"></i>Dashboard</NavLink>
                    </li>
                    <li className="single-list">
                        <NavLink exact activeClassName="active" to="/salesEntry"><i className="icon-note"></i>Sales Entry</NavLink>
                    </li>
                    <li className="single-list">
                        <NavLink exact activeClassName="active" to="/purchaseEntry"><i className="icon-note"></i>Purchase Entry</NavLink>
                    </li>
                    <li className="multi-list">
                        <h2><i className="icon-graph"></i>Reports</h2>
                        <ul>
                            <li><NavLink exact activeClassName="active" to="/salesReport">Sales Report</NavLink></li>
                            <li><NavLink exact activeClassName="active" to="/purchaseReport">Purchase Report</NavLink></li>
                            <li><NavLink exact activeClassName="active" to="/smsReport">SMS Report</NavLink></li>
                        </ul>
                    </li>
                    <li className="multi-list">
                        <h2><i className="icon-equalizer"></i>Configuration</h2>
                        <ul>
                            <li><NavLink exact activeClassName="active" to="/companyDetails">Company Details</NavLink></li>
                            <li><NavLink exact activeClassName="active" to="/customerMaster">Customer Master</NavLink></li>
                            <li><NavLink exact activeClassName="active" to="/itemMaster">Item Master</NavLink></li>
                            <li><NavLink exact activeClassName="active" to="/smsformat">SMS Format</NavLink></li>
                            <li><NavLink exact activeClassName="active" to="/invoiceFormat">Invoice Format</NavLink></li>
                        </ul>
                    </li>
                    <li className="multi-list">
                        <h2><i className="icon-settings"></i>Settings</h2>
                        <ul>
                            <li><NavLink exact activeClassName="active" to="/userSetting">User Settings</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
        );
    }
}



export default Nav;