var React = require('react');
var TabbedArea = require('react-bootstrap').TabbedArea;
var TabPane = require('react-bootstrap').TabPane;
var DataMain = require('../DataMaintain/DataMaintain.react');
var AlertConfig = require('../alertConfig/alertConfig.react');

var system = React.createClass({
	getInitialState: function() {
		return {
			key:1 
		};
	},
	render: function() {
		return (
			<div className="g-cnt">
				<TabbedArea activeKey={this.state.key} onSelect={this.handleTab} animation={false}>
			        <TabPane eventKey={1} tab='数据分区'>
		        		<DataMain/>
			        </TabPane>
			        <TabPane eventKey={2} tab='网络配置'>网络配置</TabPane>
			        <TabPane eventKey={3} tab='告警配置'>
			        	<AlertConfig />
			        </TabPane>
			        <TabPane eventKey={4} tab='服务配置'>服务配置</TabPane>
		      	</TabbedArea>	
			</div>
		);
	},
	handleTab:function(key){
		this.setState({
			key:key 
		});
	}
});

module.exports = system;