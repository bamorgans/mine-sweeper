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

// included to make hot-reloading work properly... without this code the browser page will not reload
if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept();
}
