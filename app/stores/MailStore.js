var alt = require('../alt');
var MailActions = require('../actions/MailActions');

class MailStore {
  	constructor() {
    	this.bindActions(MailActions);
        this.value = {
            to: "lumiab@yeah.net",
            subject: "测试邮件",
            text: "这是一个测试邮件，请勿回复。"
        }
        this.sending = false;
    	//write state
  	}
    onSendMailSuccess(formData) {
        this.sending = false;
    }
    onSendingMail(formData){
        this.sending = true;
        this.value = formData;
    }
  	onGetSuccess(data) {
    	this.movies = data;
  	}

  	onGetFail(errorMessage) {
    	toastr.error(errorMessage);
  	}
}

module.exports = alt.createStore(MailStore);