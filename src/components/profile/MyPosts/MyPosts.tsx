import React, {ChangeEvent} from 'react';
import {Post} from './Post/Post';
import style from './MyPosts.module.css'
import {PostType} from '../../../state/state';

type PropsType = {
    addPost: () => void
    updateNewPostText: (newText: string) => void
    posts: Array<PostType>
    newPostText: string

}


export const MyPosts = (props: PropsType) => {
    const postsElements = props.posts.map(m => <Post key={m.id} message={m.message} likes={m.likes}/>)

    const onAddPost = () => {
        props.addPost()
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget.value
        props.updateNewPostText(newText)
    }

    return (
        <div className={style.postsBlock}>
            <h3>my post</h3>
            <div>
                <div>
                    <div>
                        <textarea placeholder={'Type your post'} value={props.newPostText} onChange={onChangeHandler}/>
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