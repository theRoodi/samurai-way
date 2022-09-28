import {Redirect} from 'react-router-dom';
import React, {ComponentType} from 'react';

type AuthPropsType = {
    isAuth: boolean
}

export function WithAuthRedirectComponent<T>(Component: any){
    debugger
    const AuthRedirectComponent = (props:AuthPropsType) => {
        if (!props.isAuth) {
            return <Redirect to={'/login'} />
        }
        return <Component {...props } />
    }
    return AuthRedirectComponent
}