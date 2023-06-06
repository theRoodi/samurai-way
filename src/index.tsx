import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './redux/redux-store';
import {RootStateType} from './state/state';

let rerender = (state : RootStateType) => {
    ReactDOM.render(
        <App store={store} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}

rerender(store.getState())
store.subscribe(() => {
    const state = store.getState()
    rerender(state)
})