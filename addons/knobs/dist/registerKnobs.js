import "core-js/modules/es6.function.name";
import addons from '@storybook/addons';
import Events from '@storybook/core-events';
import KnobManager from './KnobManager';
export var manager = new KnobManager();
var knobStore = manager.knobStore;

function forceReRender() {
  addons.getChannel().emit(Events.FORCE_RE_RENDER);
}

function setPaneKnobs() {
  var timestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : +new Date();
  var channel = addons.getChannel();
  channel.emit('addon:knobs:setKnobs', {
    knobs: knobStore.getAll(),
    timestamp: timestamp
  });
}

function knobChanged(change) {
  var name = change.name,
      value = change.value; // Update the related knob and it's value.

  var knobOptions = knobStore.get(name);
  knobOptions.value = value;
  knobStore.markAllUnused();
  forceReRender();
}

function knobClicked(clicked) {
  var knobOptions = knobStore.get(clicked.name);
  knobOptions.callback();
  forceReRender();
}

function resetKnobs() {
  knobStore.reset();
  forceReRender();
  setPaneKnobs(false);
}

function disconnectCallbacks() {
  var channel = addons.getChannel();
  channel.removeListener('addon:knobs:knobChange', knobChanged);
  channel.removeListener('addon:knobs:knobClick', knobClicked);
  channel.removeListener('addon:knobs:reset', resetKnobs);
  knobStore.unsubscribe(setPaneKnobs);
}

function connectCallbacks() {
  var channel = addons.getChannel();
  channel.on('addon:knobs:knobChange', knobChanged);
  channel.on('addon:knobs:knobClick', knobClicked);
  channel.on('addon:knobs:reset', resetKnobs);
  knobStore.subscribe(setPaneKnobs);
  return disconnectCallbacks;
}

export function registerKnobs() {
  addons.getChannel().emit(Events.REGISTER_SUBSCRIPTION, connectCallbacks);
}