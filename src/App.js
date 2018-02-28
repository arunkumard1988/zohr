import React, { Component } from 'react';
import {Router,Route,Switch,} from 'react-router-dom';
import Nav from "./components/nav";
import CompanyDetails from './components/configuration/company_deatils';
import CustomerMaster from './components/configuration/CustomerMaster';
import InvoiceFormat from './components/configuration/invoice_format';
import ItemMaster from './components/configuration/item_master';
import SmsFormat from './components/configuration/sms_format';
import NoMatch from './components/noMatch';
import DashBaord from './components/dashboard/dashboard';
import './css/main.css';
import { history } from './_helpers';

class App extends Component {

  render() {
    return (
      <Router history={history}>
        <div className="app-container">
          <Nav />
          <header></header>
          <section className="main-wrap">
            <Switch>
              <Route exact path="/" component={DashBaord} />
              <Route path="/dashBoard" component={DashBaord} />
              <Route path="/companyDetails" component={CompanyDetails} />
              <Route path="/customerMaster" component={CustomerMaster} />
              <Route path="/invoiceFormat" component={InvoiceFormat} />
              <Route path="/itemMaster" component={ItemMaster} />
              <Route path="/smsFormat" component={SmsFormat} />
              <Route component={NoMatch} />
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}
export default App;
