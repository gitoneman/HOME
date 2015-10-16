var alt = require('../alt');

class ChatActions{
    constructor() {
      	this.generateActions(
          	'getUsersSuccess',
          	'getMsgSuccess',
          	'getFail'
      	);
    }
    getUsers(data){
    	this.actions.getUsersSuccess(data);
    }
    getMsg(data){
    	this.actions.getMsgSuccess(data);
    }
}

module.exports = alt.createActions(ChatActions);