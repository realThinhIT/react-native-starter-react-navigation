import { disableYellowBox } from './helpers/yellowbox';
import React from 'react';
import { AppRegistry } from 'react-native';
import { MainAppContainer } from './navigation/routes';
import { Provider } from 'react-redux';
import store from './redux/store';

class AppRootComponent extends React.Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    return (
      <Provider store={store}>
        <MainAppContainer />
      </Provider>
    );
  }
}

export class AppRoot {
  constructor() {
    // disable yellow box warnings 
    disableYellowBox();

    // Register root component
    AppRegistry.registerComponent('PayTogether', () => AppRootComponent);
  }
}