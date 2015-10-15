var React = require('react');
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var event = React.createClass({
	render: function() {
		return (
			<div>
				<nav className="navbar navbar-default" role="navigation">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">Title</a>
					</div>
					<div className="collapse navbar-collapse navbar-ex1-collapse">
						<ul className="nav navbar-nav">
							<li><Link to="event" params={{eventId: 1}}>event1</Link></li>
							<li><Link to="event" params={{eventId: 2}}>event2</Link></li>
							<li><Link to="event" params={{eventId: 3}}>event3</Link></li>
						</ul>					
					</div>
				</nav>
				<RouteHandler {...this.props}/>
			</div>
		);
	}
});

module.exports = event;