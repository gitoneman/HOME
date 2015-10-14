'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _rule = require('../rule/');

var _rule2 = _interopRequireDefault(_rule);

var _util = require('../util');

var _util2 = _interopRequireDefault(_util);

/**
 *  Validates an array.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (_util2['default'].isEmptyValue(value, 'array') && !rule.required) {
      return callback();
    }
    _rule2['default'].required(rule, value, source, errors, options, 'array');
    if (!_util2['default'].isEmptyValue(value, 'array')) {
      _rule2['default'].type(rule, value, source, errors, options);
      _rule2['default'].range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports['default'] = array;
module.exports = exports['default'];