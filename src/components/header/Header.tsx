import React from 'react';
import style from './Header.module.css'
import {NavLink} from 'react-router-dom';

export const Header = (props: any) => {
    return (
        <header className={style.header}>
            <img src="https://cryptologos.cc/logos/uniswap-uni-logo.svg" alt="logo"/>
            <div className={style.loginBlock}>
                {
                    props.isAuth
                        ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                        : <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    )
}