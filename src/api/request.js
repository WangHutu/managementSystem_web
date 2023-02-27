// 引入axios封装
import axios from 'axios'
import { ElMessage } from 'element-plus'
import {setLocal} from '../common/utils'

// 创建axios实例
const request = axios.create({
    baseURL: '/api', // url = base url + request url
    withCredentials: true,

    timeout: 8000 // 8s超时
})

// 请求拦截器 一般写法模式
request.interceptors.request.use(
    (response) => {
        return response // 请求成功则返回response
    },
    (error) => { // 请求失败则显示错误状态
        message.error(error.message)
        return Promise.reject(error)
    }
)

// 响应拦截器
request.interceptors.response.use(
    (res) => {
        console.log(res, 'res')
        if (typeof res.data !== 'object') {
            ElMessage.error('服务端异常！')
            return Promise.reject(res)
        }
        if (res.data.code != 200) {
            if (res.data.message) ElMessage.error(res.data.message)
            if (res.data.code == 416) {
                router.push({ path: '/login' })
            }
            if (res.data.data && window.location.hash == '#/login') {
                setLocal('token', res.data.data)
                axios.defaults.headers['token'] = res.data.data
            }
            return Promise.reject(res.data)
        }
        ElMessage.success(res.data.message)
        return res.data
    },
    (error) => {
        message.error(error.message)
        return Promise.reject(error)
    }
)

// 导出request
export default request 
