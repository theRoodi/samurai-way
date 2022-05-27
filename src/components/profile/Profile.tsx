import React from 'react';
import style from './Profile.module.css'

const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img
                    src="https://socialsizes.io/static/facebook-cover-photo-size-eb6495646be79eea62423b216ac0b36b.jpg"/>
            </div>
            <div>
                ava+desc
            </div>
            <div>
                my post
                <div>
                    new post
                </div>
                <div>
                    <div>
                        post1
                    </div>
                    <div>
                        post2
                    </div>
                    <div>
                        post3
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile