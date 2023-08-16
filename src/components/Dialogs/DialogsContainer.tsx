import React from 'react';
import {addMessage } from '../../state/dialogReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {authRedirect} from '../../hoc/AuthRedirect';
import {compose} from 'redux';


const mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.messagePage.dialogs,
        messages: state.messagePage.messages
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {addMessage}),
    authRedirect)
(Dialogs)
