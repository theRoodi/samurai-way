import React from 'react';
import {AppStateType} from '../../../redux/redux-store';
import {addPost} from '../../../state/profileReducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: ''
    }
}
export const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)