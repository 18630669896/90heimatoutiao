<template>
  <div class="login">
    <el-card class="login-card">
      <div class="title">
        <img class="login-logo" src="../../../public/img/logo_index.png" alt />
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {

  }
}
</script>

<style lang = 'less' scoped>
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
      img {
        height: 45px;
      }
    }
  }
}
</style>
