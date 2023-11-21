import React, {lazy} from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {initializeApp} from './state/appReducer';
import {Preloader} from './components/common/Preloader/Preloader';
import {withSuspense} from './hoc/withSuspense';

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component<any> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <div className={'wrapperMain'}>
                    <div className={'aside'}><Navbar/></div>
                    <div className={'app-wrapper-content'}>
                        <div className={'app-content-container'}>
                            <Route path="/messages" render={withSuspense(DialogsContainer)}/>
                            <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                            <Route path="/users" render={withSuspense(UsersContainer)}/>
                            <Route path="/music" render={() => <Music/>}/>
                            <Route path="/settings" render={() => <Settings/>}/>
                            <Route path="/login" render={() => <Login/>}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    initialized: state.app.initialized
})
export default compose(
    connect(mapStateToProps, {initializeApp}))(App)
