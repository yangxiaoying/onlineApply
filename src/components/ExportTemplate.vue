<template>
    <div class="template-box">
        <ul>
            <li v-for="(item,index) in exportList" :key="index" @click="selectItem(index)" :class="[index==selectIndex?'active':'']">
                <img :src="item.src" alt="">
            </li>
        </ul>
        <p class="tip">注：通用型简历适合大部分银行网申，如有指定银行，请选择各银行模版进行导出。本简历导出格式为PDF。</p>
        <span slot="footer" class="dialog-footer">
            <el-button @click="exportTemplate('cancel')">取 消</el-button>
            <el-button type="warning" @click="exportTemplate('export')">导 出</el-button>
        </span>
    </div>
</template>

<script>
    import {exportResume} from '@/api'
    export default {
        data() {
            return {
                name: 'ExportTemplate',
                selectIndex: 0,
                exportList:[
                    {src:'../../static/images/export01.jpg',type:'default'},
                    {src:'../../static/images/export02.jpg',type:'boc'},
                    {src:'../../static/images/export03.jpg',type:'abc'},
                    {src:'../../static/images/export04.jpg',type:'icbc'},
                    {src:'../../static/images/export05.jpg',type:'ccb'},
                    {src:'../../static/images/export06.jpg',type:'comm'}
                ]
            }
        },
        methods: {
            selectItem(index){
                this.selectIndex = index;
            },
            exportTemplate(params){
                this.$emit('exportTemplate',{'handle':params,type:this.exportList[this.selectIndex].type});
            }
        }
    }
</script>

<style lang="scss" scoped>
.template-box{
    text-align: center;
    li{
        width: 262px;
        height: 90px;
        margin: 0 29px 38px;
        display: inline-block;
        cursor: pointer;
        border-radius: 8px;
        border: 1px solid #ccc;
        overflow: hidden;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        &.active{
            border: none;
            -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.3);
            box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.3);
        }
        img{
            width: 100%;
            height: 100%;
        }
    }
    .tip{
        color: #D0021B;
        font-size: 14px;
        margin-bottom: 50px;
    }
}

</style>