import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppStateType} from '../redux/redux-store';
import {AuthPropsType} from '../components/Dialogs/Dialogs';

type MapStatePropsType = {
    auth : AuthPropsType
}

const mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        auth: state.auth
    }
}
export function authRedirect <T>(Component: ComponentType<T>) {
    function RedirectComponent(props: MapStatePropsType) {
        let {auth, ...restProps} = props
        if (!auth.isAuth) {
            return <Redirect to="/login"/>
        }
        return <Component {...restProps as T} />
    }

    let Connected = connect(mapStateToProps)(RedirectComponent)

    return Connected
}