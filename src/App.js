import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

import {
    appReducer,
    notesReducer,
    filtersReducer,
} from './reducers';

import { Layout } from './Layout';

const store = createStore(
    combineReducers({
        app     : appReducer,
        notes   : notesReducer,
        filters : filtersReducer,
        form    : formReducer,
    }),
    applyMiddleware(thunk),
);

const App = () => (
    <Provider store={store} >
        <Layout />
    </Provider>
);

export default App;
