var React = require('react');
var cx = require('react/lib/cx');
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var Link = Router.Link;
var Glyphicon = require('react-bootstrap').Glyphicon;

var accordionItem = React.createClass({
	getInitialState: function() {
		return {
			
		};
	},
	componentWillMount: function() {

	},
	componentWillUnmount: function() {

	},
	render: function() {
		var head = this.props.head;
		var data = this.props.data;

		var menus = [];

		for (var i = 0; i < data.length; i++) {
			menus.push(<li><Link to={data[i].href}>{data[i].name}</Link></li>);
		};

		return (
			<div className={ this.props.active ? "open accordion-item" : "accordion-item" }>
				<div className="accordion-item-head" onClick={this._clickHead}>
					<Glyphicon glyph="th-list" className="item-logo"/>
					{head}
					{
						this.props.active ? <Glyphicon glyph="chevron-up" className="f-fr"/> : <Glyphicon glyph="chevron-down" className="f-fr"/>
					}
				</div>
				<ul className='accordion-item-content'>
					{menus}
				</ul>
			</div>
		);
	},

	_clickHead:function(){
		var active = !this.props.active;

		var head = active ? this.props.head : null;
		this.props.onclick({
			head:head
		});
	}

});

module.exports = accordionItem;