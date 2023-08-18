import React, {memo} from 'react';
import {Post} from './Post/Post';
import style from './MyPosts.module.css'
import {PostType} from '../../../state/state';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, requiredFiled} from '../../../utils/validator';
import {FormControl} from '../../common/FormsControl/FormsControl';

type PropsType = {
    addPost: (value: string) => void
    posts: Array<PostType>
    newPostText: string

}


export const MyPosts = memo((props: PropsType) => {
    console.log('RENDER')
    const postsElements = props.posts.map(m => <Post key={m.id} message={m.message} likes={m.likes}/>)

    const onAddPost = (value: any) => {
        props.addPost(value.newPostText)
    }

    return (
        <div className={style.postsBlock}>
            <h3>my post</h3>
            <div>
                <PostFormRedux onSubmit={onAddPost}/>
                <div className={style.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
})

const maxLength = maxLengthCreator(30)
const PostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Type your post"
                       component={FormControl}
                       child="textarea"
                       name="newPostText"
                       validate={[requiredFiled, maxLength]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const PostFormRedux = reduxForm({form: 'postForm'})(PostForm)
