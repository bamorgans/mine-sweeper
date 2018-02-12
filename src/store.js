/**
 * Created by bamorgans on 1/29/2018.
 */

import { createStore } from 'redux';
import reducers from './reducers/reducers.js';

const store = createStore(reducers);

export default store;
