import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './src/store.js';
import Routes from './src/routes.jsx';

ReactDOM.render(
    <Provider store={store}>
        <Routes/>
    </Provider>,
    document.getElementById('app')
);


