import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogReducer} from './dialog-reducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer
})

export type AppStateType = ReturnType<typeof reducers>

export const store = createStore(reducers)