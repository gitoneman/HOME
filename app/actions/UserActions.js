var alt = require('../alt');

class UserActons{
    constructor() {
      this.generateActions(
          'getUserSuccess'
      );
    }
    getUser() {
    	$.ajax({ type:'get',url: '/userinfo' })
  		.done(data => {
        	this.actions.getUserSuccess(data);
      	})
    }
}

module.exports = alt.createActions(UserActons);