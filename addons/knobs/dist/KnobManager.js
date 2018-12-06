import "core-js/modules/es6.array.for-each";
import "core-js/modules/es6.array.filter";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/es6.object.define-property";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es7.object.entries";
import "core-js/modules/es6.array.reduce";
import "core-js/modules/es6.array.some";
import "core-js/modules/es6.array.map";
import "core-js/modules/es6.array.is-array";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint no-underscore-dangle: 0 */
import deepEqual from 'fast-deep-equal';
import escape from 'escape-html';
import KnobStore from './KnobStore'; // This is used by _mayCallChannel to determine how long to wait to before triggering a panel update

var PANEL_UPDATE_INTERVAL = 400;

var escapeStrings = function escapeStrings(obj) {
  if (typeof obj === 'string') {
    return escape(obj);
  }

  if (obj == null || _typeof(obj) !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    var newArray = obj.map(escapeStrings);
    var didChange = newArray.some(function (newValue, key) {
      return newValue !== obj[key];
    });
    return didChange ? newArray : obj;
  }

  return Object.entries(obj).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        oldValue = _ref2[1];

    var newValue = escapeStrings(oldValue);
    return newValue === oldValue ? acc : _objectSpread({}, acc, _defineProperty({}, key, newValue));
  }, obj);
};

var KnobManager =
/*#__PURE__*/
function () {
  function KnobManager() {
    _classCallCheck(this, KnobManager);

    this.knobStore = new KnobStore();
    this.options = {};
  }

  _createClass(KnobManager, [{
    key: "setChannel",
    value: function setChannel(channel) {
      this.channel = channel;
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      this.options = options;
    }
  }, {
    key: "getKnobValue",
    value: function getKnobValue(_ref3) {
      var value = _ref3.value;
      return this.options.escapeHTML ? escapeStrings(value) : value;
    }
  }, {
    key: "knob",
    value: function knob(name, options) {
      this._mayCallChannel();

      var knobStore = this.knobStore;
      var existingKnob = knobStore.get(name); // We need to return the value set by the knob editor via this.
      // But, if the user changes the code for the defaultValue we should set
      // that value instead.

      if (existingKnob && deepEqual(options.value, existingKnob.defaultValue)) {
        return this.getKnobValue(existingKnob);
      }

      var defaultValue = options.value;

      var knobInfo = _objectSpread({}, options, {
        name: name,
        defaultValue: defaultValue
      });

      knobStore.set(name, knobInfo);
      return this.getKnobValue(knobStore.get(name));
    }
  }, {
    key: "_mayCallChannel",
    value: function _mayCallChannel() {
      var _this = this;

      // Re rendering of the story may cause changes to the knobStore. Some new knobs maybe added and
      // Some knobs may go unused. So we need to update the panel accordingly. For example remove the
      // unused knobs from the panel. This function sends the `setKnobs` message to the channel
      // triggering a panel re-render.
      if (this.calling) {
        // If a call to channel has already registered ignore this call.
        // Once the previous call is completed all the changes to knobStore including the one that
        // triggered this, will be added to the panel.
        // This avoids emitting to the channel within very short periods of time.
        return;
      }

      this.calling = true;
      var timestamp = +new Date();
      setTimeout(function () {
        _this.calling = false; // emit to the channel and trigger a panel re-render

        _this.channel.emit('addon:knobs:setKnobs', {
          knobs: _this.knobStore.getAll(),
          timestamp: timestamp
        });
      }, PANEL_UPDATE_INTERVAL);
    }
  }]);

  return KnobManager;
}();

export { KnobManager as default };