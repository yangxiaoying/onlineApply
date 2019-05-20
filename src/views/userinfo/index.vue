<template>
    <div class="userInfo">
        <div class="header">header</div>
        <router-view/>
        <div class="footer">footer</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.userInfo{
    height:100%;
    background: url("../../../static/images/back_top.png") center 50px;
}
</style>
