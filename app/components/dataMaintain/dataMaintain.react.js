var React = require('react');
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var TabbedArea = require('react-bootstrap').TabbedArea;
var TabPane = require('react-bootstrap').TabPane;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var ButtonGroup = require('react-bootstrap').ButtonGroup;
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;
var DropdownButton = require('react-bootstrap').DropdownButton;
var MenuItem = require('react-bootstrap').MenuItem;
var Panel = require('react-bootstrap').Panel;
var SplitButton = require('react-bootstrap').SplitButton;
var Button = require('react-bootstrap').Button;
var Chart = require('../../common/charts/charts.react')
var dataMaintainStore = require('./store/dataMaintainStore');
var DataGrid = require('react-datagrid');


var system = React.createClass({
	componentDidMount: function() {
	    dataMaintainStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
	    dataMaintainStore.removeChangeListener(this._onChange);
	},
	render: function() {
		var chartData = dataMaintainStore.getChartData();
		var chart1 = chartData["0"];
		var chart2 = chartData["1"];

		return (
			<div>
	        	<Grid fluid>
				    <Row className='show-grid'>
				      	<Col xs={18} md={12}>
				      		<Chart onClick={this.chartClick} bsType="bar" data={chart2}/>
				      	</Col>
				    </Row>
				</Grid>
				<div className="">
					<Grid fluid>
					    <Row className='show-grid'>
					      	<Col xs={18} md={12}>
					      		<Panel>
							    	<ButtonToolbar className="pull-left f-mr5">
							 			<DropdownButton title='远程恢复'>
									        <MenuItem eventKey='1'>Dropdown link</MenuItem>
									        <MenuItem eventKey='2'>Dropdown link</MenuItem>
									    </DropdownButton>
									</ButtonToolbar>
					      			<ButtonToolbar className="pull-left f-mr5">
									    <Button >备份</Button>
									    <Button  >归档</Button>
									    <Button  >恢复</Button>
									    <Button  >下载</Button>
									</ButtonToolbar>
									<ButtonToolbar className="pull-left">
									    <SplitButton title='Dropdown right' pullRight>
										    <MenuItem eventKey='1'>Action</MenuItem>
										    <MenuItem eventKey='2'>Another action</MenuItem>
										    <MenuItem eventKey='3'>Something else here</MenuItem>
										    <MenuItem divider />
										    <MenuItem eventKey='4'>Separated link</MenuItem>
									  	</SplitButton>
									</ButtonToolbar>
									<ButtonToolbar className="pull-right">
									    <Button >上传归档文件</Button>
									</ButtonToolbar>
									<ButtonToolbar className="pull-right f-mr5">
									    <DropdownButton title='远程恢复' pullRight>
									        <MenuItem eventKey='1'>Dropdown link</MenuItem>
									        <MenuItem eventKey='2'>Dropdown link</MenuItem>
									    </DropdownButton>
									</ButtonToolbar>										
								</Panel>
					      	</Col>
					    </Row>
					</Grid>
					<Grid fluid>
					    <Row className='show-grid'>
					      	<Col xs={18} md={12}>
		
					      	</Col>
					    </Row>
					</Grid>
				</div>
			</div>
		);
	},
	chartClick:function(e){
		console.log(e);

	},
	_onChange:function(){
		alert("change")
	}
});

module.exports = system;