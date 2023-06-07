import React from 'react';
import {RootStateType} from '../../../state/state';
import {addPostAC, updateNewPostTextAC} from '../../../state/profileReducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';

const mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPostText: (newText: string) => {
            dispatch(updateNewPostTextAC(newText))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)