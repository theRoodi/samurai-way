import React from 'react';
import { StoreType} from '../../../state/state';
import {addPostAC, updateNewPostTextAC} from '../../../state/profileReducer';
import {MyPosts} from './MyPosts';

type PropsType = {
    store: StoreType
}


export const MyPostsContainer = (props:PropsType) => {
    const state = props.store.getState().profilePage
    const onAddPost = () => {
        props.store.dispatch(addPostAC())
    }
    const onChangeHandler = (newText: string) => {
        const action = updateNewPostTextAC(newText)
        props.store.dispatch(action)
    }

    return (
        <MyPosts addPost={onAddPost} updateNewPostText={onChangeHandler} posts={state.posts} newPostText={state.newPostText} />
    )
}