import { Provider } from 'react-redux';
import React from 'react';

import store from '../redux/store';

import Router from './Router';

import 'antd/dist/antd.css';
import './App.scss';

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
