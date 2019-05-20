<template>
    <div class="resume">
        <div class="header"></div>
        <div class="main">
            <div class="sidebar">
                <div class="title">填写向导</div>
                <el-menu :default-active="1" text-color="#333" active-text-color="#333">
                    <el-menu-item v-for="(item,index) in menuList" :key="index" :index="item.index" @click="linkTo(item.path)">
                        <img :src="item.src" alt="">
                        <span slot="title">{{item.title}}</span>
                        <i v-if="item.isCompleted"></i>
                    </el-menu-item>
                </el-menu>
                <el-button type="warning" @click="preview">预览</el-button>
                <el-button type="warning" @click="dialogExportVisible=true">导出简历</el-button>
            </div>
            <el-card shadow="always" class="content">
                <router-view/>
            </el-card>
        </div>
        <!-- 导出模板弹框 -->
        <el-dialog title="选择导出模版" :visible.sync="dialogExportVisible" width="1200px" center custom-class="dialogExport" :close-on-click-modal="false" :close-on-press-escape="false">
            <export-template @exportTemplate="exportTemplate" />
        </el-dialog>
    </div>
</template>
<script>
import { exportResume,getResumeStatus } from "@/api";
import ExportTemplate from "@/components/ExportTemplate";
export default {
  data() {
    return {
      resume_id: "",
      dialogExportVisible: false,
      menuList: [
        {
            index: 1,
            src: '../../../static/images/icon01.png',
            title: '基本信息',
            path: 'basic/',
            isCompleted: false
        },
        {
            index: 2,
            src: '../../../static/images/icon02.png',
            title: '教育信息',
            path: 'edu/',
            isCompleted: false
        },
        {
            index: 3,
            src: '../../../static/images/icon03.png',
            title: '能力信息',
            path: 'ability/',
            isCompleted: false
        },
        {
            index: 4,
            src: '../../../static/images/icon04.png',
            title: '学生干部经历',
            path: 'cadre/',
            isCompleted: false
        },
        {
            index: 5,
            src: '../../../static/images/icon05.png',
            title: '工作实习经历',
            path: 'work/',
            isCompleted: false
        },
        {
            index: 6,
            src: '../../../static/images/icon06.png',
            title: '家庭情况',
            path: 'family/',
            isCompleted: false
        },
        {
            index: 7,
            src: '../../../static/images/icon07.png',
            title: '主观信息',
            path: 'subjective/',
            isCompleted: false
        },
        {
            index: 8,
            src: '../../../static/images/icon08.png',
            title: '职位调查',
            path: 'investigation/',
            isCompleted: false
        }
      ],
    };
  },
  created() {
    this.resume_id = this.$route.params.id;
    this.initList();
  },
  components: {
    ExportTemplate
  },
  methods: {
    preview() {
      // 新窗口打开页面
      // this.$router.push('/resume/preview/'+this.resume_id);
      // let routeUrl = this.$router.resolve({
      //     path: '/resume/preview/',
      //     query: {resume_id:this.resume_id}
      // });
      let routeUrl = this.$router.resolve({
        path: "/preview/" + this.resume_id
      });
      window.open(routeUrl.href, "_blank");
    },
    exportTemplate(params) {
      this.dialogExportVisible = false;
      if (params.handle == "export") {
        exportResume({ resume_id: this.resume_id, type: params.type }).then(
          res => {
            if (res.status == 100000) {
              // window.location.href=res.data.url;
              window.open(res.data.url, "_blank");
            }
          }
        );
      }
    },
    linkTo(params){
        this.$router.push('/resume/'+params+this.resume_id);
    },
    initList(){
        getResumeStatus({ resume_id: this.resume_id}).then(res => {
            if (res.status == 100000) {
                if(res.data.basic.status == 1){
                    this.menuList[0].isCompleted = true;
                }else{
                    this.menuList[0].isCompleted = false;
                }

                if(res.data.edu.status == 1){
                    this.menuList[1].isCompleted = true;
                }else{
                    this.menuList[1].isCompleted = false;
                }

                if(res.data.ability.status == 1){
                    this.menuList[2].isCompleted = true;
                }else{
                    this.menuList[2].isCompleted = false;
                }

                if(res.data.cadre.status == 1){
                    this.menuList[3].isCompleted = true;
                }else{
                    this.menuList[3].isCompleted = false;
                }

                if(res.data.work.status == 1){
                    this.menuList[4].isCompleted = true;
                }else{
                    this.menuList[4].isCompleted = false;
                }

                if(res.data.family.status == 1){
                    this.menuList[5].isCompleted = true;
                }else{
                    this.menuList[5].isCompleted = false;
                }

                if(res.data.subjective.status == 1){
                    this.menuList[6].isCompleted = true;
                }else{
                    this.menuList[6].isCompleted = false;
                }

                if(res.data.investigation.status == 1){
                    this.menuList[7].isCompleted = true;
                }else{
                    this.menuList[7].isCompleted = false;
                }
            }
          }
        );
    }
  }
};
</script>

<style lang="scss">
.resume {
    height: 100%;
    background: url("../../../static/images/bgc.png") center 50px;
    .header {
        position: fixed;
        top: 0;
        width: 100%;
        height: 60px;
        background: rgba(54, 64, 77, 1);
        overflow: hidden;
        z-index: 1;
    }
    .main {
        padding-top: 80px;
        .content{
            width: 880px;
            padding: 32px;
            margin: 30px auto 0;
            background: #fff;
        }
    }
    .sidebar {
        position: fixed;
        top: 100px;
        left: 0;
        width: 140px;
        height: 470px;
        border-radius: 4px;
        background: #fff;
        text-align: center;
        .title {
            font-size: 14px;
            line-height: 40px;
            font-weight: bolder;
            color: #333;
        }
        .el-button {
            width: 80px;
            height: 30px;
            line-height: 30px;
            padding: 0;
            color: #fff;
            margin-left: 0;
            margin-bottom: 10px;
        }
        .el-menu{
            margin-bottom: 20px;
            background: #ddd;
            border: 0;
            .el-menu-item{
                position: relative;
                height: 40px;
                line-height: 40px;
                padding:0 0 0 10px !important;
                text-align:left;
                font-size: 12px;
                &:focus, &:hover {
                    background-color: #FFEFC8 ;
                }
                &.is-active {
                    background-color: #FFEFC8 ;
                }
                img{
                    width:12px;
                    margin-right:6px;
                }
                i{  
                    position: absolute;
                    right:10px;
                    top:14px;
                    width: 14px;
                    height: 12px;
                    background: url("../../../static/images/done.png") center no-repeat;
                    background-size: 100%;
                }
            }
        }
    }
}
</style>
