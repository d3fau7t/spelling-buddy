import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));