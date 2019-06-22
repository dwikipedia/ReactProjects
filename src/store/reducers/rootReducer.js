import authReducer from './authReducer'
import comicReducer from './comicReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    comic: comicReducer
})

export default rootReducer