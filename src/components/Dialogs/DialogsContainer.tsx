import React from 'react';
import {RootStateType} from '../../state/state';
import {addMessage, updateNewMessageText} from '../../state/dialogReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';


const mapStateToProps = (state: RootStateType) => {
    return {
        dialogs: state.messagePage.dialogs,
        messages: state.messagePage.messages,
        newMessageText: state.messagePage.newMessageText
    }
}

export const DialogsContainer = connect(mapStateToProps, {addMessage, updateNewMessageText})(Dialogs)