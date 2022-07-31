import React from 'react';
import './index.css';
import {rerender} from './render';
import {store} from './redux/redux-store';

store.subscribe(rerender)
rerender()