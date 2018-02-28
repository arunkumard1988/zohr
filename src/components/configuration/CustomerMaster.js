import React from 'react';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PanelHeading from '../panel_heading';
import CustomizedGrid from '../../components/configuration/customized_grid';
import { userActions } from '../../_actions';
const ReactDataGrid = require('react-data-grid');

class CustomerMaster extends React.Component {
	
  constructor(props,context) {
    super(props,context);	
        this.state = {
            companyName: '',
            contactNo: '',
            pinCode: '',
            showComponent: true,
            submitted: false
        };
	
   // this.handleButtonClick = this.handleButtonClick.bind(this);
   	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);

  }
  
   createRows = () => {
    let rows = [];
    for (let i = 1; i < 41; i++) {
      rows.push({
        id: i,
        customer_name: 'CustomerName ' + i,
        mobile_no: i * 1000
      });
    }

    this._rows = rows;
  };
  
  rowGetter = (i) => {
    return this._rows[i];
  };
  
 componentDidMount() {
	const { dispatch} = this.props
	dispatch(userActions.getAll());
} 
	 
  handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
	}
  cancelCourse = () => { 
    this.setState({
		companyName: '',
		contactNo: '',
		pinCode: '',
		submitted: false		
    });
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
			 //dispatch(customerActions.register(companyName));
			dispatch(userActions.register(companyName));
			e.target.reset();
		    this.cancelCourse();
			dispatch(userActions.getAll());
		}
		//document.getElementById("create-course-form").reset();
	}  
    render() {
		// const { dispatch,users } = this.props; 	
		  const { users } = this.props; 
		  const { companyName,contactNo,pinCode,submitted } = this.state;
		  let count=1;
			// Grid options for customer details
			this._columns = [
			{ key: 'id', name: 'ID' },
			{ key: 'customer_name', name: 'Customer Name' },
			{ key: 'mobile_no', name: 'Mobile No' } ];		
			
			let rows = [];		 
			{users.items &&
			<s>						  
			{users.items.map((user, index) =>
			rows.push({
			id: count++,
			customer_name: user.username,
			mobile_no: user.mobileno 
			}) 
			)
			
			}
			</s>
			
			} 							 
			this._rows = rows;			
			// Grid options for customer details

        return (
            <div className="flex-grid">
                <div className="panel panel--left flex-4">
                    <PanelHeading headingText="Customer Master"/>                
                    <form name="form" id="create-course-form" onSubmit={this.handleSubmit}>			
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
                    <div className="panel__heading"><h2>Customer Listing</h2>
					{this.state.showComponent ?
							<ReactDataGrid
							columns={this._columns}
							rowGetter={this.rowGetter}
							rowsCount={this._rows.length}
							minHeight={500}/>:
								   null
								}						

								{this.state.showComponent ?
								   <CustomizedGrid title={users.items} /> :
								   null
								}						
						 
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users } = state;    
    return {        
        users
    };
}


/* function mapStateToProps(users,dispatch) {
	//const { users } = this.state;
  return { actions: bindActionCreators(userActions.getAll , dispatch) };
}
 */
/*function mapStateToProps(state) {  
    const { users} = state;
    
    return {        
        users
    };
	 const { companyName} = dispatch;  
    return {
		actions:bindActionCreators(customerActions.getAll,dispatch),companyName
       // loggingIn
    }; 
}*/
export default connect(mapStateToProps)(CustomerMaster);
//const connectedCustomerMaster = connect(mapStateToProps)(CustomerMaster);
//export { connectedCustomerMaster as CustomerMaster }; 
//export default CustomerMaster;
//export default CustomerMaster;
