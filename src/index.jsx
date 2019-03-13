import React from 'react'
import { render } from 'react-dom'
import { Route,Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'

import './styl/index.styl'
import configureStore, { history } from "./store"
import rootSaga from "./sagas"
import App from './components/App.jsx'

const store = configureStore()

store.runSaga(rootSaga)

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <>
                <Switch>
                    <Route exact path="/"  component={App}  />
                </Switch>
            </>      
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root')
)
