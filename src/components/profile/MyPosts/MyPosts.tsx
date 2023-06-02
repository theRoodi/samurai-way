import React, {ChangeEvent, useState} from 'react';
import {Post} from './Post/Post';
import style from './MyPosts.module.css'
import {ProfilePageType} from '../../../state/state';

type PropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    changeHandler: (newText: string) => void
}

export const MyPosts = (props:PropsType) => {
    const postsElements = props.profilePage.posts.map( m => <Post message={m.message} likes={m.likes}/>)

    const onAddPost = () => {
        props.addPost()
    }
    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.changeHandler(e.currentTarget.value)
    }

    return (
        <div className={style.postsBlock}>
            <h3>my post</h3>
            <div>
                <div>
                    <div>
                        <textarea value={props.profilePage.newPostText} onChange={onChangeHandler}/>
                    </div>
                    <div>
                        <button onClick={onAddPost}>Add post</button>
                    </div>
                </div>
                <div className={style.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}