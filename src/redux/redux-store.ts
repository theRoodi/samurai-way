import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogReducer} from './dialog-reducer';

const reducers = combineReducers({
    profilePage : profileReducer,
    dialogPage : dialogReducer
})

export const store = createStore(reducers)