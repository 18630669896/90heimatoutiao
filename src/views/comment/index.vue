<template>
    <el-card>
        <bread-crumb slot="header">
            <!-- 插槽内容 -->
            <template slot="title">评论管理</template>
        </bread-crumb>
        <el-table>
            <el-table-column width="500" label="标题"></el-table-column>
            <el-table-column label="评论状态"></el-table-column>
            <el-table-column label="总评论数"></el-table-column>
            <el-table-column label="粉丝评论数"></el-table-column>
            <el-table-column label="操作"></el-table-column>
        </el-table>
    </el-card>
</template>

<script>
export default {

}
</script>

<style>

</style>
