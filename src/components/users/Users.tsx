import {UsersPropsType} from './UsersContainer';
import style from './Users.module.css'



export const Users = (props: UsersPropsType) => {
    if (props.usersPage.users.length === 0 ){
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Photos_icon_%282020%29.svg/640px-Google_Photos_icon_%282020%29.svg.png',
                followed: true,
                fullName: 'Igor',
                status: 'Proger',
                location: {country: 'Russia', city: 'Novokuznetsk'}
            },
            {
                id: 2,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Photos_icon_%282020%29.svg/640px-Google_Photos_icon_%282020%29.svg.png',
                followed: true,
                fullName: 'Anton',
                status: 'Streamer',
                location: {country: 'Russia', city: 'Vologda'}
            },
            {
                id: 3,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Photos_icon_%282020%29.svg/640px-Google_Photos_icon_%282020%29.svg.png',
                followed: false,
                fullName: 'Sanya',
                status: 'Gamer',
                location: {country: 'Russia', city: 'Moscow'}
            },
        ])
    }


    return (
        <div>
            {props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={style.userPhoto} src={u.photoUrl}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={ () => props.unfollow(u.id)}>Unfollow</button>
                            : <button onClick={ () => props.follow(u.id)}>Follow</button> }

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}