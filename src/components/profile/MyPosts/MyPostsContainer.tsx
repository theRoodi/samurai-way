import React, {ChangeEvent, useState} from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.css';
import {ProfilePagesType} from '../Profile';
import {addPostActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props: ProfilePagesType) => {
    let posts = props.posts

    let [newPost, setNewPost] = useState<string>('')

    const onNewPostChange = (text: string) => {
        setNewPost(text)
    }

    const onAddPost = () => {
        props.dispatch(addPostActionCreator(newPost))
        setNewPost('')
    }

    return (
        <MyPosts posts={posts} onAddPost={onAddPost} onNewPostChange={onNewPostChange} newPost={newPost}/>
    )
}

export default MyPostsContainer