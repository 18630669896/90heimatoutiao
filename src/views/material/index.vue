<template>
    <el-card>
        <bread-crumb slot="header">
            <template slot="title">素材管理</template>
        </bread-crumb>
        <el-row>
            <el-tabs v-model="activeName">
                <el-tab-pane label="全部图片" name="all">全部</el-tab-pane>
                <el-tab-pane label="收藏图片" name="collect">收藏</el-tab-pane>
            </el-tabs>
        </el-row>
    </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'collect'
    }
  }
}
</script>

<style>

</style>
