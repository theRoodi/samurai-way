import React from 'react';
import {RootStateType} from '../../../state/state';
import {addPost, updateNewPostText} from '../../../state/profileReducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';

const mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         updateNewPostText: (newText: string) => {
//             dispatch(updateNewPostText(newText))
//         },
//         addPost: () => {
//             dispatch(addPost())
//         }
//     }
// }

export const MyPostsContainer = connect(mapStateToProps, {updateNewPostText, addPost})(MyPosts)