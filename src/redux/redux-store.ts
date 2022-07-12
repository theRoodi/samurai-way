import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogReducer} from './dialog-reducer';

const reducers = combineReducers({
    profilePage : profileReducer,
    dialogPage : dialogReducer
})

export type StoreType = typeof reducers
export type AppStateType = ReturnType<StoreType>

export const store = createStore(reducers)