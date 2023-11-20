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
                <div className={style.headerContent}>
                    <a className={style.headerLogo} href="#"><img src={logo} alt="logo"/></a>


                    <div className={style.userIcon}>
                        <div className={style.headerSearch}><Search size={25}/></div>
                        <div className={style.iconGroup}>
                            <a className={style.headerNavLink} href="#">
                                <MessageCircle size={25} color={'#000'}/>
                            </a>
                            <a className={style.headerNavLink} href="#">
                                <Bell size={25} color={'#000'}/>
                            </a>
                        </div>
                    </div>
                    <div className={style.loginBlock}>
                        {
                            props.isAuth
                                ? <>
                                    <div className={style.headerUserImg}>
                                        <img className={style.headerImg} src={userPhotoSmall} alt=""/>
                                    </div>
                                    <div className={style.headerUserBlock}>
                                        {props.login}
                                        <ChevronDown size={10} className={style.arrowDown}/>
                                        <button className={style.btnOut} onClick={props.logout}>Logout</button>
                                    </div>
                                </>
                                : <NavLink to={'/login'}>Login</NavLink>
                        }

                    </div>

                </div>
            </div>
        </header>
    )
}