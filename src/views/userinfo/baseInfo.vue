<template>
    <div class="baseInfo">
        <div class="main">
            <el-card shadow="always" class="card">
                <el-form :model="infoForm" :rules="rules" ref="infoForm" label-width="90px" hide-required-asterisk="false">
                    <el-form-item prop="name" label="真实姓名">
                        <el-input v-model="infoForm.name"></el-input>
                    </el-form-item>
                    <el-form-item prop="QQ" label="常用QQ">
                        <el-input v-model="infoForm.QQ"></el-input>
                    </el-form-item>
                    <el-form-item prop="mobile" label="手机号">
                        <el-input v-model="infoForm.mobile" @keydown.native.enter="submitForm('infoForm')"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="warning" @click="create('infoForm')" class="createBtn">创建</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
            <el-dialog :visible.sync="dialogSuccessVisible" width="30%" center custom-class="dialogSuccess" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false">
                <img src="../../../static/images/tip01.png">
                <span>创建成功，马上去填写简历吧！</span>
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="goCreate">填写简历</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>

<script>
import {createResume} from '@/api'
export default {
    data() {
        var validateQQ= (rule, value, callback) => {
            var reg =/^[1-9][0-9]{4,10}$/;
            if (value === '') {
                callback(new Error('请输入QQ'));
            } else if (!reg.test(value)) {
                callback(new Error('请输入正确的QQ号!'));
            } else {
                callback();
            }
        };
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
        return {
            resume_id: 'b909c362e1c74a97981da39f0eaa4423',
            dialogSuccessVisible: false,
            infoForm: {
                name: '',
                QQ: '',
                mobile: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                    { min: 1, max: 5, message: '姓名长度为1-5位', trigger: 'blur' }
                ],
                QQ: [
                    { validator: validateQQ, trigger: 'blur' }
                ],
                mobile: [
                    { validator: validateMobile, trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        create(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.dialogSuccessVisible = true;
                    createResume(this.infoForm).then(res => {
                        console.log(res)
                        if(res.status == 100000){
                            // this.$message.success();
                        }else{
                            // this.$message.error(res.msg);
                        }
                    })
                } 
            });
        },
        goCreate(){
            this.dialogSuccessVisible = false;
            this.$router.push('/userinfo/infolist/'+this.resume_id);
        },
    },
    
}
</script>

<style lang="scss">
.baseInfo{
    .card{
        width: 400px;
        margin: 50px auto;
        padding: 56px 150px;
        .el-form-item__label{
            font-size: 16px;
        }
        .createBtn{
            width: 240px;
            font-size: 16px;
        }
    }
    .dialogSuccess{
        .el-dialog__body{
            text-align: center;
            font-size: 20px;
        }
        img{
            display: block;
            margin: 0 auto 10px;
            width: 70px;
        }
    }
}
</style>
