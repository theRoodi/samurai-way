import React, {ComponentType} from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Redirect, withRouter} from 'react-router-dom';
import {WithAuthRedirectComponent} from '../../hoc/WithAuthRedirectComponent';
import {compose} from 'redux';

type MapStatePropsType = {
    profile: any
    isAuth: boolean
}

type MapDispatchPropsType = {
    setUserProfile: (profile: any) => void
}

type PropsType = MapDispatchPropsType & MapStatePropsType


class ProfileContainer extends React.Component<any, any> {


    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 9547
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if(!this.props.isAuth) {
            return <Redirect to={`/login`}/>
        }
        debugger
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    WithAuthRedirectComponent
)(ProfileContainer)
