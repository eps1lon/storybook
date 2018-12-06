import "core-js/modules/es6.array.from";
import "core-js/modules/es6.array.map";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.string.iterator";
import "core-js/modules/es6.promise";
import { FileReader } from 'global';
import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import { Input } from '@storybook/components';
var FileInput =
/*#__PURE__*/
styled(Input, {
  target: "e1npm7sq0"
})({
  paddingTop: 4
});

function fileReaderPromise(file) {
  return new Promise(function (resolve) {
    var fileReader = new FileReader();

    fileReader.onload = function (e) {
      return resolve(e.currentTarget.result);
    };

    fileReader.readAsDataURL(file);
  });
}

var FilesType = function FilesType(_ref) {
  var knob = _ref.knob,
      _onChange = _ref.onChange;
  return React.createElement(FileInput, {
    type: "file",
    multiple: true,
    onChange: function onChange(e) {
      return Promise.all(Array.from(e.target.files).map(fileReaderPromise)).then(_onChange);
    },
    accept: knob.accept,
    size: "flex"
  });
};

FilesType.defaultProps = {
  knob: {},
  onChange: function onChange(value) {
    return value;
  }
};
FilesType.propTypes = {
  knob: PropTypes.shape({
    name: PropTypes.string
  }),
  onChange: PropTypes.func
};

FilesType.serialize = function () {
  return undefined;
};

FilesType.deserialize = function () {
  return undefined;
};

export default FilesType;