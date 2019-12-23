<template>
    <el-row class="layout" type="flex" align="middle">
        <el-col class="left" :span="12">
            <i class="el-icon-s-fold"></i>
            <span>江苏传智播客教育科技股份有限公司</span>
        </el-col>
        <el-col class="right" :span="12">
            <el-row type="flex" justify="end" align="middle">
                <img :src="userInfo.photo?userInfo.photo:defaultImg" alt="">
                <el-dropdown @command="clickMenu">
                    <span>{{userInfo.name}}</span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="userInfo">个人信息</el-dropdown-item>
                        <el-dropdown-item command="git">git地址</el-dropdown-item>
                        <el-dropdown-item command="lgout">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {}, // 定义一个对象接收用户信息
      defaultImg: require('../../assets/img/header.jpg')
    }
  },
  methods: {
    clickMenu (command) {
      if (command === 'userInfo') {
        // 去往个人信息页面
      } else if (command === 'git') {
        window.location.href = 'https://github.com/18630669896/90heimatoutiao'
      } else {
        window.localStorage.removeItem('user-token') // 删除令牌
        this.$router.push('/login') // 跳转到首页
      }
      // this.$message('触发了' + command)
    }
  },
  created () {
    // let token = window.localStorage.getItem('user-token')
    this.$axios({
      url: '/user/profile'
      // headers: {
      //   Authorization: `Bearer ${token}`
      // }
    }).then(result => {
      this.userInfo = result.data
    })
  }
}
</script>

<style lang="less" scoped>
.layout{
    height: 60px;
    .left{
        font-size: 20px;
        span{
            font-size:16px;
            margin-left: 5px;

        }
    }
    .right{
        img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 5px;
        }
    }
}
</style>
