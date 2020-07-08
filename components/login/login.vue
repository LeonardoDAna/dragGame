<template>
  <div class="all">
    <div class="pageHeader">传感器寻宝游戏</div>
    <div class="login">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="60px"
        class="login-form admainFrom"
      >
        <div class="title">用户登录</div>
        <el-form-item label-width="60px" prop="username" class="admainInput">
          <el-input
            type="username"
            placeholder="请输入账户"
            v-model="ruleForm.username"
            autocomplete="off"
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item label label-width="60px" prop="password" class="admainInput">
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="ruleForm.password"
            autocomplete="off"
            show-password
            prefix-icon="el-icon-s-goods"
          ></el-input>
        </el-form-item>
        <div class="adminbtn">
          <div class="leftBox">
            <input type="checkbox" /> 记住密码
          </div>
          <div class="rightBox">忘记密码?</div>
        </div>
        <div class="adminbtn">
          <el-button class="loginBtn" @click="submitForm(ruleForm)">登 录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "admin",
        password: "123456"
      },
      rules: {
        // pass: [{ validator: validatePass, trigger: "blur" }],
        // checkPass: [{ validator: validatePass2, trigger: "blur" }],
        // age: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(form) {
      // 简单做个静态判断
      if (form.username == "" || form.password == "") {
        alert("账户和密码不能为空");
      } else if (form.username === "admin" && form.password === "123456") {
        sessionStorage.setItem("updataloginStatus", true);
        this.$router.push("/home");
      } else {
        this.$message({
          message: "警告：登录密码错误",
          type: "warning"
        });
      }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss" >
@import "../../assets/style/global.scss";
.pageHeader {
  font-size: 37px;
  height: 100px;
  line-height: 100px;
  color: #05ffff;
  width: 500px;
  margin: 50px auto;
  text-align: center;
  letter-spacing: 10px;
  font-weight: 600;
}
.loginBtn {
  width: 380px;
  font-size: 21px;
  background-color: #1adcff;
  border: #05ffff;
  color: #0a3d75;
}

body {
  margin: 0;
}
.all {
  height: 100vh;
  // display: flex;
  padding: 1px;
  justify-content: center;
  align-items: center;
  background-color: #2d3a4b;
  background-image: url("../../assets/image/bg.png");
  background-size: 100% 100%;
}
.login {
  position: relative;
  margin: 0 auto;
  height: 400px;
  width: 500px;
  background-color: #030d46ad;
}
.admainInput {
  margin-left: 0;
  margin-right: 20px;
  width: 440px;
  background-color: transparent;
}
.admainFrom {
  position: absolute;
  top: 30%;
  margin-top: -25%;
  color: white;
  font-size: 10px;
}
.title {
  // margin-left: 0;
  margin: 0 auto;
  color: #05ffff;
  width: 500px;
  text-align: center;
  font-size: 27px;
  height: 70px;
  line-height: 70px;
}
.adminbtn {
  display: flex;
  margin: 10px auto;
  width: 380px;
  height: 45px;
  color: #05ffff;
  .leftBox {
    display: flex;
    width: 50%;
    justify-content: flex-start;
  }
  .rightBox {
    width: 50%;
    display: flex;
    justify-content: flex-end;
  }
}
</style>