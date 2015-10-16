var alt = require('../alt');
var ChatActions = require('../actions/ChatActions');

class ChatStore {
  	constructor() {
    	this.bindActions(ChatActions);
        this.users = [];
        this.socket = "";
        this.message = [];
    	//write state
  	}

  	onGetUsersSuccess(data) {
    	this.users = data;
  	}
    onGetMsgSuccess(data) {
        this.message.push(data);
    }

  	onFail(errorMessage) {
    	toastr.error(errorMessage);
  	}
}

module.exports = alt.createStore(ChatStore);