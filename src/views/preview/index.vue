<template>
    <div class="preview">
        <div class="header"></div>
        <div class="main">
            <el-card shadow="always" class="card">
                <h1>{{info.title}}</h1>
                <!-- 基本信息baseinfo -->
                <div class="item baseinfo">
                    <div class="title">基本信息</div>
                    <div class="content">
                        <div v-if="info.baseinfo.length!=0" v-for="(item,index) in info.baseinfo" :key="index" class="module">
                            <el-row>
                                <el-col :span="24">
                                    一寸照：
                                    <img v-if="item.one_inch_photo.length!=0" :src="item.one_inch_photo[1]">
                                    <img v-else src="../../../static/images/photo.png">
                                </el-col>
                                <el-col :span="12">姓名：{{item.name}}</el-col>
                                <el-col :span="12">性别：{{item.gender_name}}</el-col>
                                <el-col :span="12">申请人类别：{{item.requester_class_name}}</el-col>
                                <el-col :span="12">民族：{{item.nation_name}}</el-col>
                                <el-col :span="12">身高：{{item.height+'cm'}}</el-col>
                                <el-col :span="12">体重：{{item.weight+'kg'}}</el-col>
                                <el-col :span="12">出生日期：{{item.birthday}}</el-col>
                                <el-col :span="12">血型：{{item.blood_type_name}}</el-col>
                                <el-col :span="12">健康状态：{{item.health_status_name}}</el-col>
                                <el-col :span="12">双眼视力：{{item.eye_sight_name}}</el-col>
                                <el-col :span="12">证件类型：{{item.id_type_name}}</el-col>
                                <el-col :span="12">证件号码：{{item.id_no}}</el-col>
                                <el-col :span="12">婚育状况：{{item.marriage_bearing_status_name}}</el-col>
                                <el-col :span="12">政治面貌：{{item.political_status_name}}</el-col>
                                <el-col :span="12">国籍：{{item.country_name}}</el-col>
                                <el-col :span="12">户口类型：{{item.household_type_name}}</el-col>
                                <el-col :span="12">户籍类型：{{item.house_native_type_name}}</el-col>
                                <el-col :span="12">籍贯：{{item.native_place[0]+'/'+item.native_place[1]}}</el-col>
                                <el-col :span="12">生源地：{{item.student_origin_based[0]+'/'+item.student_origin_based[1]}}</el-col>
                                <el-col :span="12">第一学历：{{item.first_education_name}}</el-col>
                                <el-col :span="12">录取批次：{{item.enroll_batch_name}}</el-col>
                                <el-col :span="12">最高学历：{{item.highest_education_name}}</el-col>
                                <el-col :span="12">最高学位：{{item.highest_degree_name}}</el-col>
                                <el-col :span="12">有无大专经历：{{item.has_junior_college_name}}</el-col>
                                <el-col :span="12">海外经历：{{item.has_overseas_experience_name}}</el-col>
                                <el-col :span="12">现居住地：{{item.current_addr[0]+'/'+item.current_addr[1]}}</el-col>
                                <el-col :span="12">家庭住址：{{item.hometown_addr}}</el-col>
                                <el-col :span="12">近期常用住址：{{item.recent_addr}}</el-col>
                                <el-col :span="12">期望工作地点：{{item.expect_work_place.length==0?'':item.expect_work_place[0]+'/'+item.expect_work_place[1]}}</el-col>
                                <el-col :span="12">期望月薪：{{item.expect_monthly_salary_name}}</el-col>
                                <el-col :span="12">参加工作时间：{{item.work_start_time}}</el-col>
                                <el-col :span="12">手机号码：{{item.mobile}}</el-col>
                                <el-col :span="12">固定电话：{{item.landline_telephone}}</el-col>
                                <el-col :span="12">电子邮箱：{{item.email}}</el-col>
                                <el-col :span="12">紧急联系人：{{item.emergency_contact}}</el-col>
                                <el-col :span="12">紧急联系人电话：{{item.emergency_contact_mobile}}</el-col>
                                <el-col :span="12">曾用名：{{item.used_name}}</el-col>
                                <el-col :span="12">入党团时间：{{item.join_party_time}}</el-col>
                                <el-col :span="12">生活照：<img v-for="(item,index) in item.life_photo" :key="index" :src="item[1]" alt="" class="life-photo"></el-col>
                            </el-row>
                        </div>
                    </div>
                </div>
                <!-- 教育信息edu -->
                <div class="item edu">
                    <div class="title">教育信息</div>
                    <div class="content">
                        <div v-if="info.edu.length!=0" v-for="(item,index) in info.edu" :key="index" class="module">
                            <h4>教育信息{{index+1}}</h4>
                            <el-row>
                                <el-col :span="12">开始时间：{{item.start_time}}</el-col>
                                <el-col :span="12">结束时间：{{item.end_time}}</el-col>
                                <el-col :span="12">学校名称：{{item.school_name}}</el-col>
                                <el-col :span="12">所属阶段：{{item.belongs_stage_name}}</el-col>
                                <el-col :span="12">学校性质：{{item.school_nature_name}}</el-col>
                                <el-col :span="12">学历：{{item.education_name}}</el-col>
                                <el-col :span="12">学位：{{item.degree_name}}</el-col>
                                <el-col :span="12">专业名称：{{item.major_name}}</el-col>
                                <el-col :span="12">专业类别：{{item.main_class_score}}</el-col>
                                <el-col :span="12">学制：{{item.study_years==null?'':item.study_years+'年'}}</el-col>
                                <el-col :span="12">学习形式：{{item.study_type_name}}</el-col>
                                <el-col :span="12">班级排名：{{item.class_rank_name}}</el-col>
                                <el-col :span="12">平均绩点GPA：{{item.avg_gpa}}</el-col>
                                <el-col :span="12">培养方式：{{item.culture_mode_name}}</el-col>
                                <el-col :span="12">学院名称：{{item.institute_name}}</el-col>
                                <el-col :span="12">主要教学语言：{{item.major_study_language_name}}</el-col>
                                <el-col :span="12">研究方向：{{item.research_area}}</el-col>
                                <el-col :span="12">所属省份：{{item.school_province_name}}</el-col>
                                <el-col :span="12">学校所在地：{{item.school_location_name}}</el-col>
                                <el-col :span="12">专业描述：{{item.major_desc}}</el-col>
                                <el-col :span="12">主修课程及成绩：{{item.main_class_score}}</el-col>
                            </el-row>
                        </div>
                    </div>
                </div>
                <!-- 能力信息ability -->
                <div class="item ability">
                    <div class="title">能力信息</div>
                    <div class="content">
                        <!-- 语言能力language -->
                        <div v-if="info.language.length!=0" v-for="(item,index) in info.language" :key="index" class="module">
                            <h4>语言能力{{index+1}}</h4>
                            <el-row>
                                <el-col :span="12">外语顺序：{{item.order_name}}</el-col>
                                <el-col :span="12">是否主修语种：{{item.is_major_language_name}}</el-col>
                                <el-col :span="12">外语语种：{{item.foreign_language_name}}</el-col>
                                <el-col :span="12">外语考试种类：{{item.exam_type_name}}</el-col>
                                <el-col :span="12">外语考试成绩：{{item.score}}</el-col>
                                <el-col :span="12">小语种掌握情况：{{item.small_language_name}}</el-col>
                                <el-col :span="12">英语水平：{{item.english_level_name}}</el-col>
                                <el-col :span="12">英语考试分数：{{item.english_score}}</el-col>
                                <el-col :span="12">获得证书：{{item.has_acquire_certificates_name}}</el-col>
                                <el-col :span="12">获证日期：{{item.acquire_certificates_date}}</el-col>
                                <el-col :span="12">英语口语：{{item.english_colloquialism_name}}</el-col>
                                <el-col :span="12">听说能力：{{item.english_listen_speak_ability_name}}</el-col>
                                <el-col :span="12">读写能力：{{item.english_read_write_ability_name}}</el-col>
                                <el-col :span="12">方言掌握情况：{{item.dialect_level}}</el-col>
                                <el-col :span="12">其他外语：{{item.other_foreign_language_name}}</el-col>
                                <el-col :span="12">其他外语水平：{{item.other_foreign_language_level}}</el-col>
                                <el-col :span="12">其他说明：{{item.other_desc}}</el-col>
                            </el-row>
                        </div>
                        <!-- IT技能it -->
                        <div v-if="info.it.length!=0" v-for="(item,index) in info.it" :key="index" class="module">
                            <h4>IT技能{{index+1}}</h4>
                            <el-row>
                                <el-col :span="12">IT技能：{{item.it_ability_name+''+item.it_ability_detail_name}}</el-col>
                                <el-col :span="12">熟练程度：{{item.skill_level_name}}</el-col>
                                <el-col :span="12">使用时间：{{item.use_time_name}}</el-col>
                                <el-col :span="12">资格证书：{{item.reg_certificate_name}}</el-col>
                                <el-col :span="24">获得年份：{{item.reg_certificates_time}}</el-col>
                                <el-col :span="12">其他说明：{{item.other_desc}}</el-col>
                            </el-row>
                        </div>
                        <!-- 专业技术资格证书major -->
                        <div v-if="info.major.length!=0" v-for="(item,index) in info.major" :key="index" class="module">
                            <h4>专业技术资格证书{{index+1}}</h4>
                            <el-row>
                                <el-col :span="12">专业技术资格：{{item.major_title_name}}</el-col>
                                <el-col :span="12">资格证书：{{item.major_certificates_name}}</el-col>
                                <el-col :span="12">认证机构：{{item.certification_organization}}</el-col>
                                <el-col :span="12">获得时间：{{item.acquire_time}}</el-col>
                                <el-col :span="12">其他说明：{{item.other_desc}}</el-col>
                            </el-row>
                        </div>
                        <!-- 奖励情况reward -->
                        <div v-if="info.reward.length!=0" v-for="(item,index) in info.reward" :key="index" class="module">
                            <h4>奖励情况{{index+1}}</h4>
                            <el-row>
                                <el-col :span="12">奖励类别：{{item.type_name}}</el-col>
                                <el-col :span="12">奖励级别：{{item.level_name}}</el-col>
                                <el-col :span="12">奖励归属：{{item.ownership_name}}</el-col>
                                <el-col :span="12">奖励名称：{{item.name}}</el-col>
                                <el-col :span="12">奖励单位：{{item.company}}</el-col>
                                <el-col :span="12">获奖日期：{{item.date}}</el-col>
                                <el-col :span="12">奖励说明：{{item.desc}}</el-col>
                            </el-row>
                        </div>
                        <!-- 处罚情况punish -->
                        <div v-if="info.punish.length!=0" v-for="(item,index) in info.punish" :key="index" class="module">
                            <h4>处罚情况{{index+1}}</h4>
                            <el-row>
                                <el-col :span="12">处分时间：{{item.time}}</el-col>
                                <el-col :span="12">处分单位：{{item.company}}</el-col>
                                <el-col :span="12">处分名称：{{item.punish_name}}</el-col>
                                <el-col :span="12">处分原因：{{item.reason}}</el-col>
                                <el-col :span="12">其他说明：{{item.other_desc}}</el-col>
                            </el-row>
                        </div>
                        <!-- 项目经验project -->
                        <div v-if="info.project.length!=0" v-for="(item,index) in info.project" :key="index" class="module">
                            <h4>项目经验{{index+1}}</h4>
                            <el-row>
                                <el-col :span="12">开始日期：{{item.start_date}}</el-col>
                                <el-col :span="12">结束日期：{{item.end_date}}</el-col>
                                <el-col :span="12">项目名称：{{item.project_name}}</el-col>
                                <el-col :span="12">职务：{{item.position}}</el-col>
                                <el-col :span="12">项目职责：{{item.project_duty}}</el-col>
                                <el-col :span="12">项目描述：{{item.project_desc}}</el-col>
                            </el-row>
                        </div>
                        <!-- 发表文章与著作article -->
                        <div v-if="info.article.length!=0" v-for="(item,index) in info.article" :key="index" class="module">
                            <h4>发表文章与著作{{index+1}}</h4>
                            <el-row>
                                <el-col :span="12">学术成果/论文：{{item.paper_name}}</el-col>
                                <el-col :span="12">刊物名称：{{item.journal_name}}</el-col>
                                <el-col :span="12">专著出版社名称：{{item.publisher_name}}</el-col>
                                <el-col :span="12">刊物级别：{{item.journal_level_name}}</el-col>
                                <el-col :span="12">刊载/出版时间：{{item.publish_time}}</el-col>
                                <el-col :span="12">文章贡献：{{item.paper_contribution}}</el-col>
                            </el-row>
                        </div>
                        <!-- 培训经历train -->
                        <div v-if="info.train.length!=0" v-for="(item,index) in info.train" :key="index" class="module">
                            <h4>培训经历{{index+1}}</h4>
                            <el-row>
                                <el-col :span="12">培训开始时间：{{item.start_time}}</el-col>
                                <el-col :span="12">培训结束时间：{{item.end_time}}</el-col>
                                <el-col :span="12">培训机构：{{item.training_institution}}</el-col>
                                <el-col :span="12">培训名称：{{item.training_name}}</el-col>
                                <el-col :span="12">培训类型：{{item.training_type}}</el-col>
                                <el-col :span="12">培训内容及证书：{{item.training_content}}</el-col>
                            </el-row>
                        </div>
                        <!-- 特长爱好hobby -->
                        <div v-if="info.hobby.length!=0" v-for="(item,index) in info.hobby" :key="index" class="module">
                            <h4>特长爱好</h4>
                            <el-row>
                                <el-col :span="24">特长爱好：{{item.content}}</el-col>
                            </el-row>
                        </div>
                    </div>
                </div>
                <!-- 学生干部经历cadre -->
                <div class="item cadre">
                    <div class="title">学生干部经历</div>
                    <div class="content">
                        <div v-if="info.cadre.length!=0" v-for="(item,index) in info.cadre" :key="index" class="module">
                            <h4>学生干部经历{{index+1}}</h4>
                            <el-row>
                                <el-col :span="12">开始时间：{{item.start_time}}</el-col>
                                <el-col :span="12">结束时间：{{item.start_time}}</el-col>
                                <el-col :span="12">职务级别：{{item.duty_level_name}}</el-col>
                                <el-col :span="12">职务类别：{{item.duty_class_name}}</el-col>
                                <el-col :span="12">担任职务：{{item.position_name}}</el-col>
                                <el-col :span="12">服务人数：{{item.service_people_num}}</el-col>
                                <el-col :span="12">工作职责和业绩：{{item.responsibility_performance}}</el-col>
                            </el-row>
                        </div>
                    </div>
                </div>
                <!-- 工作实习经历work -->
                <div class="item work">
                    <div class="title">工作实习经历</div>
                    <div class="content">
                        <div v-if="info.work.length!=0" v-for="(item,index) in info.work" :key="index" class="module">
                            <h4>工作实习经历{{index+1}}</h4>
                            <el-row>
                                <el-col :span="12">开始时间：{{item.start_time}}</el-col>
                                <el-col :span="12">结束时间：{{item.start_time}}</el-col>
                                <el-col :span="12">工作/实习单位：{{item.company}}</el-col>
                                <el-col :span="12">所属行业：{{item.industry_name}}</el-col>
                                <el-col :span="12">工作/实习部门：{{item.department}}</el-col>
                                <el-col :span="12">单位性质：{{item.company_property_name}}</el-col>
                                <el-col :span="12">岗位：{{item.position}}</el-col>
                                <el-col :span="12">工作形式：{{item.work_type_name}}</el-col>
                                <el-col :span="12">职位类别：{{item.work_duty_class_name}}</el-col>
                                <el-col :span="12">职位级别：{{item.work_duty_level_name}}</el-col>
                                <el-col :span="12">绩效等级考核：{{item.performance_level_name}}</el-col>
                                <el-col :span="12">部门主管姓名：{{item.department_manager_name}}</el-col>
                                <el-col :span="12">部门主管电话：{{item.department_manager_mobile}}</el-col>
                                <el-col :span="12">离职原因：{{item.reason_for_leave}}</el-col>
                                <el-col :span="12">工作职责和业绩：{{item.responsibility_performance}}</el-col>
                            </el-row>
                        </div>
                    </div>
                </div>
                <!-- 家庭情况family -->
                <div class="item family">
                    <div class="title">家庭情况</div>
                    <div class="content">
                        <div v-if="info.family.length!=0" v-for="(item,index) in info.family" :key="index" class="module">
                            <h4>家庭情况{{index+1}}</h4>
                            <el-row>
                                <el-col :span="12">成员姓名：{{item.name}}</el-col>
                                <el-col :span="12">关系：{{item.relation_name}}</el-col>
                                <el-col :span="12">国籍：{{item.country_name}}</el-col>
                                <el-col :span="12">年龄：{{item.age?item.age+'岁':''}}</el-col>
                                <el-col :span="12">单位：{{item.company}}</el-col>
                                <el-col :span="12">职位：{{item.position}}</el-col>
                                <el-col :span="12">政治面貌：{{item.political_status_name}}</el-col>
                                <el-col :span="12">联系电话：{{item.mobile}}</el-col>
                                <el-col :span="24">贫困生情况说明：{{item.poor_student_desc}}</el-col>
                                <el-col :span="12">贫困生证明：<img v-for="(item,index) in item.certificate" :key="index" :src="item[1]" alt="">
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </div>
                <!-- 主观信息subjective -->
                <div class="item subjective">
                    <div class="title">主观信息</div>
                    <div class="content">
                        <!-- 自我评价evaluation -->
                        <div v-if="info.evaluation.length!=0" v-for="(item,index) in info.evaluation" :key="index" class="module">
                            <h4>自我评价</h4>
                            <el-row>
                                <el-col :span="24">{{item.content}}</el-col>
                            </el-row>
                        </div>
                        <!-- 就业方向employment_orientation -->
                        <div v-if="info.employment_orientation.length!=0" v-for="(item,index) in info.employment_orientation" :key="index" class="module">
                            <h4>就业方向</h4>
                            <el-row>
                                <el-col :span="24">{{item.content}}</el-col>
                            </el-row>
                        </div>
                        <!-- 职业规划career_planning -->
                        <div v-if="info.career_planning.length!=0" v-for="(item,index) in info.career_planning" :key="index" class="module">
                            <h4>职业规划</h4>
                            <el-row>
                                <el-col :span="24">{{item.content}}</el-col>
                            </el-row>
                        </div>
                        <!-- 自荐信recommend_letter -->
                        <div v-if="info.recommend_letter.length!=0" v-for="(item,index) in info.recommend_letter" :key="index" class="module">
                            <h4>自荐信</h4>
                            <el-row>
                                <el-col :span="24">{{item.content}}</el-col>
                            </el-row>
                        </div>
                    </div>
                </div>
                <!-- 职位调查investigation -->
                <div class="item investigation">
                    <div class="title">职位调查</div>
                    <div class="content">
                        <div v-if="info.investigation.length!=0" v-for="(item,index) in info.investigation" :key="index" class="module">
                            <el-row>
                                <el-col :span="12">是否在报考城市有固定居住地址</el-col>
                                <el-col :span="12">{{item.has_fixed_addr_of_city_name}}</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">请填写您的高考分数</el-col>
                                <el-col :span="12">{{item.exam_score}}</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">固定居住地址属于哪种类型</el-col>
                                <el-col :span="12">{{item.fixed_addr_type_name}}</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">您的第一志愿工作地点</el-col>
                                <el-col :span="12">{{item.first_expect_work_place[0]+'/'+item.first_expect_work_place[1]}}</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">您服从调剂的工作地点</el-col>
                                <el-col :span="12">{{item.may_assign_work_place[0]+'/'+item.may_assign_work_place[1]}}</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">笔试城市（期望参加笔试地点）</el-col>
                                <el-col :span="12">{{item.exam_city[0]+'/'+item.exam_city[1]}}</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">如为硕士研究生学历，学位属于哪种类型</el-col>
                                <el-col :span="12">{{item.master_type_name}}</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">备选境内考试城市</el-col>
                                <el-col :span="12">{{item.alternative_exam_city[0]+'/'+item.alternative_exam_city[1]}}</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">是否有亲属（包括配偶、直系血亲、三代以内旁系血亲及近姻亲）在本行工作</el-col>
                                <el-col :span="12">{{item.has_relative_in_bank_name}}</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">是否拥有外国国籍、国（境）外永久居留权或长住许可	</el-col>
                                <el-col :span="12">{{item.has_foreign_nationality_name}}</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">是否已经与其他单位签有工作合同或协议，或在其他单位工作且尚未办清离职手续</el-col>	
                                <el-col :span="12">{{item.is_working_other_name}}</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">是否曾被其他单位惩诫、开除、辞退</el-col>
                                <el-col :span="12">{{item.is_penalty_by_other_name}}</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">是否有违法、违规违纪或其他不良行为</el-col>
                                <el-col :span="12">{{item.is_illegal_name}}</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">是否有精神病、传染病、生理缺陷及其他严重疾病</el-col>
                                <el-col :span="12">{{item.has_disease_name}}</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">是否接受岗位和地域调剂</el-col>
                                <el-col :span="12">{{item.is_accept_assign_name}}</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">是否愿意按照本行应聘岗位标准执行</el-col>
                                <el-col :span="12">{{item.is_obey_bank_mark_name}}</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="24">电子签名： {{item.esign}}</el-col>
                                <el-col :span="24">到岗时间： {{item.start_work_time_name}}</el-col>
                                <el-col :span="24">招聘渠道： {{item.recruitment_channel_name}}</el-col>
                                <el-col :span="24">请为本行发展提供三个建议：</el-col>
                                <el-col :span="24">{{item.suggestion}}</el-col>
                            </el-row>
                        </div>
                    </div>
                </div>
                <div class="btns">
                    <el-button type="warning" @click="$router.push('/resume/basic/'+resume_id)">继续修改</el-button>
                    <el-button type="warning" @click="dialogExportVisible=true">导出简历</el-button>
                </div>
            </el-card>
        </div>
        <!-- 导出模板弹框 -->
        <el-dialog  title="选择导出模版" :visible.sync="dialogExportVisible" width="1200px" center custom-class="dialogExport" :close-on-click-modal="false" :close-on-press-escape="false">
            <export-template @exportTemplate="exportTemplate"/>
        </el-dialog>
    </div>
</template>
<script>
import {getResumeInfo,exportResume} from '@/api'
import ExportTemplate from '@/components/ExportTemplate'
export default {
    data() {
        return {
            resume_id: 'b909c362e1c74a97981da39f0eaa4423',
            info: {},
            dialogExportVisible: false
        }
    },
    created () {
        // this.resume_id = this.$route.params.id;
        this.initList();
    },
    components: {
        ExportTemplate,
    },
    methods: {
        initList(){
            getResumeInfo({resume_id: this.resume_id,}).then(res => {
                console.log(res.data)
                if(res.status == 100000){
                    this.info = res.data;
                }
            })
        },
        exportTemplate(params){
            this.dialogExportVisible=false;
            if(params.handle=='export'){
                exportResume({resume_id: this.resume_id,type:params.type}).then(res => {
                    if(res.status == 100000){
                        // window.location.href=res.data.url;
                        window.open(res.data.url,'_blank')
                    }
                })
            }
        }
    }
}
</script>

<style lang="scss">
.preview{
    height:100%;
    background: url("../../../static/images/bgc.png") center 50px;
    .header{
        position: fixed;
        top: 0;
        width: 100%;
        height: 60px;
        background: rgba(54,64,77,1);
        overflow: hidden;
        z-index: 1;
    }
    .main{
        padding-top: 80px;
    }
    .card{
        width: 820px;
        padding: 10px;
        margin: 0 auto 20px;
        h1{
            text-align: center;
            font-size: 22px;
        }
    }
    .item{
        .title{
            position: relative;
            font-size: 22px;
            font-weight: 500;
            color: #FEB300;
            line-height: 30px;
            padding-bottom: 4px;
            margin-top: 14px;
            margin-bottom: 24px;
            text-align: left;
            border-bottom: 4px solid #E5E5E5;
        }   
        .content .el-col{
            line-height: 42px;
            font-size: 14px;
            img{
                vertical-align: top;
                width: 100px;
                height: 140px;
                margin-right: 10px;
            }
        }
    }
    .module{
        h4{
            line-height: 30px;
            margin:10px 0;
            font-size: 14px;
            font-weight: bold;
            color: #FEB300;
        }
    }
}
</style>
