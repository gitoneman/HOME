var alt = require('../alt');
var UserActions = require('../actions/UserActions');

class UserStore {
  	constructor() {
    	this.bindActions(UserActions);
    	this.username = "";
  	}

  	onGetUserSuccess(data) {
    	this.username = data;
  	}
}

module.exports = alt.createStore(UserStore);