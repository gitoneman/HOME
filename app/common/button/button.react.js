var React = require('react');
var cx = require('react/lib/cx');
var classNames = require('classnames')

var button = React.createClass({

	render: function() {

		return (
			<button  type="button" onClick={this._btnClick} className={classNames("btn",this.props.bStyle)}>{this.props.bText}</button>
		);
	},
	_btnClick:function(){
		this.props.onclick();
	}

});

module.exports = button;