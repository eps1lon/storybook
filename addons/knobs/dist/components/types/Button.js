import "core-js/modules/es6.function.name";
import PropTypes from 'prop-types';
import React from 'react';
import { Button } from '@storybook/components';

var ButtonType = function ButtonType(_ref) {
  var knob = _ref.knob,
      _onClick = _ref.onClick;
  return React.createElement(Button, {
    type: "button",
    onClick: function onClick() {
      return _onClick(knob);
    }
  }, knob.name);
};

ButtonType.propTypes = {
  knob: PropTypes.shape({
    name: PropTypes.string
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

ButtonType.serialize = function () {
  return undefined;
};

ButtonType.deserialize = function () {
  return undefined;
};

export default ButtonType;