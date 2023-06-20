import {applyMiddleware, combineReducers, createStore} from 'redux';
import {profileReducer} from '../state/profileReducer';
import {dialogReducer} from '../state/dialogReducer';
import {userReducer} from '../state/user-reducer';
import {authReducer} from '../state/authReducer';
import thunkMiddleware from 'redux-thunk';

export type AppStateType = ReturnType<typeof reducer>

const reducer = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogReducer,
    usersPage: userReducer,
    auth: authReducer
})

export const store = createStore(reducer, applyMiddleware(thunkMiddleware))


// @ts-ignore
window.store = store