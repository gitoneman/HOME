var React = require('react');
var Submenu = require('../../common/accordion/accordion.react');
var menu = {
	
}

var report = React.createClass({
	render: function() {
		return (
			<div className="submenu">
				<Submenu data={menu}/>
			</div>
			
		);
	}
});

module.exports = report;