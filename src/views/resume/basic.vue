<template>
    <div class="basic">
        <div class="title">
            <h1>基本信息</h1>
            <el-link v-if="isShowEdit" @click="edit" icon="el-icon-edit" class="editBtn">编辑</el-link>
        </div>
        <el-form :model="basicForm" :rules="rules" ref="basicForm" label-width="140px">
            <el-row>
                <el-col :span="24">
                    <el-form-item label="一寸照：" class="oneInchPhoto">
                        <img :src="oneInchPhotoSrc" width="100" height="140" alt="" class="avatar">
                        <div class="upload">
                            <el-upload
                            class="oneInchPhoto-uploader"
                            action=""
                            :http-request="uploadOneInchPhoto"
                            :show-file-list="false">
                                <el-button v-if="isEdit" size="small" type="warning">上传</el-button>
                                <el-button v-if="!isEdit" type="text">使用裁剪工具</el-button>
                                <div slot="tip" class="el-upload__tip">
                                    <p>1寸证件照标准：</p>
                                    <p>蓝底；正装；穿衬衫；不戴首饰；男士配领带，发型干脆利落，无刘海，无染发，面带微笑；女士短发（发不掩耳），长发（盘发或束发，刘海不过眉），淡妆....</p>
                                    <p><el-button type="text" @click="dialogPhotoVisible=true">查看详细标准 ></el-button></p>
                                </div>
                            </el-upload>
                        </div>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="姓名：" prop="name">
                        <el-input v-if="isEdit" v-model="basicForm.name" placeholder="请与有效证件上的姓名一致">
                        </el-input>
                        <p v-else>{{basicForm.name}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="性别：" prop="gender">
                        <el-select v-if="isEdit" v-model="basicForm.gender">
                            <el-option v-for="item in resumeData.gender" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                        <p v-else>{{basicForm.gender_name}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="申请人类别：">
                        <el-select v-if="isEdit" v-model="basicForm.requester_class" clearable>
                            <el-option v-for="item in resumeData.requester_class" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                        <p v-else>{{basicForm.requester_class_name}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="民族：" prop="nation">
                        <el-select v-if="isEdit" v-model="basicForm.nation">
                            <el-option v-for="item in resumeData.nation" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                        <p v-else>{{basicForm.nation_name}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="身高：" prop="height">
                        <el-input v-if="isEdit" v-model.number="basicForm.height">
                            <template slot="append">
                                <el-button type="text">单位：cm</el-button>
                            </template>
                        </el-input>
                        <p v-else>{{basicForm.height+'cm'}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="体重：" prop="weight">
                        <el-input v-if="isEdit" v-model.number="basicForm.weight">
                            <template slot="append">
                                <el-button type="text">单位：kg</el-button>
                            </template>
                        </el-input>
                        <p v-else>{{basicForm.weight+'kg'}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="出生日期：">
                        <el-date-picker v-if="isEdit" type="date" placeholder="选择日期" v-model="basicForm.birthday" style="width: 100%;" clearable></el-date-picker>
                        <p v-else>{{basicForm.birthday}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="血型：">
                        <el-select v-if="isEdit" v-model="basicForm.blood_type" clearable>
                            <el-option v-for="item in resumeData.blood_type" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                        <p v-else>{{basicForm.birthday}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="健康状态：" prop="health_status">
                        <el-select v-if="isEdit" v-model="basicForm.health_status">
                            <el-option v-for="item in resumeData.health_status" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                        <p v-else>{{basicForm.health_status_name}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="双眼视力：">
                        <el-select v-if="isEdit" v-model="basicForm.eye_sight" clearable>
                            <el-option v-for="item in resumeData.sight" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                        <p v-else>{{basicForm.eye_sight_name}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="证件类型：" prop="id_type">
                        <el-select v-if="isEdit" v-model="basicForm.id_type">
                            <el-option v-for="item in resumeData.id_type" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                        <p v-else>{{basicForm.id_type}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="证件号码：" prop="id_no">
                        <el-input v-if="isEdit" v-model="basicForm.id_no">
                        </el-input>
                        <p v-else>{{basicForm.id_no}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="婚育状况：" prop="marriage_bearing_status">
                        <el-select v-if="isEdit" v-model="basicForm.marriage_bearing_status">
                            <el-option v-for="item in resumeData.marriage_bearing_status" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                        <p v-else>{{basicForm.marriage_bearing_status_name}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="政治面貌：" prop="political_status">
                        <el-select v-if="isEdit" v-model="basicForm.political_status">
                            <el-option v-for="item in resumeData.political_status" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                        <p v-else>{{basicForm.political_status_name}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="国籍：">
                        <el-select v-if="isEdit" v-model="basicForm.country" clearable>
                            <el-option v-for="item in resumeData.country" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                        <p v-else>{{basicForm.country}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="户口类型：" prop="household_type">
                        <el-select v-if="isEdit" v-model="basicForm.household_type">
                            <el-option v-for="item in resumeData.household_type" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                        <p v-else>{{basicForm.household_type_name}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="户籍类型：" prop="house_native_type">
                        <el-select v-if="isEdit" v-model="basicForm.house_native_type">
                            <el-option v-for="item in resumeData.house_native_type" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                        <p v-else>{{basicForm.house_native_type_name}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="籍贯：" prop="native_place">
                        <el-cascader v-if="isEdit" :options="cityData" v-model="basicForm.native_place">
                        </el-cascader>
                        <p v-else>{{basicForm.native_place | getSelectedCity}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="生源地：" prop="student_origin_based">
                        <el-cascader v-if="isEdit" :options="cityData" v-model="basicForm.student_origin_based">
                        </el-cascader>
                        <p v-else>{{basicForm.student_origin_based | getSelectedCity}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="第一学历：">
                        <el-select v-if="isEdit" v-model="basicForm.first_education" clearable>
                            <el-option v-for="item in resumeData.first_education" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                        <p v-else>{{basicForm.first_education_name}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="录取批次：">
                        <el-select v-if="isEdit" v-model="basicForm.enroll_batch" clearable>
                            <el-option v-for="item in resumeData.enroll_batch" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                        <p v-else>{{basicForm.enroll_batch_name}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="最高学历：" prop="highest_education">
                        <el-select v-if="isEdit" v-model="basicForm.highest_education">
                            <el-option v-for="item in resumeData.highest_education" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                        <p v-else>{{basicForm.highest_education_name}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="最高学位：" prop="highest_degree">
                        <el-select v-if="isEdit" v-model="basicForm.highest_degree">
                            <el-option v-for="item in resumeData.highest_degree" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                        <p v-else>{{basicForm.highest_degree_name}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="有无大专经历：">
                        <el-select v-if="isEdit" v-model="basicForm.has_junior_collegee" clearable>
                            <el-option v-for="item in resumeData.has_or_not" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                        <p v-else>{{basicForm.has_junior_collegee_name}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="海外经历：">
                        <el-select v-if="isEdit" v-model="basicForm.has_overseas_experience" clearable>
                            <el-option v-for="item in resumeData.has_or_not" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                        <p v-else>{{basicForm.has_overseas_experience_name}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="现居住地：" prop="current_addr">
                        <el-cascader v-if="isEdit" :options="cityData" v-model="basicForm.current_addr">
                        </el-cascader>
                        <p v-else>{{basicForm.current_addr | getSelectedCity}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="家庭住址：" prop="hometown_addr">
                        <el-input v-if="isEdit" v-model="basicForm.hometown_addr" placeholder="居住及家庭住址尽量精确到门牌号">
                        </el-input>
                        <p v-else>{{basicForm.hometown_addr}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="近期常用住址：" >
                        <el-input v-if="isEdit" v-model="basicForm.recent_addr" placeholder="居住及家庭住址尽量精确到门牌号">
                        </el-input>
                        <p v-else>{{basicForm.recent_addr}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="期望工作地点：" >
                        <el-cascader v-if="isEdit" :options="cityData" v-model="basicForm.expect_work_place" clearable>
                        </el-cascader>
                        <p v-else>{{basicForm.expect_work_place | getSelectedCity}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="期望月薪：">
                        <el-select v-if="isEdit" v-model="basicForm.expect_monthly_salary" clearable>
                            <el-option v-for="item in resumeData.expect_monthly_salary" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                        <p v-else>{{basicForm.expect_monthly_salary}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="参加工作时间：">
                        <el-date-picker v-if="isEdit" type="date" placeholder="选择日期" v-model="basicForm.work_start_time" style="width: 100%;" clearable></el-date-picker>
                        <p v-else>{{basicForm.work_start_time}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="手机号码：" prop="mobile">
                        <el-input v-if="isEdit" v-model="basicForm.mobile">
                        </el-input>
                        <p v-else>{{basicForm.mobile}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="固定电话：">
                        <el-input v-if="isEdit" v-model="basicForm.landline_telephone" placeholder="区号加电话号码，如：0108889999">
                        </el-input>
                        <p v-else>{{basicForm.landline_telephone}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="电子邮箱：" prop="email">
                        <el-input v-if="isEdit" v-model="basicForm.email" placeholder="例如QQ邮箱">
                        </el-input>
                        <p v-else>{{basicForm.email}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="紧急联系人：" prop="emergency_contact">
                        <el-input v-if="isEdit" v-model="basicForm.emergency_contact" placeholder="请填写紧急联系人姓名">
                        </el-input>
                        <p v-else>{{basicForm.emergency_contact}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="紧急联系人电话：" prop="emergency_contact_mobile">
                        <el-input v-if="isEdit" v-model="basicForm.emergency_contact_mobile">
                        </el-input>
                        <p v-else>{{basicForm.emergency_contact_mobile}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="曾用名：">
                        <el-input v-if="isEdit" v-model="basicForm.used_name"></el-input>
                        <p v-else>{{basicForm.used_name}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="入党团时间：">
                        <el-date-picker v-if="isEdit" type="date" placeholder="选择日期" v-model="basicForm.join_party_time" style="width: 100%;" clearable></el-date-picker>
                        <p v-else>{{basicForm.join_party_time}}</p>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="生活照：" class="lifePhoto">
                        <el-upload
                        v-if="isEdit"
                        class="lifephoto-uploader"
                        action=""
                        :http-request="uploadLifePhoto"
                        list-type="picture-card"
                        :file-list="lifePhotoList"
                        :on-change="handleChange"
                        :on-remove="handleRemove"
                        :limit="4">
                            <i class="el-icon-plus"></i>
                            <div slot="tip" class="el-upload__tip">
                                <p>上传注意事项：</p>  
                                <p>1.最多上传4张，每张最大5M，支持jpg/gif/bmp/png格式</p>
                                <p>2.建议上传清晰自然生活照</p>
                                <p>3.需要有1张横版和1张竖版</p>
                            </div>
                        </el-upload>
                        <div v-else class="imgList">
                            <img v-for="(item,index) in basicForm.life_photo" :key="index" :src="item[1]" alt="">
                        </div>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item>
                        <el-button type="warning" class="saveBtn" @click="save('basicForm')">保存</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <!-- 证件照标准弹框 -->
        <el-dialog  title="证件照详细标准" :visible.sync="dialogPhotoVisible" width="800px" center custom-class="dialogPhoto" :show-close="false">
            <table>
                <tr>
                    <td rowspan="8" width="104">证件照</td>
                    <td width="75"></td>
                    <td width="270">男生</td>
                    <td width="270">女生</td>
                </tr>
                <tr>
                    <td>尺寸</td>
                    <td colspan="2">拍摄时为1寸，电子版裁剪为30k以内</td>
                </tr>
                <tr>
                    <td>底色</td>
                    <td colspan="2">蓝底</td>
                </tr>
                <tr>
                    <td>服装</td>
                    <td>黑色/藏蓝色西装、衬衫、领带	</td>
                    <td>黑色西装、衬衫</td>
                </tr>
                <tr>
                    <td>表情</td>
                    <td colspan="2">自然微笑，眼睛看向镜头。</td>
                </tr>
                <tr>
                    <td>发型</td>
                    <td>无刘海、无染色、长度适中（手指插入头发仍可见）</td>
                    <td>短发（发不掩耳）、长发（盘发或束发，刘海不过眉）</td>
                </tr>
                <tr>
                    <td>妆容</td>
                    <td>和肤色接近的色号，高光</td>
                    <td>粉底（比肤色稍白一号），唇彩（粉色/橘色），眉笔（棕色/灰色），高光、腮红</td>
                </tr>
                <tr>
                    <td>其他</td>
                    <td colspan="2">尽量不佩戴眼镜（眼睛变形除外），不佩戴任何首饰</td>
                </tr>
            </table>
            <span slot="footer" class="dialog-footer">
                <el-button type="warning" @click="dialogPhotoVisible=false">关闭</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import resumeData from '../../../static/data/resume.json';
import cityData from '../../../static/data/cityData.json';
import { getBasic,updateBasic,uploadImg } from "@/api";
export default {
    data() {
        var validateMobile = (rule, value, callback) => {
            var reg =/^1[34578]\d{9}$/;
            if (value === '') {
                callback(new Error('请输入手机号码'));
            } else if (!reg.test(value)) {
                callback(new Error('请输入正确的手机号码!'));
            } else {
                callback();
            }
        };
        // var validateEmail = (rule, value, callback) => {
        //     var reg =/^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$/;
        //     if (value === '') {
        //         callback(new Error('请输入电子邮箱'));
        //     } else if (!reg.test(value)) {
        //         callback(new Error('请输入正确的电子邮箱!'));
        //     } else {
        //         callback();
        //     }
        // };
        return {
            basicForm: {
                one_inch_photo: '',
                name: '',
                gender: '',
                requester_class: '',
                nation: '',
                height: '',
                weight: '',
                birthday: '',
                blood_type: '',
                health_status: '',
                eye_sight: '',
                id_type: '',
                id_no: '',
                marriage_bearing_status: '',
                political_status: '',
                country: '',
                household_type: '',
                house_native_type: '',
                native_place: '',
                student_origin_based: '',
                first_education: '',
                enroll_batch_name: '',
                highest_education: '',
                highest_degree: '',
                has_junior_college: '',
                has_overseas_experience: '',
                current_addr: '',
                hometown_addr: '',
                recent_addr: '',
                expect_work_place: '',
                expect_monthly_salary: '',
                work_start_time: '',
                mobile: '',
                landline_telephone: '',
                email: '',
                emergency_contact: '',
                emergency_contact_mobile: '',
                used_name: '',
                join_party_time: '',
                life_photo: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入姓名', trigger: 'blur' }
                ],
                gender_name: [
                    { required: true, message: '请输入性别', trigger: 'change' }
                ],
                nation_name: [
                    { required: true, message: '请输入民族', trigger: 'change' }
                ],
                height: [
                    { required: true, message: '请输入身高', trigger: 'blur' },
                    { type: 'number', message: '身高必须为数字'}
                ],
                weight: [
                    { required: true, message: '请输入体重', trigger: 'blur' },
                    { type: 'number', message: '体重必须为数字'}
                ],
                health_status_name: [
                    { required: true, message: '请选择健康状态', trigger: 'change' }
                ],
                id_type_name: [
                    { required: true, message: '请输入证件类型', trigger: 'change' }
                ],
                id_no: [
                    { required: true, message: '请输入证件号码', trigger: 'blur' }
                ],
                marriage_bearing_status_name: [
                    { required: true, message: '请输入婚育状况', trigger: 'blur' }
                ],
                political_status_name: [
                    { required: true, message: '请输入政治面貌', trigger: 'change' }
                ],
                household_type_name: [
                    { required: true, message: '请输入户口类型', trigger: 'change' }
                ],
                house_native_type_name: [
                    { required: true, message: '请输入户籍类型', trigger: 'change' }
                ],
                native_place: [
                    { required: true, message: '请输入籍贯', trigger: 'blur' }
                ],
                student_origin_based: [
                    { required: true, message: '请输入生源地', trigger: 'blur' }
                ],
                highest_education_name: [
                    { required: true, message: '请输入最高学历', trigger: 'change' }
                ],
                highest_degree_name: [
                    { required: true, message: '请输入最高学位', trigger: 'change' }
                ],
                current_addr: [
                    { required: true, message: '请输入现居住地', trigger: 'blur' }
                ],
                hometown_addr: [
                    { required: true, message: '请输入家庭住址', trigger: 'change' }
                ],
                mobile: [
                    { required: true, validator: validateMobile, trigger: 'blur' }
                ],
                // email: [
                //     { required: true, validator: validateEmail, trigger: 'blur' }
                // ],
                emergency_contact: [
                    { required: true, message: '请输入紧急联系人', trigger: 'blur' }
                ],
                emergency_contact_mobile: [
                    { required: true, message: '请输入紧急联系人电话', trigger: 'blur' }
                ],
            },
            resume_id: '',
            resumeData: resumeData,
            cityData: cityData,
            dialogPhotoVisible: false,
            isShowEdit: false,
            isEdit: true,
            isShowUpload: true,
            oneInchPhotoSrc: '../../../static/images/photo.png',
            lifePhotoList: []
        }
    },
    created() {
        this.resume_id = this.$route.params.id;
        this.initList();
    },
    methods: {
        initList(){
            getBasic({ resume_id: this.resume_id}).then(res => {
                if (res.status == 100000) {
                    // console.log(res)
                    if(res.data.length == 0){
                        this.isShowEdit = false;
                        this.isEdit = true;
                    }else{
                        this.isShowEdit = true;
                        this.isEdit = false;
                        this.basicForm = res.data[0];
                        if(res.data[0].one_inch_photo.length!=0){
                            this.oneInchPhotoSrc = res.data[0].one_inch_photo[1];
                        }

                        res.data[0].life_photo.forEach(item => {
                            this.lifePhotoList.push({
                                path: item[0],
                                url: item[1]
                            })
                        })
                    }
                }
            });
        },
        // 上传一寸照
        uploadOneInchPhoto(params){
            const imgSize = params.file.size/1024;
            if(imgSize > 30){
                return this.$message.error('请将电子版照片裁剪为30k以内');
            }
            const formData = new FormData();
            formData.append('file',params.file);
            uploadImg(formData).then(res => {
                if(res.status == 100000){
                    this.$message.success('上传成功');
                    this.oneInchPhotoSrc = res.data.url;
                    this.basicForm.one_inch_photo[0] = res.data.path;
                }
            })
        },
        // 上传生活照
        uploadLifePhoto(params){
            if(!/\.(jpg|gif|bmp|png)$/.test(params.file.name)){
                this.$message.error('图片仅支持jpg/gif/bmp/png格式');
                this.lifePhotoList.splice(this.lifePhotoList[this.lifePhotoList.length-1],1)
                return;
            }
            const imgSize = params.file.size/1024/1024;
            if(imgSize > 5){
                this.$message.error('请将电子版照片裁剪为5M以内');
                this.lifePhotoList.splice(this.lifePhotoList[this.lifePhotoList.length-1],1)
                return;
            }

            if(this.lifePhotoList.length>=3){
                $('.basic .lifephoto-uploader .el-upload').hide();
            }else{
                $('.basic .lifephoto-uploader .el-upload').show();
            }
            const formData = new FormData();
            formData.append('file',params.file);
            uploadImg(formData).then(res => {
                if(res.status == 100000){
                    this.$message.success('上传成功');
                    this.lifePhotoList.push({
                        path: res.data.path,
                        url: res.data.url
                    })
                    this.basicForm.life_photo.push({
                        path: res.data.path,
                        url: res.data.url
                    })
                }
            })
        },
        handleChange(file, fileList) {
            this.lifePhotoList = fileList;
        },
        // 删除生活照
        handleRemove(file, fileList) {
            // forEach遍历删除
            /* this.lifePhotoList.forEach((item,index) => {
                if(item.url == file.url){
                    this.lifePhotoList.splice(index,1);
                }
            })
            this.basicForm.life_photo = fileList; */

            // filter筛选
            /* this.lifePhotoList = this.lifePhotoList.filter(item => {
                return item.url != file.url
            })
            this.basicForm.life_photo = fileList; */
    
            this.lifePhotoList = this.lifePhotoList.filter(item => item.url != file.url)
            this.basicForm.life_photo = fileList;
        },
        edit(){
            this.isShowEdit = false;
            this.isEdit = true;
            
            // ????
            if(this.lifePhotoList.length>=4){
                $('.basic .lifephoto-uploader .el-upload').hide()
            }else{
                $('.basic .lifephoto-uploader .el-upload').show();
            }
        },
        save(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    updateBasic(this.basicForm).then(res => {
                        console.log(res)
                        // if(res.status == 100000){
                        //     this.$message.success(res.msg);
                        // }else{
                        //     this.$message.error(res.msg);
                        // }
                    })
                }
            });
        },
    },
    filters: {
        getSelectedCity(value){
            return value.length == 0 ? '' : value.join('/');
        }
    }
}
</script>

<style lang="scss">
.basic{
    .title{
        margin-bottom: 20px;
        font-size: 18px;
        overflow: hidden;
        h1{
            float: left;
        }
        .editBtn{
            float: right;
            &:hover{
                color:#FEB300;
            }
            &.is-underline:hover:after{
                border-color: #FEB300;
            }
        }
        .el-icon-edit{
            color:#FEB300;
        }
    }
    .el-input,.el-input-group{
        width: 260px !important;
    }
    .el-input-group__append button.el-button{
        padding: 0 10px;
    }
    .oneInchPhoto{
        .avatar{
            float: left;
        }
        .upload{
            float: left;
            width: 530px;
            margin-left: 30px;
        }
    }
    .lifephoto-uploader {
        .el-upload {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            &:hover {
                border-color: #409EFF;
            }
            i {
                font-size: 28px;
                color: #8c939d;
                width: 148px;
                height: 148px;
                line-height: 148px;
                text-align: center;
            }
        }
    }
    .lifePhoto{
        .imgList{
            img{
                display: inline-block;
                vertical-align: middle;
                width: 100px;
                height: 140px;
                margin-right: 10px;
            }
        }
    }
    .el-upload__tip {
        p{
            line-height: 20px;
            margin-bottom: 5px;
        }
    }
    .dialogPhoto{
        table td{
            height: 30px;
            line-height: 24px;
            padding: 0 5px;
            border: 1px solid #ddd;
            text-align: center;
            vertical-align: middle;
        }
    }
}

</style>
