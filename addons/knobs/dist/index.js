import "core-js/modules/es6.array.for-each";
import "core-js/modules/es6.array.filter";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.object.define-property";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import deprecate from 'util-deprecate';
import addons, { makeDecorator } from '@storybook/addons';
import { manager, registerKnobs } from './registerKnobs';
export function knob(name, options) {
  return manager.knob(name, options);
}
export function text(name, value, groupId) {
  return manager.knob(name, {
    type: 'text',
    value: value,
    groupId: groupId
  });
}
export function boolean(name, value, groupId) {
  return manager.knob(name, {
    type: 'boolean',
    value: value,
    groupId: groupId
  });
}
export function number(name, value) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var groupId = arguments.length > 3 ? arguments[3] : undefined;
  var rangeDefaults = {
    min: 0,
    max: 10,
    step: 1
  };
  var mergedOptions = options.range ? _objectSpread({}, rangeDefaults, options) : options;

  var finalOptions = _objectSpread({}, mergedOptions, {
    type: 'number',
    value: value,
    groupId: groupId
  });

  return manager.knob(name, finalOptions);
}
export function color(name, value, groupId) {
  return manager.knob(name, {
    type: 'color',
    value: value,
    groupId: groupId
  });
}
export function object(name, value, groupId) {
  return manager.knob(name, {
    type: 'object',
    value: value,
    groupId: groupId
  });
}
export function select(name, options, value, groupId) {
  return manager.knob(name, {
    type: 'select',
    selectV2: true,
    options: options,
    value: value,
    groupId: groupId
  });
}
export function radios(name, options, value, groupId) {
  return manager.knob(name, {
    type: 'radios',
    options: options,
    value: value,
    groupId: groupId
  });
}
export function array(name, value) {
  var separator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ',';
  var groupId = arguments.length > 3 ? arguments[3] : undefined;
  return manager.knob(name, {
    type: 'array',
    value: value,
    separator: separator,
    groupId: groupId
  });
}
export function date(name) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var groupId = arguments.length > 2 ? arguments[2] : undefined;
  var proxyValue = value ? value.getTime() : null;
  return manager.knob(name, {
    type: 'date',
    value: proxyValue,
    groupId: groupId
  });
}
export function button(name, callback, groupId) {
  return manager.knob(name, {
    type: 'button',
    callback: callback,
    hideLabel: true,
    groupId: groupId
  });
}
export function files(name, accept) {
  var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return manager.knob(name, {
    type: 'files',
    accept: accept,
    value: value
  });
}
var defaultOptions = {
  escapeHTML: true
};
export var withKnobs = makeDecorator({
  name: 'withKnobs',
  parameterName: 'knobs',
  skipIfNoParametersOrOptions: false,
  allowDeprecatedUsage: true,
  wrapper: function wrapper(getStory, context, _ref) {
    var options = _ref.options,
        parameters = _ref.parameters;
    var storyOptions = parameters || options;

    var allOptions = _objectSpread({}, defaultOptions, storyOptions);

    manager.setOptions(allOptions);
    var channel = addons.getChannel();
    manager.setChannel(channel);
    channel.emit('addon:knobs:setOptions', allOptions);
    registerKnobs();
    return getStory(context);
  }
});
export var withKnobsOptions = deprecate(withKnobs, 'withKnobsOptions is deprecated. Instead, you can pass options into withKnobs(options) directly, or use the knobs parameter.');