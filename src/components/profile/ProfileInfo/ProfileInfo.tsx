import React from 'react';
import style from './ProfileInfo.module.css'

type DescriptionType = {
    cover : string
    // avatar : string
    desc : string
}

const ProfileInfo = (props: DescriptionType) => {
    return (
        <div>
            <div className={style.coverImg}>
                <img src={props.cover}/>
            </div>
            <div className={style.description}>
                {props.desc}
            </div>
        </div>
    )
}

export default ProfileInfo