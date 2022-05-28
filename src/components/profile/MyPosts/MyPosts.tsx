import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';

export type PostType = {
    message: string
    likesCount: number
}

const MyPosts = () => {
    return (
        <div>
            <div>
                my posts
                <div>
                    <textarea></textarea>
                    <button>Send</button>
                </div>
                <div>
                    <Post message={'post1'} likesCount = {150} />
                    <Post message={'post2'} likesCount ={25} />
                </div>
            </div>
        </div>
    )
}

export default MyPosts