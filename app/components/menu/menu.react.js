var React = require('react');
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var Link = Router.Link;
var MenuItem = require('react-bootstrap').MenuItem;
var DropdownButton = require('react-bootstrap').DropdownButton;

var menu = React.createClass({

	render: function() {
		return (
			<nav className="navbar navbar-default" role="navigation">
				<div className="navbar-header">
					<a className="navbar-brand" href="#">这里是一个LOGO</a>
				</div>
				<div className="collapse navbar-collapse navbar-ex1-collapse">
					<ul className="nav navbar-nav navbar-right">
						<li>
							<DropdownButton bsStyle='link' title='用户' className="user-info">
						      	<MenuItem eventKey="1"><a href="/logout">退出</a></MenuItem>
						      	<MenuItem eventKey="2">关于</MenuItem>
						    </DropdownButton>
						</li>
						
					</ul>					
				</div>
			</nav>
		);
	}
});

module.exports = menu;