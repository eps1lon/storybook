import "core-js/modules/es6.function.name";
import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
var Input =
/*#__PURE__*/
styled("input", {
  target: "e14li1qr0"
})({
  display: 'table-cell',
  boxSizing: 'border-box',
  verticalAlign: 'top',
  height: 21,
  outline: 'none',
  border: '1px solid #ececec',
  fontSize: '12px',
  color: '#555'
});

var BooleanType = function BooleanType(_ref) {
  var knob = _ref.knob,
      _onChange = _ref.onChange;
  return React.createElement(Input, {
    id: knob.name,
    type: "checkbox",
    onChange: function onChange(e) {
      return _onChange(e.target.checked);
    },
    checked: knob.value
  });
};

BooleanType.defaultProps = {
  knob: {},
  onChange: function onChange(value) {
    return value;
  }
};
BooleanType.propTypes = {
  knob: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.bool
  }),
  onChange: PropTypes.func
};

BooleanType.serialize = function (value) {
  return value ? String(value) : null;
};

BooleanType.deserialize = function (value) {
  return value === 'true';
};

export default BooleanType;