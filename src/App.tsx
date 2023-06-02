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
import {addPost, changeHandler, RootStateType} from './state/state';




const App = (props:RootStateType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path='/messages' render={() => <Dialogs dialogs={props.messagePage.dialogs} messages={props.messagePage.messages}/>}/>
                    <Route path='/profile' render={() => <Profile profilePage={props.profilePage} changeHandler={changeHandler} addPost={addPost}/>}/>
                    <Route path='/friends' render={() => <Friends/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
