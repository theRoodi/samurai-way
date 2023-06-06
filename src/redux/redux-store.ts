import {combineReducers, createStore} from 'redux';
import {profileReducer} from '../state/profileReducer';
import {dialogReducer} from '../state/dialogReducer';


const reducers = combineReducers({
    profilePage : profileReducer,
    messagePage : dialogReducer
})
export const store = createStore(reducers)