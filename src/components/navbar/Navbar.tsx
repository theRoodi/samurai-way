import React from 'react';
import style from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}><a href="src/components#">Profile</a></div>
            <div className={style.item}><a href="src/components#">Messages</a></div>
            <div className={style.item}><a href="src/components#">Friends</a></div>
        </nav>
    )
}