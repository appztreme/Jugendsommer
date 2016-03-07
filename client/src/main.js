import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './Components/AppRouter';
import store from './store';

ReactDom.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('app'));
