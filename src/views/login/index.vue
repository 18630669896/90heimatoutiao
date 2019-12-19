<template>
  <div class="login">
    <el-card class="login-card">
      <div class="title">
        <img class="login-logo" src="../../../public/img/logo_index.png" alt />
      </div>
      <!-- 表单 -->
      <el-form>
        <!-- 表单域 -->
        <el-form-item>
          <el-input placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input style="width:68%" placeholder="请输入验证码"></el-input>
          <el-button style="float:right" plain>获取验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox>我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button style="width:100%" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {

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
