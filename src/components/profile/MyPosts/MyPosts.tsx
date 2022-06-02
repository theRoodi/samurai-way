import React from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.css';

export type PostType = {
    message: string
    likesCount: number
}

const MyPosts = () => {
    return (
        <div>
            <div className={style.posts}>
                my posts
                <div>
                    <div><textarea></textarea></div>
                    <div><button>Send</button></div>

                </div>
                <div className={style.post}>
                    <Post message={'post1'} likesCount = {150} />
                    <Post message={'post2'} likesCount ={25} />
                </div>
            </div>
        </div>
    )
}

export default MyPosts