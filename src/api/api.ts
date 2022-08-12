import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'a986a183-9555-4200-8974-3db59bc4f81a'
    }
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        }).then(response => response.data)
    },

    unfollowUser(id: number) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    followUser(id: number){
        return instance.post(`follow/${id}`).then(response => response.data)
    }
}


