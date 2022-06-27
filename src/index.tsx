import React from 'react';
import './index.css';
import {rerender} from './render';
import {subscribe} from './redux/state';

subscribe(rerender)
rerender()