import React, {ComponentType} from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, getUserStatus, updateUserStatus} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Redirect, withRouter} from 'react-router-dom';
import {WithAuthRedirectComponent} from '../../hoc/WithAuthRedirectComponent';
import {compose} from 'redux';

type MapStatePropsType = {
    profile: any
    status: string
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
        this.props.getUserStatus(userId)
    }

    render() {
        debugger
        return (
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    WithAuthRedirectComponent
)(ProfileContainer)
