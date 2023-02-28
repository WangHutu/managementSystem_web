import request from './request'

export function userLoginApi(loginform) {
    return request({
        url: '/login',
        method: 'post',
        data: loginform
    })
}

export function userRegisterApi(loginform) {
    return request({
        url: '/register',
        method: 'post',
        data: loginform
    })
}