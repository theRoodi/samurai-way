import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './state/state'

let rerender = () => {
    ReactDOM.render(
        <App store={store} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}

rerender()
store.subscriber(rerender)