import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/es6.object.define-property";
import "core-js/modules/es6.object.create";
import "core-js/modules/es6.object.set-prototype-of";
import "core-js/modules/es6.string.trim";

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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import deepEqual from 'fast-deep-equal';
import { polyfill } from 'react-lifecycles-compat';
import { Textarea } from '@storybook/components';

var ObjectType =
/*#__PURE__*/
function (_Component) {
  _inherits(ObjectType, _Component);

  function ObjectType() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ObjectType);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ObjectType)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var value = e.target.value;
      var stateJson = _this.state.json;
      var _this$props = _this.props,
          knob = _this$props.knob,
          onChange = _this$props.onChange;

      try {
        var json = JSON.parse(value.trim());

        _this.setState({
          value: value,
          json: json,
          failed: false
        });

        if (deepEqual(knob.value, stateJson)) {
          onChange(json);
        }
      } catch (err) {
        _this.setState({
          value: value,
          failed: true
        });
      }
    });

    return _this;
  }

  _createClass(ObjectType, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          value = _this$state.value,
          failed = _this$state.failed;
      return React.createElement(Textarea, {
        valid: failed ? 'error' : null,
        value: value,
        onChange: this.handleChange,
        size: "flex"
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (!state || !deepEqual(props.knob.value, state.json)) {
        try {
          return {
            value: JSON.stringify(props.knob.value, null, 2),
            failed: false,
            json: props.knob.value
          };
        } catch (e) {
          return {
            value: 'Object cannot be stringified',
            failed: true
          };
        }
      }

      return null;
    }
  }]);

  return ObjectType;
}(Component);

ObjectType.propTypes = {
  knob: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
  }).isRequired,
  onChange: PropTypes.func.isRequired
};

ObjectType.serialize = function (object) {
  return JSON.stringify(object);
};

ObjectType.deserialize = function (value) {
  return value ? JSON.parse(value) : {};
};

polyfill(ObjectType);
export default ObjectType;