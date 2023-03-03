import request from './request'

export function getType(data) {
    console.log(data, 'parmas')
    return request({
        url: '/getTypeList',
        method: 'post',
        data
    })
}