import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType, state, subscriber} from './state/state'

let rerender = (state: RootStateType) => {
    ReactDOM.render(
        <App profilePage={state.profilePage} messagePage={state.messagePage}/>,
        document.getElementById('root')
    );
}

rerender(state)
subscriber(rerender)