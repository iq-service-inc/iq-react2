import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

import createRootReducer from '../reducers'

const sagaMiddleware = createSagaMiddleware()

export const history = createBrowserHistory()

export default function configureStore(initialState) {

    let  middlewarelist = [
        routerMiddleware(history),
        sagaMiddleware
    ]

    if (process.env.NODE_ENV !== 'production') {
        let Logger = require("redux-logger")
        middlewarelist = [...middlewarelist, Logger.createLogger()]
    }
    return {
        ...createStore(
            createRootReducer(history),
            initialState,
            applyMiddleware(...middlewarelist),
        ),
        runSaga: sagaMiddleware.run,
    }
}
