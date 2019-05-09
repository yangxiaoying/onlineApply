import axios from 'axios'

import apiConfig from '../../config/api.config.js'
axios.defaults.baseURL = apiConfig.baseURL

// 请求拦截器
// axios.interceptors.request.use(function (config) {
//     let token = localStorage.getItem('mytoken')
//     if(token){
//         config.headers['Authorization'] = token
//     }
//     return config;
// });

// 登录
export const login = (data) => {
    return axios({
        url: '/ws/auth/6042',
        method: 'post',
        data:data,
        headers: {
			'PL': 'web'
		}
    }).then(res => res.data)
}
// 注册
export const register = (data) => {
    return axios({
        url: '/ws/auth/6043',
        method: 'post',
        data:data,
        headers: {
			'PL': 'web'
		}
    }).then(res => res.data)
}
// 获取验证码
export const getVerifyCode = () => {
    return axios({
        url:'/auth/1014',
		method: 'post',
    }).then(res => res.data)
}

// 发送短信验证码
export const sendMsg = (data) => {
    return axios({
        url:'/ws/sms/6045',
		method: 'post',
		data:data,
		headers: {
			'PL': 'web'
		}
    }).then(res => res.data)
}
// 找回密码
export const retrievePwd = (data) => {
    return axios({
        url: '/ws/auth/6044',
        method: 'post',
        data:data,
        headers: {
			'PL': 'web'
		}
    }).then(res => res.data)
}