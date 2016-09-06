/*

 File: AppStore.js
 Descriptions: This is the one and only store of our application. Contains Immutable state.

 Stores Basics: http://redux.js.org/docs/basics/Store.html
 createStore: http://redux.js.org/docs/api/createStore.html
 compose: http://redux.js.org/docs/api/compose.html
 applyMiddleware: http://redux.js.org/docs/api/applyMiddleware.html
 thunk: https://github.com/gaearon/redux-thunk

 */

import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import reducer from './../reducer';
import thunk from 'redux-thunk';

// Initial state
const initialState = {};

const middleware = [thunk];
// blank middleware
let extension = next => next;

if (process.env.NODE_ENV !== 'production') {
    // In development environment
    // middleware.push(require('redux-logger')());
    extension = window.devToolsExtension ? window.devToolsExtension() : extension;
}
// Create Store
const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(...middleware), extension)
);
// Hot Reducer
if (module.hot) {
    module.hot.accept('./../reducer', () =>
        store.replaceReducer(require('./../reducer').default)
    );
}

export default store;
