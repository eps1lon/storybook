import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/es6.object.define-property";
import "core-js/modules/es6.object.create";
import "core-js/modules/es6.object.set-prototype-of";
import "core-js/modules/es6.function.name";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.array.map";
import "core-js/modules/es6.array.is-array";

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
var styles = {
  label: {
    fontSize: 11,
    padding: '5px'
  },
  group: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center'
  }
};

var RadiosType =
/*#__PURE__*/
function (_Component) {
  _inherits(RadiosType, _Component);

  function RadiosType() {
    _classCallCheck(this, RadiosType);

    return _possibleConstructorReturn(this, _getPrototypeOf(RadiosType).apply(this, arguments));
  }

  _createClass(RadiosType, [{
    key: "renderRadioButtonList",
    value: function renderRadioButtonList(_ref) {
      var _this = this;

      var options = _ref.options;

      if (Array.isArray(options)) {
        return options.map(function (val) {
          return _this.renderRadioButton(val, val);
        });
      }

      return Object.keys(options).map(function (key) {
        return _this.renderRadioButton(key, options[key]);
      });
    }
  }, {
    key: "renderRadioButton",
    value: function renderRadioButton(label, value) {
      var opts = {
        label: label,
        value: value
      };
      var _this$props = this.props,
          _onChange = _this$props.onChange,
          knob = _this$props.knob;
      var name = knob.name;
      var id = "".concat(name, "-").concat(opts.value);
      return React.createElement("div", {
        key: id
      }, React.createElement("input", {
        type: "radio",
        id: id,
        name: name,
        value: opts.value,
        onChange: function onChange(e) {
          return _onChange(e.target.value);
        },
        checked: value === knob.value
      }), React.createElement("label", {
        style: styles.label,
        htmlFor: id
      }, label));
    }
  }, {
    key: "render",
    value: function render() {
      var knob = this.props.knob;
      return React.createElement("div", {
        style: styles.group
      }, this.renderRadioButtonList(knob));
    }
  }]);

  return RadiosType;
}(Component);

RadiosType.defaultProps = {
  knob: {},
  onChange: function onChange(value) {
    return value;
  }
};
RadiosType.propTypes = {
  knob: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    options: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
  }),
  onChange: PropTypes.func
};

RadiosType.serialize = function (value) {
  return value;
};

RadiosType.deserialize = function (value) {
  return value;
};

export default RadiosType;