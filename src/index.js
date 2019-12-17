import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import createSagaMiddleware from "redux-saga";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./Store/Reducers";

// USING REDUX-SAGA
const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({ rootReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

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
