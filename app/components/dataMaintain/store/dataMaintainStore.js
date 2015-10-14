var AppDispatcher = require('../../../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../../../constants/Constants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var chartData = {
	"0":{
		category:['进出口押款','贴现','垫款','逾期贷款','中长期抵押质押贷款','中长期保证贷款','中长期信用贷款','短期抵押质押贷款','短期信用贷款','个人消费贷款'],
		series:[
			{
				name:"B",
				data:[100.6, 70.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8]
			},
		]
	},
	"1":{
		category:['进出口押款','贴现','垫款','逾期贷款','中长期抵押质押贷款','中长期保证贷款','中长期信用贷款','短期抵押质押贷款','短期信用贷款','个人消费贷款'],
		series:[
			{
				name:"A",
				data:[75.0, 50.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0]
			}
		]
	}
}


var systemStore = assign({}, EventEmitter.prototype, {
	emitChange: function() {
	    this.emit(CHANGE_EVENT);
  	},
  	addChangeListener: function(callback) {
	    this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback) {
	    this.removeListener(CHANGE_EVENT, callback);
	},
	getChartData:function(){
		return chartData;
	}
})

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
    case Constants.CHART_UPDATE:
      text = action.text.trim();
      if (text !== '') {
        create(text);
        systemStore.emitChange();
      }
      break;

    default:

  }
});

module.exports = systemStore;
