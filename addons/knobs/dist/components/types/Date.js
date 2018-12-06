import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.is-array";
import "core-js/modules/es6.object.define-property";
import "core-js/modules/es6.object.create";
import "core-js/modules/es6.object.set-prototype-of";
import "core-js/modules/es6.function.name";
import "core-js/modules/es6.regexp.split";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Input } from '@storybook/components';
var FlexSpaced =
/*#__PURE__*/
styled("div", {
  target: "e1q0vczo0"
})({
  flex: 1,
  display: 'flex',
  '& > *': {
    marginLeft: 10
  },
  '& > *:first-child': {
    marginLeft: 0
  }
});
var FlexInput =
/*#__PURE__*/
styled(Input, {
  target: "e1q0vczo1"
})({
  flex: 1
});

var formatDate = function formatDate(date) {
  var year = "000".concat(date.getFullYear()).slice(-4);
  var month = "0".concat(date.getMonth() + 1).slice(-2);
  var day = "0".concat(date.getDate()).slice(-2);
  return "".concat(year, "-").concat(month, "-").concat(day);
};

var formatTime = function formatTime(date) {
  var hours = "0".concat(date.getHours()).slice(-2);
  var minutes = "0".concat(date.getMinutes()).slice(-2);
  return "".concat(hours, ":").concat(minutes);
};

var DateType =
/*#__PURE__*/
function (_Component) {
  _inherits(DateType, _Component);

  function DateType() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DateType);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DateType)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      valid: undefined
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDateChange", function (e) {
      var _this$props = _this.props,
          knob = _this$props.knob,
          onChange = _this$props.onChange;

      var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
          state = _assertThisInitialize.state;

      var valid = false;

      var _e$target$value$split = e.target.value.split('-'),
          _e$target$value$split2 = _slicedToArray(_e$target$value$split, 3),
          year = _e$target$value$split2[0],
          month = _e$target$value$split2[1],
          day = _e$target$value$split2[2];

      var result = new Date(knob.value);

      if (result.getTime()) {
        result.setFullYear(parseInt(year, 10));
        result.setMonth(parseInt(month, 10) - 1);
        result.setDate(parseInt(day, 10));

        if (result.getTime()) {
          valid = true;
          onChange(result.getTime());
        }
      }

      if (valid !== state.valid) {
        _this.setState({
          valid: valid
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTimeChange", function (e) {
      var _this$props2 = _this.props,
          knob = _this$props2.knob,
          onChange = _this$props2.onChange;

      var _assertThisInitialize2 = _assertThisInitialized(_assertThisInitialized(_this)),
          state = _assertThisInitialize2.state;

      var valid = false;

      var _e$target$value$split3 = e.target.value.split(':'),
          _e$target$value$split4 = _slicedToArray(_e$target$value$split3, 2),
          hours = _e$target$value$split4[0],
          minutes = _e$target$value$split4[1];

      var result = new Date(knob.value);

      if (result.getTime()) {
        result.setHours(parseInt(hours, 10));
        result.setMinutes(parseInt(minutes, 10));

        if (result.getTime()) {
          onChange(result.getTime());
          valid = true;
        }
      }

      if (valid !== state.valid) {
        _this.setState({
          valid: valid
        });
      }
    });

    return _this;
  }

  _createClass(DateType, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var knob = this.props.knob;
      var valid = this.state.valid;
      var value = new Date(knob.value);

      if (valid !== false) {
        this.dateInput.value = formatDate(value);
        this.timeInput.value = formatTime(value);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var knob = this.props.knob;
      var name = knob.name;
      var valid = this.state.valid;
      return name ? React.createElement(FlexSpaced, {
        style: {
          display: 'flex'
        }
      }, React.createElement(FlexInput, {
        type: "date",
        max: "9999-12-31" // I do this because of a rendering bug in chrome
        ,
        ref: function ref(el) {
          _this2.dateInput = el;
        },
        id: "".concat(name, "date"),
        onChange: this.onDateChange
      }), React.createElement(FlexInput, {
        type: "time",
        id: "".concat(name, "time"),
        ref: function ref(el) {
          _this2.timeInput = el;
        },
        onChange: this.onTimeChange
      }), !valid ? React.createElement("div", null, "invalid") : null) : null;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps() {
      return {
        valid: true
      };
    }
  }]);

  return DateType;
}(Component);

DateType.defaultProps = {
  knob: {},
  onChange: function onChange(value) {
    return value;
  }
};
DateType.propTypes = {
  knob: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.number
  }),
  onChange: PropTypes.func
};

DateType.serialize = function (value) {
  return new Date(value).getTime() || new Date().getTime();
};

DateType.deserialize = function (value) {
  return new Date(value).getTime() || new Date().getTime();
};

export default DateType;