<template>
  <div class="sign-in-container">
    <h1>登录</h1>
    <el-form ref="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password" @keyup.native.enter="signIn"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="signIn">登录</el-button>
        <router-link to="/signUp">没有账号?去注册!</router-link>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    signIn() {
      // let username=this.username;
      // let password=this.password;
      let { username, password } = this;
      //0.点击登录按钮,进行表单校验
      if (username.trim().length === 0 || password.trim().length === 0)
        return this.$message({
          showClose: true,
          message: "用户名和密码不能为空",
          type: "error"
        });
      // 1. 将用户输入的信息提交给服务器 vue-resource  axios
      // axios
      this.$http
        .post("/users/login", {
          username,
          password
        })
        .then(result => {
          // console.log(result);
          this.$message({
            type: "success",
            message: result.data.succMsg
          });
          
          localStorage.setItem("token",result.data.token)
          localStorage.setItem("userInfo",JSON.stringify(result.data))
          this.$router.push('/home')
        })
        // .catch(err => {
        //   // console.dir(err);
        //   this.$message({
        //     showClose: true,
        //     message: err.response.data.errMsg,
        //     type: "error"
        //   });
        // });
    }
  }
};
</script>
<style lang="less" scoped>
.sign-in-container {
  width: 600px;
  height: 600px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  h1 {
    margin-top: 20px;
    height: 50px;
    text-align: center;
    font-weight: 300;
    font-size: 24px;
    color: #0094ff;
  }
  .el-button {
    margin-left: 50%;
    transform: translate(-100px, 0);
  }
}
</style>
