import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import DialogsContainer from './components/dialogs/DialogsContainer';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import HeaderContainer from './components/header/HeaderContainer';

const App = () => {

    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
            </div>
        </div>

    );
}

export default App;
