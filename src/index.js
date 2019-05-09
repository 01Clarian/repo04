import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import 'tachyons'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {searchPeople, requestPeople, requestPlanets, requestStarships, togglePeople,} from './reducers'
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';
import Starintro from './Containers/Starintro'

const logger = createLogger();
const rootReducer = combineReducers({searchPeople, requestPeople, requestPlanets, requestStarships, togglePeople})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))


ReactDOM.render(
<Provider store={store} >
<App />, <Starintro />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

