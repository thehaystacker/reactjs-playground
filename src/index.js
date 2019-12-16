import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import * as serviceWorker from "./serviceWorker";

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import reducerCounter from "./Store/Reducers/Counter";
import reducerResults from "./Store/Reducers/Results";

// USING REDUX-THUNK
// import thunk from 'redux-thunk';

// USING REDUX-SAGA
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  counter: reducerCounter,
  results: reducerResults
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
