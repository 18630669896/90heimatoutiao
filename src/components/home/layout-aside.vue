<template>
    <div class="layout-aside">
        <div class="title">
            <img src="../../assets/img/logo_admin.png" alt="">
        </div>
        <!-- <el-menu background-color=" #323745" text-color="#adafb5" active-text-color="#ffd04b"> -->
        <el-menu background-color="#353b4e" text-color="#adafb5" active-text-color="#ffd04b">
            <el-menu-item>首页</el-menu-item>
            <el-submenu index="1">
                <span slot="title">内容管理</span>
                <el-menu-item>发布文章</el-menu-item>
                <el-menu-item>内容列表</el-menu-item>
                <el-menu-item>评论列表</el-menu-item>
                <el-menu-item>素材管理</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <span slot="title">粉丝管理</span>
                <el-menu-item>图文概况</el-menu-item>
                <el-menu-item>粉丝概况</el-menu-item>
                <el-menu-item>粉丝画像</el-menu-item>
                <el-menu-item>粉丝列表</el-menu-item>
            </el-submenu>
            <el-menu-item>账户信息</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
    .layout-aside{
        width: 230px;
        .el-menu{
            border-right: none;
        }
        .title{
            // background-color:  #2e2f32;
            text-align: center;
            padding: 10px 0;
            img{
                height: 35px;

            }
        }
    }
</style>
