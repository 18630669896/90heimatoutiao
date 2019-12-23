<template>
  <div class="login">
    <el-card class="login-card">
      <div class="title">
        <img class="login-logo" src="../../../public/img/logo_index.png" alt />
      </div>
      <!-- 表单 -->
      <el-form ref="myForm" :model="loginForm" :rules="loginRules">
        <!-- 表单域 -->
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="loginForm.code" style="width:68%" placeholder="请输入验证码"></el-input>
          <el-button style="float:right" plain>获取验证码</el-button>
        </el-form-item>
        <el-form-item prop="check">
          <el-checkbox v-model="loginForm.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button @click="submitForm" style="width:100%" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        check: false // 是否勾选同意按钮
      },
      loginRules: {
        mobile: [{ required: true, message: '请输入您的手机号' }, { pattern: /^1[3456789]\d{9}$/, message: '手机号格式不正确' }],
        code: [{ required: true, message: '请输入您的验证码' }, { pattern: /^\d{6}$/, message: '验证码格式不正确' }],
        check: [{ validator: function (rule, value, callback) {
          if (value) {
            callback()
          } else {
            callback(new Error('请勾选同意被坑按钮'))
          }
        } }]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.myForm.validate((isOK) => {
        if (isOK) {
          this.$axios({
            url: '/authorizations',
            method: 'post',
            data: this.loginForm
          }).then(result => {
            window.localStorage.setItem('user-token', result.data.token)
            this.$router.push('/index') // 跳转到首页
            // console.log('验证通过，请调用接口')
          }).catch(() => {
            this.$message({
              message: '手机号或者验证码不正确',
              type: 'warning'
            })
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  background-image: url("../../../public/img/back.jpg");
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-card {
    width: 440px;
    height: 350px;
    .title {
      text-align: center;
      margin-bottom: 30px;
      img {
        height: 45px;
      }
    }
  }
}
</style>
