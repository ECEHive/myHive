import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './layout/Root';
import 'antd/dist/antd.css';
import { configureStore, history } from './store/configureStore';

const store = configureStore();

ReactDOM.render(<Root store={store} history={history}/>, document.getElementById('root'));
