import {addMessageAC, InitialStateType, updateMessageAC} from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';

type MapStatePropsType = {
    dialogsPage: InitialStateType
    isAuth: boolean
}

type MapDispatchPropsType = {
    onChangeMessage: (text: string) => void
    onAddMessage: () => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        onChangeMessage: (text) => {
            dispatch(updateMessageAC(text))
        },
        onAddMessage: () => {
            dispatch(addMessageAC())
        }
    }

}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer