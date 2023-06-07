import React from 'react';
import {RootStateType } from '../../state/state';
import {addMessageAC, updateNewMessageTextAC} from '../../state/dialogReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';



const mapStateToProps = (state: RootStateType) => {
    return {
        dialogs: state.messagePage.dialogs,
        messages: state.messagePage.messages,
        newMessageText: state.messagePage.newMessageText
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return{
        addMessage: () => {
            dispatch(addMessageAC())
        },
        updateNewMessageText: ( newText:string) => {
            dispatch(updateNewMessageTextAC(newText))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)