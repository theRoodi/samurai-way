import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import {state, addPost, addMessage} from './redux/state';

const App = () => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs" element={<Dialogs
                            dialogs={state.dialogsPage.dialogs}
                            messages={state.dialogsPage.messages}
                            addMessage={addMessage}/>}/>
                        <Route path="/profile" element={<Profile
                            posts={state.profilePage.posts}
                            addPost={addPost}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}


export default App;
