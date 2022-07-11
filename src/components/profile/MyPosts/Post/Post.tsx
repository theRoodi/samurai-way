import React from 'react';
import style from './Post.module.css'
import {PostType} from '../../../../redux/store';

const Post: React.FC<PostType> = (props) => {
    return (
        <div>
            <div className={style.item}>
                <img src="https://www.svgrepo.com/show/2750/boy.svg"/>
                {props.message}
                <div>
                    <span>{props.likesCount} likes</span>
                </div>
            </div>
        </div>
    )
}

export default Post