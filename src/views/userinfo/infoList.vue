<template>
    <div class="infoList">
        <div class="main">
            <h2>填写简历</h2>
            <p class="subtitle">请从上往下按顺序填写，填写完后生成简历</p>
            <el-card shadow="always" class="card">
                <ul>
                    <li :class="[info.basic.status==1?'active':'']">
                        <span class="info-name fl">{{info.basic.name}}</span>
                        <span class="info-num fr">({{info.basic.finish}}/{{info.basic.total}})</span>
                        <span class="info-status fr">{{info.basic.status==0?'待填写':'已填写'}}</span>
                    </li>
                    <li :class="[info.edu.status==1?'active':'']">
                        <span class="info-name fl">{{info.edu.name}}</span>
                        <span class="info-num fr">({{info.edu.finish}}/{{info.edu.total}})</span>
                        <span class="info-status fr">{{info.edu.status==0?'待填写':'已填写'}}</span>
                    </li>
                    <li :class="[info.ability.status==1?'active':'']">
                        <span class="info-name fl">{{info.ability.name}}</span>
                        <span class="info-num fr">({{info.ability.finish}}/{{info.ability.total}})</span>
                        <span class="info-status fr">{{info.ability.status==0?'待填写':'已填写'}}</span>
                    </li>
                    <li :class="[info.cadre.status==1?'active':'']">
                        <span class="info-name fl">{{info.cadre.name}}</span>
                        <span class="info-num fr">({{info.cadre.finish}}/{{info.cadre.total}})</span>
                        <span class="info-status fr">{{info.cadre.status==0?'待填写':'已填写'}}</span>
                    </li>
                    <li :class="[info.basic.status==1?'active':'']">
                        <span class="info-name fl">{{info.work.name}}</span>
                        <span class="info-num fr">({{info.edu.finish}}/{{info.edu.total}})</span>
                        <span class="info-status fr">{{info.edu.status==0?'待填写':'已填写'}}</span>
                    </li>
                    <li :class="[info.family.status==1?'active':'']">
                        <span class="info-name fl">{{info.family.name}}</span>
                        <span class="info-num fr">({{info.family.finish}}/{{info.family.total}})</span>
                        <span class="info-status fr">{{info.family.status==0?'待填写':'已填写'}}</span>
                    </li>
                    <li :class="[info.subjective.status==1?'active':'']">
                        <span class="info-name fl">{{info.subjective.name}}</span>
                        <span class="info-num fr">({{info.subjective.finish}}/{{info.subjective.total}})</span>
                        <span class="info-status fr">{{info.subjective.status==0?'待填写':'已填写'}}</span>
                    </li>
                    <li :class="[info.investigation.status==1?'active':'']">
                        <span class="info-name fl">{{info.investigation.name}}</span>
                        <span class="info-num fr">({{info.investigation.finish}}/{{info.investigation.total}})</span>
                        <span class="info-status fr">{{info.investigation.status==0?'待填写':'已填写'}}</span>
                    </li>
                </ul>
                <div class="btns">
                    <el-button type="warning" @click="preview">预览</el-button>
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
import {getResumeStatus,exportResume} from '@/api'
import ExportTemplate from '@/components/ExportTemplate'
export default {
    data() {
        return {
            resume_id: '',
            info: {},
            dialogExportVisible: false
        }
    },
    created () {
        this.resume_id = this.$route.params.id;
        this.initList();
    },
    components: {
        ExportTemplate,
    },
    methods: {
        initList(){
            getResumeStatus({resume_id: this.resume_id}).then(res => {
                if(res.status == 100000){
                    this.info = res.data;
                }
            })
        },
        preview(){
            // 新窗口打开页面
            let routeUrl = this.$router.resolve({
                path: '/preview/'+this.resume_id
            });
            window.open(routeUrl.href, '_blank');
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
.infoList{
    .main{
        width: 700px;
        margin: 50px auto;
        text-align: center;
        h2{
            font-size: 30px;
        }
        .subtitle{
            margin: 30px 0;
            font-size: 18px;
        }
    }
    .card{
        width: 700px;
        padding: 10px 0;
        li{
            line-height: 40px;
            margin-bottom: 16px;
            padding-left: 24px;
            padding-right: 56px;
            background: rgba(245,245,245,1);
            border-radius: 5px;
            font-size: 16px;
            font-weight: 400;
            color: rgba(51,51,51,1);
            overflow: hidden;
            cursor: pointer;
            &.active{
                .info-num,.info-status{
                    color:#f60;
                }
            }
            &:hover{
                background: #FEB300; 
                color:#fff;
                .info-num,.info-status{
                    color:#fff;
                }
            }
        }
    }
   
}
</style>
