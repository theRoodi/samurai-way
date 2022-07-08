import React, {ChangeEvent, useState} from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.css';
import {ProfilePagesType} from '../Profile';


const MyPosts = (props: ProfilePagesType) => {
    const postsElements = props.posts.map(p => <Post key={p.id}
                                                     message={p.message}
                                                     likesCount={p.likesCount}
                                                     id={p.id}/>)

    let [newPost, setNewPost] = useState<string>('')

    const newPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setNewPost(event.currentTarget.value)
    }

    const addPost = () => {
        props.dispatch({type: 'ADD-POST', newPost})
        setNewPost('')
    }

    return (
        <div>
            <div className={style.posts}>
                my posts
                <div>
                    <div>
                        <textarea value={newPost} onChange={newPostChange}></textarea>
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