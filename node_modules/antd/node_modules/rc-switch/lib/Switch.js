'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var React = require('react');
var rcUtil = require('rc-util');

function noop() {}

var Switch = React.createClass({
  displayName: 'Switch',

  getInitialState: function getInitialState() {
    var props = this.props;
    var checked = false;
    if ('checked' in props) {
      checked = !!props.checked;
    } else {
      checked = !!props.defaultChecked;
    }
    return {
      checked: checked
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'rc-switch',
      style: {},
      checkedChildren: null,
      unCheckedChildren: null,
      className: '',
      defaultChecked: false,
      onChange: noop
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({
        checked: !!nextProps.checked
      });
    }
  },
  render: function render() {
    var _rcUtil$classSet;

    var props = this.props;
    var prefixCls = props.prefixCls;
    return React.createElement(
      'span',
      { className: rcUtil.classSet((_rcUtil$classSet = {}, _defineProperty(_rcUtil$classSet, props.className, !!props.className), _defineProperty(_rcUtil$classSet, prefixCls, 1), _defineProperty(_rcUtil$classSet, prefixCls + '-checked', this.state.checked), _defineProperty(_rcUtil$classSet, prefixCls + '-disabled', props.disabled), _rcUtil$classSet)),
        onClick: props.disabled ? noop : this.toggle,
        style: props.style
      },
      React.createElement(
        'span',
        { className: prefixCls + '-inner' },
        this.state.checked ? props.checkedChildren : props.unCheckedChildren
      )
    );
  },
  toggle: function toggle() {
    var checked = !this.state.checked;
    this.setState({
      checked: checked
    });
    this.props.onChange(checked);
  }
});

module.exports = Switch;