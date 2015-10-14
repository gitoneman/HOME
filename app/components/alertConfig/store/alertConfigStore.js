var AppDispatcher = require('../../../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../../../constants/Constants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';


var alertConfigStore = assign({}, EventEmitter.prototype, {
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
        alertConfigStore.emitChange();
      }
      break;

    default:

  }
});

module.exports = alertConfigStore;
