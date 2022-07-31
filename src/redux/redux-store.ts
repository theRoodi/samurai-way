import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogReducer} from './dialog-reducer';

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)