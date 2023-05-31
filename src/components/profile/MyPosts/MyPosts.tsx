import React from 'react';
import {Post} from './Post/Post';
import style from './MyPosts.module.css'


export const MyPosts = () => {
    return (
        <div>
            my post
            <div>
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={style.posts}>
                    <Post message={'Hello'} likes={5}/>
                    <Post message={'How are you'} likes={3}/>
                    <Post message={'Hello world'} likes={10}/>
                </div>
            </div>
        </div>
    )
}