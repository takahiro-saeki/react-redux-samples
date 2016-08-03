import React, {Component} from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer/index';
import Main from './container/Main';
import STYLE from '../css/style.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let store = createStore(reducer);

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
);
