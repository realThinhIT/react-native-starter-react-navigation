import { YellowBox } from 'react-native';
import _ from 'lodash';

export const disableYellowBox = () => {
  // Disable 'Setting a timer' warning
  YellowBox.ignoreWarnings([
    'Setting a timer',
    'WebRTC',
    'RCT',
    'VirtualizedList',
    'uri',
    'image file',
    'The scalesPageToFit',
    'Attempted to invoke'
  ]);
  const _console = _.clone(console);
  console.warn = message => {
    if (
      message.indexOf('Setting a timer') <= -1
        || message.indexOf('WebRTC') <= -1
        || message.indexOf('RCT') <= -1
        || message.indexOf('VirtualizedList') <= -1
        || message.indexOf('uri') <= -1
        || message.indexOf('image file') <= -1
        || message.indexOf('The scalesPageToFit') <= -1
    ) {
      _console.warn(message);
    }
  };
};