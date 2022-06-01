import React from 'react';
import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = (props: any) => {
    return (
        <div className={style.content}>
            <div>
                <img
                    src="https://socialsizes.io/static/facebook-cover-photo-size-eb6495646be79eea62423b216ac0b36b.jpg"/>
            </div>
            <div>
                ava+desc
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile