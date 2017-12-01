import React from 'react';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import ihmReducer from './reducers';
let store = createStore(ihmReducer, applyMiddleware(thunk));
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
