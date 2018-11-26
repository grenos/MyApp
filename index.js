/** @format */
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import AppContainer from './App';
import configureStore from './src/store/reduxStore';
import { name as appName } from './app.json';

const store = configureStore();

const appWrapper = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => appWrapper);
