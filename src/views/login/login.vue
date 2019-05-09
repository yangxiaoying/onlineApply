<template>
    <div class="loginPage">
        <div class="login-box">
            <el-tabs v-if="!isForget" v-model="activeName" type="card" @tab-click="handleClick" class="tab-nav">
                <el-tab-pane label="登录" name="first" class="tab-item">
                    <el-form :model="loginForm" :rules="rules" ref="loginForm">
                        <el-form-item prop="mobile">
                            <el-input v-model="loginForm.mobile" placeholder="请输入手机号" prefix-icon="myicon myicon-mobile">
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input v-model="loginForm.password" placeholder="请输入密码" prefix-icon="myicon myicon-lock">
                                <template slot="append">
                                    <el-button type="text" @click="isForget=!isForget">忘记密码</el-button>
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="captcha" class="verifyCode clearfix">
                            <el-input v-model="loginForm.captcha" placeholder="请输入验证码" prefix-icon="myicon myicon-safe" @keydown.native.enter="login('loginForm')" class="verifyCodeInput fl">
                            </el-input>
                            <img :src="verifyCodeUrl" alt="" class="verifyCodeImg fr" @click="refreshVerifyCode">
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="login('loginForm')">登录</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="注册" name="second" class="tab-item">
                    <el-form :model="regForm" :rules="rules" ref="regForm">
                        <el-form-item prop="mobile">
                            <el-input v-model="regForm.mobile" placeholder="请输入手机号" prefix-icon="myicon myicon-mobile">
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="captcha" class="verifyCode clearfix">
                            <el-input v-model="regForm.captcha" placeholder="请输入验证码" prefix-icon="myicon myicon-safe" class="verifyCodeInput fl">
                            </el-input>
                            <img :src="verifyCodeUrl" class="verifyCodeImg fr" @click="refreshVerifyCode">
                        </el-form-item>
                        <el-form-item prop="code">
                            <el-input v-model="regForm.code" placeholder="请输入短信验证码" prefix-icon="myicon myicon-mail">
                                <template slot="append">
                                    <el-button type="text" @click="sendMsg">立即发送</el-button>
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input v-model="regForm.password" placeholder="请设置8-20位数字和字母组合的密码" prefix-icon="myicon myicon-lock" @keydown.native.enter="register('regForm')">
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="register('regForm')">注册</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
            <div class="forget-box" v-if="isForget">
                <h1>找回密码</h1>
                <el-form :model="retrievePwdForm" :rules="rules" ref="retrievePwdForm">
                    <el-form-item prop="mobile">
                        <el-input v-model="retrievePwdForm.mobile" placeholder="请输入手机号" prefix-icon="myicon myicon-mobile">
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="captcha" class="verifyCode clearfix">
                        <el-input v-model="retrievePwdForm.captcha" placeholder="请输入验证码" prefix-icon="myicon myicon-safe" class="verifyCodeInput fl">
                        </el-input>
                        <img :src="verifyCodeUrl" class="verifyCodeImg fr" @click="refreshVerifyCode">
                    </el-form-item>
                    <el-form-item prop="code">
                        <el-input v-model="retrievePwdForm.code" placeholder="请输入短信验证码" prefix-icon="myicon myicon-mail">
                            <template slot="append">
                                <el-button type="text" @click="sendMsg">立即发送</el-button>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model="retrievePwdForm.password" placeholder="请设置8-20位数字和字母组合的密码" prefix-icon="myicon myicon-lock" @keydown.native.enter="retrievePwd('retrievePwdForm')">
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="retrievePwd('retrievePwdForm')">确认</el-button>
                    </el-form-item>
                    <p class="goLogin" @click="isForget=!isForget">返回登录</p>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
import {login,register,getVerifyCode,sendMsg,retrievePwd} from '@/api'
export default {
    data(){
        var validateMobile = (rule, value, callback) => {
            var reg =/^1[34578]\d{9}$/;
            if (value === '') {
                callback(new Error('请输入手机号'));
            } else if (!reg.test(value)) {
                callback(new Error('请输入正确的手机号!'));
            } else {
                callback();
            }
        };
        var validatePass = (rule, value, callback) => {
            var reg =/^\S*([a-zA-Z]+\S*[0-9]+|[0-9]+\S*[a-zA-Z]+)\S*$/;
            if (value === '') {
                callback(new Error('请输入密码'));
            } else if (!reg.test(value)) {
                callback(new Error('请设置8-20位数字和字母组合的密码!'));
            } else {
                callback();
            }
        };
        return{
            isForget: false,
            activeName: 'first',
            verifyCodeUrl: '',
            loginForm:{
                type: 'password',
                mobile: '',
                password: '',
                captcha: ''
            },
            regForm:{
                type: 'password',
                mobile: '',
                password: '',
                captcha: '',
                code: ''
            },
            retrievePwdForm:{
                mobile: '',
                password: '',
                code: ''
            },
            rules: {
                mobile: [
                    { validator: validateMobile, trigger: 'blur' }
                ],
                password: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                captcha: [
                    { required: true, message: '请输入验证码', trigger: 'blur' }
                ],
                code: [
                    { required: true, message: '请输入短信验证码', trigger: 'blur' }
                ]
            }
        }
    },
    created(){
        this.refreshVerifyCode();
    },
    methods: {
        handleClick(tab, event) {
            this.refreshVerifyCode();
        },
        login(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    login(this.loginForm).then(res => {
                        // console.log(res)
                        if(res.status == 100000){
                            this.$message.success('登录成功');
                            localStorage.setItem('mytoken',res.data.token);
                            // this.$router.push('/resume');
                        }else{
                            this.$message.error(res.msg);
                        }
                    })
                }
            });
        },
        register(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    register(this.regForm).then(res => {
                        console.log(res)
                        if(res.status == 100000){
                            this.$message.success(res.msg);
                        }else{
                            this.$message.error(res.msg);
                        }
                    })
                }
            });
        },
        // 找回密码提交
        retrievePwd(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    retrievePwd(this.retrievePwdForm).then(res => {
                        console.log(res)
                        if(res.status == 100000){
                            this.$message.success(res.msg);
                        }else{
                            this.$message.error(res.msg);
                        }
                    })
                }
            });
        },
        // 获取图片验证码
        refreshVerifyCode(){
            getVerifyCode().then(res => {
                if(res.status == 100000){
                    this.verifyCodeUrl = res.data.captcha_url;
                }
            })
        },
        // 发送短信验证码
        sendMsg(){
            sendMsg({
                type: 'register',
                mobile: this.regForm.mobile,
                captcha: this.regForm.captcha,
                sms_sign: '华图金融'
            }).then(res => {
                console.log(res)
                if(res.status == 100000){
                    // this.$message.success(res.msg);
                }else{
                    // this.$message.error(res.msg);
                }
            })
        }
    }
}
</script>
<style lang="scss">
.loginPage{
    position: relative;
    height: 100%;
    background: #333;
}
.login-box{
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    width: 300px;
    padding: 16px 27px;
    border-radius: 5px;
    background: #fff;
    .el-button{
        width: 100%;
    }
    .el-input-group__append,.el-button--text{
        width:auto;
    }
    .el-button--text{
        padding: 0 10px;
    }
    .el-input-group__append{
        text-align: center;
    }
    .el-tabs--card>.el-tabs__header{
        border:0 ;
    }
    .el-tabs__nav {
        width: 100%;
        border:0 !important;
    }
    .el-tabs__item{
        width: 50%;
        border:0 !important;
        text-align: center;
        font-size: 18px;
    }
    .verifyCodeInput{
        width:200px;
    }
    .verifyCodeImg{
        width:85px;
        height: 40px;
    }
    .forget-box h1{
        height: 40px;
        line-height: 40px;
        margin-bottom:15px;
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        color: #409EFF;
    }
    .goLogin{
        margin-bottom:10px;
        text-align: center;
        font-size: 14px;
        cursor:pointer;
    }
}
</style>

