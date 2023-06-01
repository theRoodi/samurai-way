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

export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likes: number
}
type PropsType = {
}



const App = (props:any) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path='/messages' render={() => <Dialogs dialogs={props.state.messagePage.dialogs} messages={props.state.messagePage.messages}/>}/>
                    <Route path='/profile' render={() => <Profile posts={props.state.profilePage.posts}/>}/>
                    <Route path='/friends' render={() => <Friends/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
