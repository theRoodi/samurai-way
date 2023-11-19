import React from 'react';
import style from './Header.module.css'
import {NavLink} from 'react-router-dom';
import {Bell, ChevronDown, MessageCircle, Search} from 'lucide-react';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import logo from '../../assets/images/logo.svg'

export const Header = (props: any) => {

    const userPhotoSmall = useSelector((state: AppStateType) => state.profilePage.profile?.photos.small)


    return (
        <header className={style.header}>
            <div className={style.headerBlock}>
                <img src={logo} alt="logo"/>


                <div className={style.userBlock}>
                    <div className={style.iconGroup}>
                        <Search size={25}/>
                        <MessageCircle size={25}/>
                        <Bell size={25}/>
                    </div>
                    <div className={style.loginBlock}>
                        {
                            props.isAuth
                                ? <>
                                    <img src={userPhotoSmall} alt=""/>
                                    {props.login}
                                    <ChevronDown size={10} className={style.arrowDown}/>
                                    <button className={style.btnOut} onClick={props.logout}>Logout</button>
                                </>
                                : <NavLink to={'/login'}>Login</NavLink>
                        }

                    </div>
                </div>
            </div>
        </header>
    )
}