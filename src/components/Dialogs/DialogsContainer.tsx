import React from 'react';
import {addMessage, updateNewMessageText} from '../../state/dialogReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {authRedirect} from '../../hoc/AuthRedirect';
import {compose} from 'redux';


const mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.messagePage.dialogs,
        messages: state.messagePage.messages,
        newMessageText: state.messagePage.newMessageText
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {addMessage, updateNewMessageText}),
    authRedirect)
(Dialogs)
