import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// redux code
import logger from "redux-logger";
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from "./redux/reducers";
import createSagaMiddleware from "redux-saga";

import { watchLoginAttemptSaga } from "./redux/sagas";

// Router Code
import { Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import Pages from "./pages";

const sagaMiddleware = createSagaMiddleware();

const history = createBrowserHistory();


export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
        return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}; 

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
        // ignore write errors
    }
};

const persistedState = loadState();

const store = createStore(
    rootReducer(history),
    persistedState, // default state
    compose(
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware,
            logger
            // other middlewares (sagas)
        )
    ),
);

store.subscribe(() => {
    saveState({
      Login: store.getState().Login,
      Repository: store.getState().Repository
    });
  });


window.$S = store;

sagaMiddleware.run(watchLoginAttemptSaga);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" render={() => (<Pages.LoginPage test={"asdf"}/>)} />
                <Route render={() => (<Pages.IssuesPage />)} />
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
