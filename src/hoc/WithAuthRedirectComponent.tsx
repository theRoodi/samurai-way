import {Redirect} from 'react-router-dom';
import React, {ComponentType} from 'react';
import {AppStateType} from '../redux/redux-store';
import {connect} from 'react-redux';

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function WithAuthRedirectComponent<T>(Component: ComponentType<T>){
    const AuthRedirectComponent = (props:MapStatePropsType) => {
        const {isAuth, ...restProps} = props
        if (!isAuth) {
            return <Redirect to={'/login'} />
        }
        return <Component {...restProps as T } />
    }
    const ConnectedRedirect = connect(mapStateToProps)(AuthRedirectComponent)
    return ConnectedRedirect
}