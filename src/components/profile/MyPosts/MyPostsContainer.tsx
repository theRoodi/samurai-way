import React from 'react';
import {RootStateType} from '../../../state/state';
import {addPost} from '../../../state/profileReducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';

const mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
export const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)