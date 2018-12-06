import React from 'react';
import addons from '@storybook/addons';
import Panel from './components/Panel';
addons.register('storybooks/storybook-addon-knobs', function (api) {
  var channel = addons.getChannel();
  addons.addPanel('storybooks/storybook-addon-knobs', {
    title: 'Knobs',
    // eslint-disable-next-line react/prop-types
    render: function render(_ref) {
      var active = _ref.active;
      return React.createElement(Panel, {
        channel: channel,
        api: api,
        key: "knobs-panel",
        active: active
      });
    }
  });
});