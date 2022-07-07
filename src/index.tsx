import React from 'react';
import './index.css';
import {rerender} from './render';
import {store} from './redux/state'

store.subscribe(rerender)
rerender()