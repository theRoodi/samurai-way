import React from 'react';
import style from './Header.module.css'
import {NavLink} from 'react-router-dom';

const Header = (props: any) => {
    return (
        <header className={style.header}>
            <img src="https://cryptologos.cc/logos/quant-qnt-logo.svg?v=022"/>

            <div className={style.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;