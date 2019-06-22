import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux'
import rootReducer from './store/reducers/rootReducer'
import {Provider} from 'react-redux'

const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
