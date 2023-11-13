import {UserType} from '../state/user-reducer';

type NewObjProps = { followed: boolean }
export const updateObject = (items: Array<UserType>, itemId: number, newObjProps: NewObjProps) => {
    return items.map(u => {
        if (u.id === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}