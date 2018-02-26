import React from 'react';
import { connect } from 'react-redux';
import PanelHeading from '../panel_heading';
import CustomizedGrid from '../../components/configuration/customized_grid';
import { userActions } from '../../_actions';
class CustomerMaster extends React.Component {
  constructor(props) {
    super(props);	
        this.state = {
            companyName: '',
            contactNo: '',
            pinCode: '',
            submitted: false
        };
   // this.handleButtonClick = this.handleButtonClick.bind(this);
   	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);

  }
 
  handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
	} 
	handleSubmit(e) {
		e.preventDefault(); 	
		this.setState({ submitted: true });	       
      
		const { companyName } = this.state;
		const { contactNo } = this.state;
		const { pinCode } = this.state;
		const { dispatch } = this.props;
		 
		if ((companyName) && (contactNo) && (pinCode)) {
			 this.setState({ showComponent: true });			 
			 this.props.dispatch(userActions.login(companyName));
		}
	}  
    render() {
		 const { companyName,contactNo,pinCode,submitted } = this.state;
        return (
            <div className="flex-grid">
                <div className="panel panel--left flex-4">
                    <PanelHeading headingText="Customer Master"/>                
                    <form name="form" onSubmit={this.handleSubmit}>			
                        <div className="form-row">
                            <div className="form-row__label flex-grid">
                                <div className="flex-col">
                                    <label>Company Name</label>
                                    <span className="sub-label">(Enter your company name)</span>
                                </div>
                            </div>
                            <div className="form-row__field flex-grid">
                                <div className="flex-col">                                     
									<input type="text" className="form-control" name="companyName" value={companyName} onChange={this.handleChange} placeholder="Enter Company Name" autoComplete="off"/>
									{submitted && !companyName &&
										<div className="help-block">Company Name is required</div>
									}										
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <label className="form-row__label">Contact Number</label>
                            <div className="form-row__field flex-grid">
                                <div className="flex-col">                                    
									<input type="text" className="form-control" name="contactNo" value={contactNo} onChange={this.handleChange}  placeholder="Enter Contact No" autoComplete="off"/>
									{submitted && !contactNo &&
										<div className="help-block">Contact No is required</div>
									}	
                                </div>
                            </div>                            
                        </div>
                        <div className="form-row">
                            <label className="form-row__label">Address</label>
                            <div className="form-row__field flex-grid">
                                <div className="flex-col">
                                    <textarea className="form-control"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="flex-grid">
                                <div className="flex-col">
                                    <label className="form-row__label">Country</label>
                                    <div className="form-row__field">
                                        <select className="form-control">
                                            <option>India</option>
                                            <option>TamilNadu</option>
                                            <option>Bangalore</option>
                                        </select>                       
                                    </div>
                                </div>
                                <div className="flex-col">
                                    <label className="form-row__label">State</label>
                                    <div className="form-row__field">
                                        <select className="form-control">
                                            <option>India</option>
                                            <option>TamilNadu</option>
                                            <option>Bangalore</option>
                                        </select>         
                                    </div>
                                </div>
                            </div>                                    
                        </div>
                        <div className="form-row">
                            <div className="flex-grid">
                                <div className="flex-col">
                                    <label className="form-row__label">City</label>
                                    <div className="form-row__field">
                                        <select className="form-control">
                                            <option>India</option>
                                            <option>TamilNadu</option>
                                            <option>Bangalore</option>
                                        </select>                      
                                    </div>
                                </div>
                                <div className="flex-col">
                                    <label className="form-row__label">PIN Code</label>
                                    <div className="form-row__field">                                         
										<input type="number" className="form-control" name="pinCode" value={pinCode} onChange={this.handleChange} placeholder="Enter Pin Code" autoComplete="off"/>
										{submitted && !pinCode &&
											<div className="help-block">Pin Code is required</div>
										}											
                                    </div>
                                </div>
                            </div>                                    
                        </div>
                        <div className="form-row">
                            <div className="flex-grid button submit--button">
                                <div className="flex-6">							 
									<button>Add Entry</button>
								 								
                                </div>
                            </div>
                        </div>
                    </form>                        
                </div>
                <div className="panel panel--right flex-8">
                    <div className="panel__heading">
                        
						{this.state.showComponent ?
								   <CustomizedGrid /> :
								   null
								}						
						 
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {    
    return {
       // loggingIn
    };
}

const connectedCustomerMaster = connect(mapStateToProps)(CustomerMaster);
//export { connectedCustomerMaster as CustomerMaster }; 
export default CustomerMaster;
//export default CustomerMaster;