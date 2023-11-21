import React, {memo, useState} from 'react';
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
    const postsElements = props.posts.map(m => <div><Post key={m.id} message={m.message} likes={m.likes}/></div>)
    const [active, setActive] = useState(1);
    const [toggle, setToggle] = useState(1)

    const updateToggle = (id: number) => {
        setToggle(id)
        setActive(id);
    }
    const onAddPost = (value: any) => {
        props.addPost(value.newPostText)
    }

    return (
        <div className={style.userContent}>
            <div className={style.userTabs}>
                <div className={active === 1
                    ? `${style.userTab} ${style.userTabActive}`
                    : style.userTab}
                     onClick={() => updateToggle(1)}>
                    Posts
                </div>
                <div className={active === 2
                    ? `${style.userTab} ${style.userTabActive}`
                    : style.userTab}
                     onClick={() => updateToggle(2)}>
                    About
                </div>
                <div className={active === 3
                    ? `${style.userTab} ${style.userTabActive}`
                    : style.userTab}
                     onClick={() => updateToggle(3)}>
                    Friends
                    <span>10</span>
                </div>
                <div className={active === 4
                    ? `${style.userTab} ${style.userTabActive}`
                    : style.userTab}
                     onClick={() => updateToggle(4)}>
                    Groups
                    <span>1</span>
                </div>
            </div>
            <div>
                {active === 1 && <div className={''}>
                    <PostFormRedux onSubmit={onAddPost}/>
                    {postsElements}
                </div>
                }
                {active === 2 && <div className={''}>
                    About
                </div>
                }
                {active === 3 && <div className={''}>
                    Friends
                </div>
                }
                {active === 4 && <div className={''}>
                    Groups
                </div>
                }
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
