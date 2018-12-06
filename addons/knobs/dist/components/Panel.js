import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/es6.array.is-array";
import "core-js/modules/es6.object.define-property";
import "core-js/modules/es6.object.create";
import "core-js/modules/es6.object.set-prototype-of";
import "core-js/modules/es6.array.map";
import "core-js/modules/es6.array.filter";
import "core-js/modules/es7.object.entries";
import "core-js/modules/es6.regexp.search";
import "core-js/modules/es6.regexp.replace";
import "core-js/modules/es6.function.name";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.for-each";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import { document } from 'global';
import styled from '@emotion/styled';
import copy from 'copy-to-clipboard';
import { Placeholder, TabWrapper, TabsState, ActionBar, ActionButton } from '@storybook/components';
import Types from './types';
import PropForm from './PropForm';

var getTimestamp = function getTimestamp() {
  return +new Date();
};

var DEFAULT_GROUP_ID = 'ALL';
var PanelWrapper =
/*#__PURE__*/
styled("div", {
  target: "e1hohnps0"
})({
  height: '100%',
  overflow: 'auto',
  width: '100%'
});

var Panel =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Panel, _PureComponent);

  function Panel(props) {
    var _this;

    _classCallCheck(this, Panel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Panel).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setOptions", function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        timestamps: false
      };
      _this.options = options;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setKnobs", function (_ref) {
      var knobs = _ref.knobs,
          timestamp = _ref.timestamp;
      var queryParams = {};
      var _this$props = _this.props,
          api = _this$props.api,
          channel = _this$props.channel;

      if (!_this.options.timestamps || !timestamp || _this.lastEdit <= timestamp) {
        Object.keys(knobs).forEach(function (name) {
          var knob = knobs[name]; // For the first time, get values from the URL and set them.

          if (!_this.loadedFromUrl) {
            var urlValue = api.getQueryParam("knob-".concat(name));

            if (urlValue !== undefined) {
              // If the knob value present in url
              knob.value = Types[knob.type].deserialize(urlValue);
              channel.emit('addon:knobs:knobChange', knob);
            }
          } // set all knobsquery params to be deleted from URL


          queryParams["knob-".concat(name)] = null;
        });
        api.setQueryParams(queryParams);

        _this.setState({
          knobs: knobs
        });

        _this.loadedFromUrl = true;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "reset", function () {
      var channel = _this.props.channel;
      channel.emit('addon:knobs:reset');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "copy", function () {
      var location = document.location;
      var query = qs.parse(location.search.replace('?', ''));
      var knobs = _this.state.knobs;
      Object.entries(knobs).forEach(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            name = _ref3[0],
            knob = _ref3[1];

        query["knob-".concat(name)] = Types[knob.type].serialize(knob.value);
      });
      copy("".concat(location.origin + location.pathname, "?").concat(qs.stringify(query))); // TODO: show some notification of this
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "emitChange", function (changedKnob) {
      var channel = _this.props.channel;
      channel.emit('addon:knobs:knobChange', changedKnob);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (changedKnob) {
      _this.lastEdit = getTimestamp();
      var knobs = _this.state.knobs;
      var name = changedKnob.name;

      var newKnobs = _objectSpread({}, knobs);

      newKnobs[name] = _objectSpread({}, newKnobs[name], changedKnob);

      _this.setState({
        knobs: newKnobs
      }, _this.emitChange(changedKnob));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (knob) {
      var channel = _this.props.channel;
      channel.emit('addon:knobs:knobClick', knob);
    });

    _this.state = {
      knobs: {}
    };
    _this.options = {};
    _this.lastEdit = getTimestamp();
    _this.loadedFromUrl = false;
    return _this;
  }

  _createClass(Panel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props2 = this.props,
          channel = _this$props2.channel,
          api = _this$props2.api;
      channel.on('addon:knobs:setKnobs', this.setKnobs);
      channel.on('addon:knobs:setOptions', this.setOptions);
      this.stopListeningOnStory = api.onStory(function () {
        _this2.setState({
          knobs: {}
        });

        channel.emit('addon:knobs:reset');
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var channel = this.props.channel;
      channel.removeListener('addon:knobs:setKnobs', this.setKnobs);
      this.stopListeningOnStory();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var knobs = this.state.knobs;
      var active = this.props.active;

      if (!active) {
        return null;
      }

      var groups = {};
      var groupIds = [];
      var knobsArray = Object.keys(knobs).filter(function (key) {
        return knobs[key].used;
      });
      knobsArray.filter(function (key) {
        return knobs[key].groupId;
      }).forEach(function (key) {
        var knobKeyGroupId = knobs[key].groupId;
        groupIds.push(knobKeyGroupId);
        groups[knobKeyGroupId] = {
          render: function render(_ref4) {
            var groupActive = _ref4.active,
                selected = _ref4.selected;
            return React.createElement(TabWrapper, {
              active: groupActive || selected === DEFAULT_GROUP_ID
            }, React.createElement(PropForm, {
              knobs: knobsArray.filter(function (knob) {
                return knob.groupId === knobKeyGroupId;
              }),
              onFieldChange: _this3.handleChange,
              onFieldClick: _this3.handleClick
            }));
          },
          title: knobKeyGroupId
        };
      });
      groups[DEFAULT_GROUP_ID] = {
        render: function render() {
          return null;
        },
        title: DEFAULT_GROUP_ID
      };
      knobsArray = knobsArray.map(function (key) {
        return knobs[key];
      });

      if (knobsArray.length === 0) {
        return React.createElement(Placeholder, null, "NO KNOBS");
      }

      return React.createElement(PanelWrapper, null, groupIds.length > 0 ? React.createElement(TabsState, null, Object.entries(groups).map(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            k = _ref6[0],
            v = _ref6[1];

        return React.createElement("div", {
          id: k,
          title: v.title
        }, v.render);
      })) : React.createElement(PropForm, {
        knobs: knobsArray,
        onFieldChange: this.handleChange,
        onFieldClick: this.handleClick
      }), React.createElement(ActionBar, null, React.createElement(ActionButton, {
        onClick: this.copy
      }, "COPY"), React.createElement(ActionButton, {
        onClick: this.reset
      }, "RESET")));
    }
  }]);

  return Panel;
}(PureComponent);

export { Panel as default };
Panel.propTypes = {
  active: PropTypes.bool.isRequired,
  onReset: PropTypes.object,
  // eslint-disable-line
  channel: PropTypes.shape({
    emit: PropTypes.func,
    on: PropTypes.func,
    removeListener: PropTypes.func
  }).isRequired,
  api: PropTypes.shape({
    onStory: PropTypes.func,
    getQueryParam: PropTypes.func,
    setQueryParams: PropTypes.func
  }).isRequired
};