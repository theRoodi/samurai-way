import React from 'react';
import {addPostAC, InitialStateType, updatePostAC} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';

type MapStatePropsType = {
    profilePage: InitialStateType
}

type MapDispatchPropsType = {
    onNewPostChange: (text: string) => void
    onAddPost: () => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        onNewPostChange: (text) => {
            dispatch(updatePostAC(text))
        },
        onAddPost: () => {
            dispatch(addPostAC())
        }
    }

}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer