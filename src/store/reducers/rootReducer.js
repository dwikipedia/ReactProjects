import authReducer from './authReducer'
import comicReducer from './comicReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    comic: comicReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer