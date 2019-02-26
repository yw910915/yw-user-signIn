<template>
  <div class="sign-up-container">
    <h1>注册</h1>
    <el-form ref="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="username">111</el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="passwordConfirm"></el-input>
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="nickname"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="mobile"></el-input>
      </el-form-item>
      <el-form-item class="v-code-container" label="验证码">
        <el-input v-model="vCode"></el-input>
        <div @click="getVCode" class="v-code" v-html="vCodeSvg"></div>
      </el-form-item>
      <el-form-item class="buttom-container">
        <el-button type="primary" @click="signUp">注册</el-button>
        <router-link to="/signIn">已有账号?去登录!</router-link>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      passwordConfirm: "",
      nickname: "",
      mobile: "",
      vCode: "",
      vCodeSvg: ""
    };
  },
  created() {
      this.getVCode()
  },
  methods: {
      getVCode(){
        this.$http.get("/users/getVCode").then(result=>{
            console.log(result)
            this.vCodeSvg=result
        })
      }
  },
};
</script>
<style lang="less">
.sign-up-container {
  margin-top: 30px;
  .v-code-container {
    .el-form-item__content {
      display: flex;
      .el-input {
        width: 60%;
      }
      .v-code {
        margin-left: 40px;
      }
    }
  }
}
</style>