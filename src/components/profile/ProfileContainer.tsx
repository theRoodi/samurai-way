import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getProfile, getStatus, ProfileType, updateStatus} from '../../state/profileReducer';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {authRedirect} from '../../hoc/AuthRedirect';
import {compose} from 'redux';

type PathParamType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType | null
    status: string

}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
type MapPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamType> & MapPropsType

export class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = 9547
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
    authRedirect
)(ProfileContainer)