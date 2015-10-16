var React = require('react');
var ChatStore = require('../stores/ChatStore');
var ChatActions = require('../actions/ChatActions');
var UserStore = require('../stores/UserStore');
var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;

// var socket = io.connect();
var socket;
var chat = React.createClass({
	getInitialState: function() {
		return ChatStore.getState();
	},
	componentDidMount: function() {
		ChatStore.listen(this.onChange);
		//初始化action
    	//ChatActions.getTwoCharacters();

    	setTimeout(function(){
    		if(!socket){
	    		socket = io.connect();

	    		socket.emit('login',UserStore.getState().username)
		    	socket.on('users',function(data){
					ChatActions.getUsers(data.users);
		    	})
		    	socket.on('message',function(data){
					ChatActions.getMsg(data);
		    	})
	    	}else{
	    		socket.connect();
	    		socket.emit('login',UserStore.getState().username)
	    	}
    	},300);
    	
	},
	componentWillUnmount: function() {
		ChatStore.unlisten(this.onChange);
		socket.disconnect();
	},
	onChange:function(state){
		this.setState(state);
	},
	componentDidUpdate:function(){
		var d = this.refs.room.getDOMNode();
		d.scrollTop = d.scrollHeight;
		// $(this.refs.text.getDOMNode()).empty();
		$(this.refs.text.getDOMNode()).val("");
	},
	render: function() {
		var users = this.state.users.map(function(item){
			return (
				<li>{ item }</li>
			)
		});
		var messages = this.state.message.map(function(item){
			return (
				<div className="chat-room-item">
					<span className={ UserStore.getState().username == item.name ? "pull-right" : "pull-left"}>
						<span className="msg">{item.msg}</span>
						<Glyphicon glyph="user" className="logo"/>
					</span>
				</div>
			)
		});
		return (
			<div className="g-cnt">
				<div className="chat">
					<div className="chat-list">
						<div className="chart-list-title">
							在线用户列表({this.state.users.length})
						</div>
						<ul>
							{users}
						</ul>
					</div>
					<div className="chat-room">
						<div className="chat-room-body" ref="room">
							{messages}
						</div>
						<div className="chat-room-text">
							<textarea ref="text" onKeyDown={this.press}></textarea>
						</div>
						<div className="chat-room-send">
							<Button className="pull-right" onClick={this.send}>发送</Button>
							<span className="pull-right tip">可以按enter发送</span>
						</div>
					</div>
				</div>
			</div>
		);
	},
	send:function(){
		var value = $(this.refs.text.getDOMNode()).val();
		socket.emit("message",value);
	},
	press:function(e){
		if(e.keyCode == 13){
			this.send();
			return false;
		}
	}
});

module.exports = chat;	