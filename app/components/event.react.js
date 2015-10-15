var React = require('react');

var event = React.createClass({

	render: function() {
		return (
			<div>event{this.props.params.eventId}</div>
		);
	}

});

module.exports = event;