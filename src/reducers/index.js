import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import intl from './intl'



export default (history) => combineReducers({
    intl,
    router: connectRouter(history),
})