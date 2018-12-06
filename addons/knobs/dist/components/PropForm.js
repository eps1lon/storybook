import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/es6.object.define-property";
import "core-js/modules/es6.object.create";
import "core-js/modules/es6.object.set-prototype-of";
import "core-js/modules/es6.function.name";
import "core-js/modules/es6.array.map";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Field } from '@storybook/components';
import TypeMap from './types';
var Form =
/*#__PURE__*/
styled("form", {
  target: "e9jwy170"
})({
  boxSizing: 'border-box',
  width: '100%'
});

var InvalidType = function InvalidType() {
  return React.createElement("span", null, "Invalid Type");
};

var PropForm =
/*#__PURE__*/
function (_Component) {
  _inherits(PropForm, _Component);

  function PropForm() {
    _classCallCheck(this, PropForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(PropForm).apply(this, arguments));
  }

  _createClass(PropForm, [{
    key: "makeChangeHandler",
    value: function makeChangeHandler(name, type) {
      var onFieldChange = this.props.onFieldChange;
      return function (value) {
        var change = {
          name: name,
          type: type,
          value: value
        };
        onFieldChange(change);
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          knobs = _this$props.knobs,
          onFieldClick = _this$props.onFieldClick;
      return React.createElement(Form, null, knobs.map(function (knob) {
        var changeHandler = _this.makeChangeHandler(knob.name, knob.type);

        var InputType = TypeMap[knob.type] || InvalidType;
        return React.createElement(Field, {
          key: knob.name,
          label: !knob.hideLabel && "".concat(knob.name)
        }, React.createElement(InputType, {
          knob: knob,
          onChange: changeHandler,
          onClick: onFieldClick
        }));
      }));
    }
  }]);

  return PropForm;
}(Component);

export { PropForm as default };
PropForm.displayName = 'PropForm';
PropForm.propTypes = {
  knobs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.any
  })).isRequired,
  onFieldChange: PropTypes.func.isRequired,
  onFieldClick: PropTypes.func.isRequired
};