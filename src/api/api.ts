import axios from 'axios';
import {ProfileType} from '../state/profileReducer';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '0fcfa52c-cba5-484d-ae0d-56dac03d5456'
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data)
        )
    },
    unfollow(id: number) {
        return (
            instance.delete(`follow/${id}`)
                .then(response => response.data)
        )
    },
    follow(id: number) {
        return (
            instance.post(`follow/${id}`)
                .then(response => response.data)
        )
    },
}
export const profileAPI = {
    getProfile(userId: number) {
        return (
            instance.get(`profile/${userId}`)
                .then(response => response.data)
        )
    },
    getStatus(userId: number) {
        return (
            instance.get(`/profile/status/${userId}`)
                .then(response => response.data)
        )
    },
    updateStatus(status: string) {
        return (
            instance.put(`/profile/status`, {status})
                .then(response => response.data)
        )
    },
    savePhoto(photo: string) {
        const formData = new FormData()
        formData.append('image', photo)
        return (
            instance.put(`/profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => response.data)
        )
    },
    updateProfile(profile: ProfileType) {
        return instance.put(`/profile/`, profile)
    }
}

export const authAPI = {
    getAuth() {
        return (
            instance.get('auth/me')
                .then(response => response.data)
        )
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string) {
        return (
            instance.post('auth/login', {email, password, rememberMe, captcha})
                .then(response => response.data)
        )
    },
    logout() {
        return (
            instance.delete('auth/login')
                .then(response => response.data)
        )
    }
}

export const securityAPI = {
    getCaptchaURL() {
        return instance.get('security/get-captcha-url')
            .then(response => response.data)
    }
}


