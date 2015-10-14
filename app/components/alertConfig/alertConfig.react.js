var React = require('react');
var alertConfigStore = require('./store/alertConfigStore');
var Button = require('react-bootstrap').Button;
var t = require('tcomb-form');
var Panel = require('react-bootstrap').Panel;
var Form = t.form.Form;

var fields = {
    mytext: t.Str,
    age: t.Str
}
var options = {
	fields: {
	    mytext: {
	        type: 'password',
	        hasError: false,
			error:function(v){
				return "不能为空"
			},
			help:"111",
	    }
	},
		
};
var system = React.createClass({
	componentDidMount: function() {
	    alertConfigStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
	    alertConfigStore.removeChangeListener(this._onChange);
	},
	render: function() {
		var data = t.struct(fields);

		return (
			<div className="f-mt10">
				<Panel>
					<Form type={data} ref="form" options={options}/>
		        	<Button onClick={this._clickHandle}>保存</Button>
				</Panel>
			</div>
		);
	},
	_onChange:function(){

	},
	_clickHandle:function(){
		var value = this.refs.form.getValue();
		console.log(value)

	}
});

module.exports = system;