import React from 'react';
import style from './Header.module.css'

export const Header = () => {
    return (
        <header className={style.header}>
            <img src="https://cryptologos.cc/logos/uniswap-uni-logo.svg" alt="logo"/>
        </header>
    )
}