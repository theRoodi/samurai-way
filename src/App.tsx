import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import {Friends} from './components/Friends/Friends';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {ActionTypes} from './state/state';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {StoreContext} from './StoreContext';


type PropsType = {
    store: any
    dispatch: (action: ActionTypes) => void
}

const App = (props: PropsType) => {
    return (
        <BrowserRouter>
            <StoreContext.Provider value={props.store}>
                <div className="app-wrapper">
                    <Header/>
                    <Navbar/>
                    <div className={'app-wrapper-content'}>
                        <Route path="/messages" render={() => <DialogsContainer store={props.store}/>}/>
                        <Route path="/profile" render={() => <Profile store={props.store}/>}/>
                        <Route path="/friends" render={() => <Friends/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                    </div>
                </div>
            </StoreContext.Provider>
        </BrowserRouter>
    );
}

export default App;
