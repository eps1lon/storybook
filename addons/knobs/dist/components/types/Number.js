import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/es6.object.define-property";
import "core-js/modules/es6.object.create";
import "core-js/modules/es6.object.set-prototype-of";
import "core-js/modules/es6.number.is-nan";
import "core-js/modules/es6.number.constructor";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import { Input } from '@storybook/components';
var base = {
  boxSizing: 'border-box',
  height: '25px',
  outline: 'none',
  border: '1px solid #f7f4f4',
  borderRadius: 2,
  fontSize: 11,
  padding: '5px',
  color: '#444'
};
var RangeInput =
/*#__PURE__*/
styled("input", {
  target: "ei4p2al0"
})(base, {
  display: 'table-cell',
  flexGrow: 1
});
var RangeLabel =
/*#__PURE__*/
styled("span", {
  target: "ei4p2al1"
})({
  paddingLeft: 5,
  paddingRight: 5,
  fontSize: 12,
  whiteSpace: 'nowrap'
});
var RangeWrapper =
/*#__PURE__*/
styled("div", {
  target: "ei4p2al2"
})({
  display: 'flex',
  alignItems: 'center',
  width: '100%'
});

var NumberType =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NumberType, _React$Component);

  function NumberType() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NumberType);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NumberType)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (event) {
      var onChange = _this.props.onChange;
      var value = event.target.value;
      var parsedValue = Number(value);

      if (Number.isNaN(parsedValue) || value === '') {
        parsedValue = null;
      }

      onChange(parsedValue);
    });

    return _this;
  }

  _createClass(NumberType, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var knob = this.props.knob;
      return nextProps.knob.value !== knob.value;
    }
  }, {
    key: "render",
    value: function render() {
      var knob = this.props.knob;
      return knob.range ? React.createElement(RangeWrapper, null, React.createElement(RangeLabel, null, knob.min), React.createElement(RangeInput, {
        value: knob.value,
        type: "range",
        min: knob.min,
        max: knob.max,
        step: knob.step,
        onChange: this.handleChange
      }), React.createElement(RangeLabel, null, "".concat(knob.value, " / ").concat(knob.max))) : React.createElement(Input, {
        value: knob.value,
        type: "number",
        min: knob.min,
        max: knob.max,
        step: knob.step,
        onChange: this.handleChange,
        size: "flex"
      });
    }
  }]);

  return NumberType;
}(React.Component);

NumberType.propTypes = {
  knob: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    range: PropTypes.bool,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number
  }).isRequired,
  onChange: PropTypes.func.isRequired
};

NumberType.serialize = function (value) {
  return value === null || value === undefined ? '' : String(value);
};

NumberType.deserialize = function (value) {
  return value === '' ? null : parseFloat(value);
};

export default NumberType;