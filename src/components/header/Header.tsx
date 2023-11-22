import React from 'react';
import style from './Header.module.css'
import {NavLink, useParams} from 'react-router-dom';
import {Bell, ChevronDown, MessageCircle, Power, Search} from 'lucide-react';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import logo from '../../assets/images/logo.svg'

export const Header = (props: any) => {

    const userPhotoSmall = useSelector((state: AppStateType) => state.profilePage.profile?.photos.small)
    const currentUserId = props.userId
    // @ts-ignore
    const {userId} = useParams()


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
                                <span>1</span>
                            </a>
                            <a className={style.headerNavLink} href="#">
                                <Bell size={25} color={'#000'}/>
                                <span>7</span>
                            </a>
                        </div>
                    </div>
                    <div className={style.loginBlock}>
                        {
                            props.isAuth
                                ? <>
                                    <div className={style.headerUserImg}>
                                        <img className={style.headerImg} src={userId === currentUserId  ? userPhotoSmall : ''} alt=""/>
                                    </div>
                                    <div className={style.headerUserBlock}>
                                        {props.login}
                                        <ChevronDown size={10} className={style.arrowDown}/>
                                        <button className={style.btnOut} onClick={props.logout}><Power size={25} /></button>
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