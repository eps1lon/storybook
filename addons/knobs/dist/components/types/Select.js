import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/es6.object.define-property";
import "core-js/modules/es7.object.entries";
import "core-js/modules/es6.array.map";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.array.find";
import "core-js/modules/es6.object.assign";
import "core-js/modules/es6.array.reduce";
import "core-js/modules/es6.array.is-array";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import { Select } from '@storybook/components';

var SelectType = function SelectType(_ref) {
  var knob = _ref.knob,
      _onChange = _ref.onChange;
  var options = knob.options;
  var entries = Array.isArray(options) ? options.reduce(function (acc, k) {
    return Object.assign(acc, _defineProperty({}, k, k));
  }, {}) : options;
  var selectedKey = Object.keys(entries).find(function (k) {
    return entries[k] === knob.value;
  });
  return React.createElement(Select, {
    value: selectedKey,
    onChange: function onChange(e) {
      _onChange(entries[e.target.value]);
    },
    size: "flex"
  }, Object.entries(entries).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 1),
        key = _ref3[0];

    return React.createElement("option", {
      key: key,
      value: key
    }, key);
  }));
};

SelectType.defaultProps = {
  knob: {},
  onChange: function onChange(value) {
    return value;
  }
};
SelectType.propTypes = {
  knob: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.any,
    options: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
  }),
  onChange: PropTypes.func
};

SelectType.serialize = function (value) {
  return value;
};

SelectType.deserialize = function (value) {
  return value;
};

export default SelectType;