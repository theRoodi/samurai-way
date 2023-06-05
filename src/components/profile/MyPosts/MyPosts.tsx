import React, {ChangeEvent} from 'react';
import {Post} from './Post/Post';
import style from './MyPosts.module.css'
import {ActionTypes, addPostAC, ProfilePageType, updateNewPostTextAC} from '../../../state/state';

type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionTypes) => void
}


export const MyPosts = (props:PropsType) => {
    const postsElements = props.profilePage.posts.map( m => <Post message={m.message} likes={m.likes}/>)

    const onAddPost = () => {
        props.dispatch(addPostAC())
    }
    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        const action = updateNewPostTextAC(e.currentTarget.value)
        props.dispatch(action)
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