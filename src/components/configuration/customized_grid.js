import React from 'react';
const ReactDataGrid = require('react-data-grid');

class CustomizedGrid extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.createRows();
    this._columns = [
      { key: 'id', name: 'ID' },
      { key: 'title', name: 'Title' },
      { key: 'count', name: 'Mobile No' } ];

    this.state = null;
  }

  createRows = () => {
    let rows = [];
    for (let i = 1; i < 41; i++) {
      rows.push({
        id: i,
        title: 'CustomerName ' + i,
        count: i * 1000
      });
    }

    this._rows = rows;
  };

  rowGetter = (i) => {
    return this._rows[i];
  };

  render() {
    return  (	
	<div>
		<h2>Customer Listing</h2>
		<ReactDataGrid
        columns={this._columns}
        rowGetter={this.rowGetter}
        rowsCount={this._rows.length}
        minHeight={500} />
	</div>);
		
  }
}

 

export default CustomizedGrid;