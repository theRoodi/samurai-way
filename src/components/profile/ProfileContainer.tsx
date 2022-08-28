import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {withRouter} from 'react-router-dom';

type MapStatePropsType = {
    profile: any
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
        debugger
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})

const ProfileContainerWithRouter = withRouter(ProfileContainer)


export default connect(mapStateToProps, {getUserProfile})(ProfileContainerWithRouter)
