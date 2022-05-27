import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Profile/>
            </div>
        </BrowserRouter>

    );
}


export default App;
