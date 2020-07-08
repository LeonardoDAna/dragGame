<template>
  <div>
    <transition name="component-fade" mode="out-in">
      <div class="imgLogo">
        <div class="imgLogoBox" :style="{backgroundImage:titleUrl}"></div>
        <span>礼仪花艺学习平台</span>
      </div>
    </transition>
    <!-- <div class="navbar">礼仪花艺学习平台</div> -->
    <div class="usericon">
      <el-dropdown @command="handleCommand">
        <span style="float:right">
          <div class="titleLogo">翟老师</div>
        </span>
        <span class="el-dropdown-link">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
        </span>
        <el-dropdown-menu slot="dropdown">
          <!-- <el-dropdown-item></el-dropdown-item> -->
          <el-dropdown-item>更改密码</el-dropdown-item>
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>账号设置</el-dropdown-item>
          <el-dropdown-item command="/">退出登入</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
// 导入 eventBus
export default {
  name: "Navbar",
  data() {
    return {};
  },
  created() {
    // this.isCheckedBox()
  },
  methods: {
    handleCommand: function(command) {
      this.$router.push(command);
    },
    toggleClick: function() {
      this.$store.commit(
        "updataopenedStatus",
        (this.$store.state.opened = !this.$store.state.opened)
      );
      console.log(this.$store.state.opened + "!!!");
    }
  },
  computed: {
    opened() {
      console.log(this.$store.state.opened);

      return this.$store.state.opened;
    }
  }
};
</script>
<style lang="scss" scoped>
.imgLogo {
  // width: 250px;
  display: flex;
  height: 60px;
  background-color: #635d5f;
  color: white;
  float: left;
  font-size: 30px;
  span {
    display: block;
    margin-left: 40px;
  }
  .imgLogoBox {
    background-size: 100% 100%;
    width: 60px;
    height: 60px;
    // margin: 0 auto;
  }
}
.navbar {
  float: left;
  background-color: #635d5f;
}
.usericon {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}
.titleLogo {
  // display: inline-block;
  width: 100px;
  height: 25px;
  background-size: 100% 100%;
  float: left;
}
.imgLogoMin {
  width: 65px;
  height: 60px;
  background-color: #4a5b6b;
  color: white;
  float: left;
  font-size: 20px;
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>