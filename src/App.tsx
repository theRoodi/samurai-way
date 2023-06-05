import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {Friends} from './components/Friends/Friends';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {ActionTypes, StoreType} from './state/state';


type PropsType = {
    store: StoreType
    dispatch: (action: ActionTypes) => void
}

const App = (props:PropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path='/messages' render={() => <Dialogs messagePage={props.store.getState().messagePage} dispatch={props.dispatch}/>}/>
                    <Route path='/profile' render={() => <Profile profilePage={props.store.getState().profilePage} dispatch={props.dispatch}/>}/>
                    <Route path='/friends' render={() => <Friends/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
