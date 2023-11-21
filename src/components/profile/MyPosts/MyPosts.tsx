import React, {memo, useState} from 'react';
import {Post} from './Post/Post';
import style from './MyPosts.module.css'
import {PostType} from '../../../state/state';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, requiredFiled} from '../../../utils/validator';
import {FormControl} from '../../common/FormsControl/FormsControl';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Paperclip} from 'lucide-react';

type PropsType = {
    addPost: (value: string) => void
    posts: Array<PostType>
    newPostText: string

}


export const MyPosts = memo((props: PropsType) => {
    const profile = useSelector((state: AppStateType) => state.profilePage.profile)
    const postsElements = props.posts.map(m => <div><Post profile={profile} key={m.id} message={m.message}
                                                          likes={m.likes}/></div>)
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
                    <span>3</span>
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
                {toggle === 1 && <div className={''}>
                    <div>
                        <PostFormRedux onSubmit={onAddPost}/>
                    </div>
                    {postsElements}
                </div>
                }
                {toggle === 2 && <div className={''}>
                    About
                </div>
                }
                {toggle === 3 && <div className={''}>
                    Friends
                </div>
                }
                {toggle === 4 && <div className={''}>
                    Groups
                </div>
                }
            </div>
        </div>
    )
})

const maxLength = maxLengthCreator(1530)
const PostForm = (props: any) => {
    return (
        <section className={style.inputForm}>
            <div className={style.inputFormComment}>
                <h2 className={style.inputFormTitle}>Add a new post</h2>
                <form onSubmit={props.handleSubmit} className={style.inputFormBox}>
                    <Field placeholder="Your text"
                           component={FormControl}
                           child="textarea"
                           name="newPostText"
                           validate={[requiredFiled, maxLength]}
                           className={style.inputFormTextarea}/>
                    <div className={style.inputFormAttach}>
                        <Paperclip size={17} color={'#adadad'}/>
                        Attach my file
                    </div>
                    <button className={style.inputFormBtn}>
                        Send post
                    </button>
                </form>
            </div>
        </section>
    )
}
const PostFormRedux = reduxForm({form: 'postForm'})(PostForm)
