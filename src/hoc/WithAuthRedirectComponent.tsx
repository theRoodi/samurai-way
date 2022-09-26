import {Redirect} from 'react-router-dom';
import Dialogs from '../components/dialogs/Dialogs';
import React from 'react';


export const WithAuthRedirectComponent = (Component:any) => {
    const AuthRedirectComponent = (props:any) => {
        if (!props.isAuth) {
            return <Redirect to={'/login'} />
        }
        return <Component {...props} />
    }

    return AuthRedirectComponent
}