/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { createStore, applyMiddleware } from 'redux';
import { Provider as StoreProvider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './src/store/reducers';
import AppContainer from './src/navigation/navigation';

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

const App = () => (
  <StoreProvider store={store}>
    <PaperProvider>
      <AppContainer />
    </PaperProvider>
  </StoreProvider>
);

export default App;
