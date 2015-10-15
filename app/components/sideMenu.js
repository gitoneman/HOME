var React = require('react');
var AccordionItem = require('./sideMenu-item.react');
var menu = require('../menu.config');
var _ = require("underscore");

function getInit(){
	var hash = window.location.hash.slice(2);

	for(var i in menu){
		var arr = [];

		_.each(menu[i],function(item){
			arr.push(item.href);
		})

		if(_.contains(arr,hash)){
			return i;
		}
	}
}

var accordion = React.createClass({
	getInitialState: function() {
		return {
			now:getInit()
		};

	},
	componentWillMount: function() {
		
	},
	componentWillUnmount: function() {

	},
	render: function() {
		var menu = this.props.data;
		var menus = [];
		var now = this.state.now;

		for(var k in menu){
			menus.push(<AccordionItem head={k} data={menu[k]} onclick={this._clickHead} active={now == k?true:false}/>)
		}
		return (
			<div className='accordion'>
				{menus}
			</div>
		);
	},
	_clickHead:function(o){
		this.setState({
			now:o.head 
		});
	}

});

module.exports = accordion;