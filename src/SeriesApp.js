import React from 'react';
import Router from './Router';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers/_index';

const store = createStore(rootReducer);

const SeriesApp = props => (
  <Provider store={store}>
    <Router/>
  </Provider>
);

export default SeriesApp;