var React = require('react');
var MailStore = require('../stores/MailStore');
var MailActions = require('../actions/MailActions');
var t = require('tcomb-form');
var Form = t.form.Form;
var Button = require('react-bootstrap').Button;
var Panel = require('react-bootstrap').Panel;

var fields = {
	to: t.Str,
    subject: t.Str,
    text: t.Str
}

var options = {
	fields: {
	    subject: {
	    	label:"邮件主题",
	        type: 'text',
	        hasError: false,
			error:function(v){
				return "不能为空"
			},							
			help:"提示：填写邮件主标题",
	    },
	    to: {
	    	label:"接收人",
	        type: 'email',
	        hasError: false,
			error:function(v){
				return "不能为空"
			},							
			help:"提示：填写邮件接收人",
	    },
	    text: {
	    	label:"邮件内容",
	        type: 'textarea',
	        hasError: false,
			error:function(v){
				return "不能为空"
			},							
			help:"提示：填写邮件内容",
	    }
	},
		
};

var mail = React.createClass({
	getInitialState: function() {
		return MailStore.getState();
	},
	componentDidMount: function() {
		MailStore.listen(this.onChange);
		//初始化action
    	//MailActions.getTwoCharacters();
	},
	componentWillUnmount: function() {
		MailStore.unlisten(this.onChange);
	},
	onChange:function(state){
		this.setState(state);
	},
	render: function() {
		var mail = t.struct(fields);
		return (
			<div className="g-cnt">
				<div className="mail">
					<Form 
						type={mail} 
						ref="form" 
						options={options} 
						value={this.state.value}/>
						
	        		<Button bsStyle="primary" disabled={this.state.sending == false ? "" : "disabled"} onClick={this._clickHandle}>
	        			{ this.state.sending == false ? "发送邮件" : "邮件发送中..."}
	        		</Button>
				</div>
			</div>
			
		);
	},
	_clickHandle:function(){
		var value = this.refs.form.getValue();
		if(value){
			MailActions.sendMail(value);
		}
		console.log(value)
	}
});

module.exports = mail;