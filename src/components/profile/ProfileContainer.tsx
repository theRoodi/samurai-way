import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getProfile, ProfileType} from '../../state/profileReducer';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {authRedirect} from '../../hoc/AuthRedirect';
import {compose} from 'redux';

type PathParamType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType | null
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
type MapPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamType> & MapPropsType

export class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile}),
    withRouter,
    authRedirect
)(ProfileContainer)