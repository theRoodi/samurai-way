import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
// import {StoreType} from './redux/store';
import {AppStateType} from './redux/redux-store';

// type PropsType = {
//     store: StoreType
// }

const App = (props: AppStateType) => {

    const state = props.store.getState()

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
                            dispatch={props.store.dispatch.bind(props.store)}/>}/>
                        <Route path="/profile" element={<Profile
                            posts={state.profilePage.posts}
                            dispatch={props.store.dispatch.bind(props.store)}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}


export default App;
