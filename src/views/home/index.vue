<template>
  <!-- 放置一个大容器 -->
  <!--  -->
  <el-container>
    <el-aside style="height:100vh;background-color: #323745;width:230px">
      <layout-aside></layout-aside>
    </el-aside>
    <el-container>
      <el-header>头部</el-header>
      <el-main>主体</el-main>
    </el-container>
  </el-container>
</template>

<script>
import layoutAside from '../../components/home/layout-aside'
export default {
  components: {
    'layout-aside': layoutAside
  }
}
</script>

<style>

</style>
