<template>
  <div class="Aside">
    <el-menu
      :default-openeds="['1', '3']"
      style="padding:0;"
      collapse-transition
      class="el-menu-vertical-demo"
    >
      <el-submenu index="1">
        <template slot="title">基本花型制作</template>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">礼仪花艺设计制作</template>
        <!-- <el-menu-item-group style="padding:0" class="secondLevel"> -->
        <div style="padding:0" class="secondLevel">
          <el-submenu index="3">
            <template slot="title">花束的设计与制作</template>
            <!-- <el-menu-item-group style="padding:0"></el-menu-item-group> -->
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">花篮的设计与制作</template>
            <!-- <el-menu-item-group style="padding:0"></el-menu-item-group> -->
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">桌花的设计与制作</template>
            <!-- <el-menu-item-group style="padding:0"></el-menu-item-group> -->
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">礼盒花式的设计与制作</template>
            <el-menu-item-group style="padding:0" class="threeLevel">
              <el-menu-item index="1" @click="goToGuidance()">设计</el-menu-item>
              <el-menu-item index="2" @click="goToPack()">成型</el-menu-item>
              <el-menu-item index="3" @click="goToOtherPack()">美化</el-menu-item>
              <el-menu-item index="4" @click="goToPack()">鉴赏</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">项目总结</template>
            <!-- <el-menu-item-group style="padding:0"></el-menu-item-group> -->
          </el-submenu>
          <!-- </el-menu-item-group> -->
        </div>
      </el-submenu>

      <el-submenu index="7">
        <template slot="title">婚庆花艺设计制作</template>
      </el-submenu>
      <el-submenu index="8">
        <template slot="title">室内环境装饰花艺制作</template>
      </el-submenu>
      <el-submenu index="9">
        <template slot="title">花艺设计与制作综合实训</template>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
// 导入 eventBus
import { mapState, mapGetters } from "vuex";
export default {
  name: "Aside",
  data() {
    return {
      a: "123 world!"
    };
  },
  created() {
    // this.isCheckedBox()
  },
  methods: {
    goToGuidance() {
      console.log(this.homePageImgUrl);
    },
    goToPack() {
      this.$router.push({ path: "/home/textOne" });
    },
    goToOtherPack() {
      this.$router.push({ path: "/home/otherPack" });
    }
  },
  computed: {
    ...mapState(["shopList"]),
    ...mapGetters(["shopcount"]),
    isCollapse() {
      if (this.$store.state.opened) {
        return JSON.parse(this.$store.state.opened);
      } else {
        return JSON.parse(sessionStorage.getItem("opened"));
      }
    }
  }
};
</script>

<style lang="scss" >
@import "../assets/style/global.scss";
.titleTag{
  height: 50px;
  line-height: 50px;
  font-size: 25px;
  color: white;
}
.titleLogo {
  display: inline-block;
  width: 25px;
  height: 25px;
  background-size: 100% 100%;
  // background-image: url('../assets/image/地球1@2x.png');
  margin-right: 30px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
  min-height: 400px;
  background-color: #393134;
}
.secondLevel {
  .el-submenu__title {
    text-align: left;
    background-color: #8F8E9E;
    color: white !important;
    font-size: 20px;
    line-height: 30px;
    .el-submenu__title:hover {
      background-color: white !important;
      color: white;
    }
  }
}
.threeLevel {
  .el-menu-item:hover {
    background-color: white !important;
  }
  .el-menu-item:focus {
    background-color: white !important;
  }
}
</style>