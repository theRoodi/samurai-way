import React from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.css';

export type PostType = {
    message: string
    likesCount: number
}

const MyPosts = () => {
    const postsData = [
        {id: 1, message: 'post 1', likesCount: 10},
        {id: 2, message: 'post 2', likesCount: 20},
        {id: 3, message: 'post 3', likesCount: 30},
    ]


    return (
        <div>
            <div className={style.posts}>
                my posts
                <div>
                    <div><textarea></textarea></div>
                    <div><button>Send</button></div>

                </div>
                <div className={style.post}>
                    <Post message={postsData[0].message} likesCount = {postsData[0].likesCount} />
                    <Post message={postsData[1].message} likesCount = {postsData[1].likesCount} />
                    <Post message={postsData[2].message} likesCount = {postsData[2].likesCount} />
                </div>
            </div>
        </div>
    )
}

export default MyPosts