import React, {ChangeEvent, useState} from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.css';
import {PostType} from '../../../redux/store';

export type MyPostsPropsType = {
    posts: Array<PostType>
    onAddPost: () => void
    onNewPostChange: (text: string) => void
    newPost: string
}

const MyPosts = (props: MyPostsPropsType) => {
    const postsElements = props.posts.map(p => <Post key={p.id}
                                                     message={p.message}
                                                     likesCount={p.likesCount}
                                                     id={p.id}/>)

    const newPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.onNewPostChange(event.currentTarget.value)
    }

    const addPost = () => {
        props.onAddPost()
    }

    return (
        <div>
            <div className={style.posts}>
                my posts
                <div>
                    <div>
                        <textarea value={props.newPost} onChange={newPostChange}></textarea>
                    </div>
                    <div>
                        <button onClick={addPost}>Send</button>
                    </div>

                </div>
                <div className={style.post}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

export default MyPosts