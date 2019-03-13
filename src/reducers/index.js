import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
//import example from './example'


export default (history) => combineReducers({
    //example,
    router: connectRouter(history),
})