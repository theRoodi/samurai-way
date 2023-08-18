import {createSelector} from 'reselect';



export const getUser = (state: any) => {
    return state.usersPage
}
export const getUsers = createSelector(getUser, (state:any) => {
    return state.users.filter((u:any)=> true)
} )
export const getPageSize = (state: any) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: any) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: any) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: any) => {
    return state.usersPage.isFetching
}

export const getIsFollowing = (state: any) => {
    return state.usersPage.isFollowing
}