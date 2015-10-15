var React = require('react');
var TabbedArea = require('react-bootstrap').TabbedArea;
var TabPane = require('react-bootstrap').TabPane;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var UiTable = require('../../common/uiTable/uiTable.react');

var Cpt = React.createClass({
	getInitialState: function() {
		return {
			key: 1
		};
	},
	componentWillMount: function() {
		this.state.tableData = [
			{
				id:"1",
				name:"sunny.lu",
				age: "25"
			},
			{
				id:"2",
				name:"sunny.lu",
				age: "26"
			},
			{
				id:"3",
				name:"sunny.lu",
				age: "27"
			}
		]
		this.state.tableCol = [
			{
				label:"id",
				val:"id"
			},
			{
				label:"name",
				val:"name"
			},
			{
				label:"age",
				val:"age"
			}
		]
		this.state.format = {
			"id":function(v,data){
				return v
			}
		}	
	},
	render: function() {
		return (
			<div className="g-cnt">
				<TabbedArea activeKey={this.state.key} onSelect={this.handleTab} animation={false}>
			        <TabPane eventKey={1} tab='表格'>
			        	<div className="g-cnt">
				        	<UiTable 
				        		data={this.state.tableData} 
				        		col={this.state.tableCol}
				        		format={this.state.format}
				        		limit={5}
				        		listener={this._tableListener}
				        		url={"/1111"}
				        		pager={true}
				        		style={{"table":true, "table-hover":true, "table-bordered":true}}
				        		onClick={this._trClick} />
	        			</div>
			        </TabPane>
			        <TabPane eventKey={2} tab='表单'></TabPane>
			        <TabPane eventKey={3} tab='弹出框'></TabPane>
			        <TabPane eventKey={4} tab='对话框'></TabPane>
		      	</TabbedArea>

			</div>
		);
	},
	handleTab:function(key){
		this.setState({
			key:key 
		});
	},
	_trClick:function(data){
		console.log(data)
	},
	_tableListener:function(o){
		o.refresh();
	}

});

module.exports = Cpt;