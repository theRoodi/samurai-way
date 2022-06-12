import React from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.css';
import {ProfilePageType} from '../../../redux/state';


const MyPosts = (props : ProfilePageType) => {
    const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

    return (
        <div>
            <div className={style.posts}>
                my posts
                <div>
                    <div><textarea></textarea></div>
                    <div>
                        <button>Send</button>
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