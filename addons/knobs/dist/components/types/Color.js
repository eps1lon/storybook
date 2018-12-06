import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/es6.object.define-property";
import "core-js/modules/es6.object.create";
import "core-js/modules/es6.object.set-prototype-of";

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

import { document } from 'global';
import PropTypes from 'prop-types';
import React from 'react';
import { SketchPicker } from 'react-color';
import styled from '@emotion/styled';
import { Button } from '@storybook/components';
var Swatch =
/*#__PURE__*/
styled("div", {
  target: "e1wf6gpk0"
})({
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 3,
  width: 28
});
var Popover =
/*#__PURE__*/
styled("div", {
  target: "e1wf6gpk1"
})({
  position: 'absolute',
  zIndex: '2'
});

var ColorType =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ColorType, _React$Component);

  function ColorType() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ColorType);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ColorType)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      displayColorPicker: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleWindowMouseDown", function (e) {
      var displayColorPicker = _this.state.displayColorPicker;

      if (!displayColorPicker || _this.popover.contains(e.target)) {
        return;
      }

      _this.setState({
        displayColorPicker: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function () {
      var displayColorPicker = _this.state.displayColorPicker;

      _this.setState({
        displayColorPicker: !displayColorPicker
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (color) {
      var onChange = _this.props.onChange;
      onChange("rgba(".concat(color.rgb.r, ",").concat(color.rgb.g, ",").concat(color.rgb.b, ",").concat(color.rgb.a, ")"));
    });

    return _this;
  }

  _createClass(ColorType, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.handleWindowMouseDown);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var knob = this.props.knob;
      var displayColorPicker = this.state.displayColorPicker;
      return nextProps.knob.value !== knob.value || nextState.displayColorPicker !== displayColorPicker;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleWindowMouseDown);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var knob = this.props.knob;
      var displayColorPicker = this.state.displayColorPicker;
      var colorStyle = {
        background: knob.value
      };
      return React.createElement(Button, {
        type: "button",
        onClick: this.handleClick,
        size: "flex"
      }, knob.value, React.createElement(Swatch, {
        style: colorStyle
      }), displayColorPicker ? React.createElement(Popover, {
        innerRef: function innerRef(e) {
          _this2.popover = e;
        }
      }, React.createElement(SketchPicker, {
        color: knob.value,
        onChange: this.handleChange
      })) : null);
    }
  }]);

  return ColorType;
}(React.Component);

ColorType.propTypes = {
  knob: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  }),
  onChange: PropTypes.func
};
ColorType.defaultProps = {
  knob: {},
  onChange: function onChange(value) {
    return value;
  }
};

ColorType.serialize = function (value) {
  return value;
};

ColorType.deserialize = function (value) {
  return value;
};

export default ColorType;