import axios from 'axios'

import apiConfig from '../../config/api.config.js'
axios.defaults.baseURL = apiConfig.baseURL

// 请求拦截器
axios.interceptors.request.use(function (config) {
    let token = localStorage.getItem('Authorization')
    if(token){
        config.headers['Authorization'] = token
    }
    return config;
});

// 登录
export const login = (data) => {
    return axios({
        url: '/ws/auth/6042',
        method: 'post',
        data: data,
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
        data: data,
        headers: {
			'PL': 'web'
		}
    }).then(res => res.data)
}
// 获取验证码?
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
		data: data,
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
        data: data,
        headers: {
			'PL': 'web'
		}
    }).then(res => res.data)
}

// 创建简历?
export const createResume = (data) => {
    return axios({
        url: '/ws/auth/6012',
        method: 'post',
        data: data,
    }).then(res => res.data)
}
//查询简历各项完成状态
export function getResumeStatus(data) {
    return axios({
        url: '/ws/resume/6015',
        method: 'post',
        data: data
    }).then(res => res.data)
}
//导出简历
export function exportResume(data) {
    return axios({
        url: '/ws/export/pdf/6040',
        method: 'post',
        data: data
    }).then(res => res.data)
}
//预览简历信息
export function getResumeInfo(data) {
    return axios({
        url: '/ws/resume/6014',
        method: 'post',
        data: data
    }).then(res => res.data)
}

//获取基本信息
export function getBasic(data) {
    return axios({
        url: '/ws/basic/6017',
        method: 'post',
        data: data
    }).then(res => res.data)
}
//更新基本信息
export function updateBasic(data) {
    return axios({
        url: '/ws/basic/6016',
        method: 'post',
        data: data
    }).then(res => res.data)
}
//获取教育信息
export function getEducation(data) {
    return axios({
        url: '/ws/basic/6017',
        method: 'post',
        data: data
    }).then(res => res.data)
}
//获取能力信息--各项信息总和
export function getAbility(data) {
    return axios({
        url: '/ws/ability/6018',
        method: 'post',
        data: data
    }).then(res => res.data)
}
//获取学生干部经历
export function getStudent(data) {
    return axios({
        url: '/ws/cadre/6029',
        method: 'post',
        data: data
    }).then(res => res.data)
}
//获取工作/实习经历
export function getWork(data) {
    return axios({
        url: '/ws/work/6033',
        method: 'post',
        data: data
    }).then(res => res.data)
}
//获取家庭情况
export function getFamily(data) {
    return axios({
        url: '/ws/family/6035',
        method: 'post',
        data: data
    }).then(res => res.data)
}
//获取主观信息
export function getSubjective(data) {
    return axios({
        url: '/ws/subjective/6037',
        method: 'post',
        data: data
    }).then(res => res.data)
}
//获取职位调查
export function getPosition(data) {
    return axios({
        url: '/ws/investigation/6039',
        method: 'post',
        data: data
    }).then(res => res.data)
}
//上传图片
export function uploadImg(data) {
    return axios({
        url: '/ws/file/6046',
        method: 'post',
        data: data
    }).then(res => res.data)
}