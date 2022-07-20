import {addMessageActionCreator, DialogType, MessageType, UpdateMessageActionCreator} from '../../redux/dialog-reducer';
import {useState} from 'react';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

type MapStatePropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    message: string
}

type MapDispatchPropsType = {
    onAddMessage: () => void
    onChangeMessage: (text: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType


const mapStateToProps = (state: MapStatePropsType): MapStatePropsType => {
    return {
        dialogs: state.dialogs,
        messages: state.messages,
        message: state.message
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {

    return {
        onAddMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onChangeMessage: (text) => {
            dispatch(UpdateMessageActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer