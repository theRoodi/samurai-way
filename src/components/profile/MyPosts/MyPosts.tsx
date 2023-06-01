import React from 'react';
import {Post} from './Post/Post';
import style from './MyPosts.module.css'
import {PostType} from '../../../App';

type PropsType = {
    posts: Array<PostType>
}


export const MyPosts = (props:PropsType) => {
    const postsElements = props.posts.map( m => <Post message={m.message} likes={m.likes}/>)
    return (
        <div className={style.postsBlock}>
            <h3>my post</h3>
            <div>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={style.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}