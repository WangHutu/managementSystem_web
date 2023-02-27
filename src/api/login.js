import request from './request'

export function userLoginApi(loginform) {
    return request({
        url: '/login',
        method: 'post',
        data: loginform
    })
}