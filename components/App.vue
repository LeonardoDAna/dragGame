<template>
  <div class="All">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      a: "hello world!",
      isRouterAlive: true
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>
<style lang="scss">
.aside-component_scroll {
  overflow-x: hidden;
}
.All {
  // height: 100vh;
  padding: 0;
  margin: 0;
  // overflow: hidden;
  background-color: black;
}
.el-container {
  height: 100%;
  .el-aside {
    font-size: 20px;
    text-align: center;
    line-height: 200px;
    /* height: 100%; */
    background-color: #393134;
  }
}
.el-header {
  background-color: #635d5f;
  color: white;
  text-align: center;
  line-height: 60px;
  height: 100%;
}
.header {
  padding: 0;
}

.el-main {
  background-color: white;
  // color: #333;
  text-align: center;
  line-height: 160px;
  padding: 0;
  margin: 0;
  overflow-y: auto;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-main {
  text-align: left;
  line-height: 65px;
}
li {
  padding: 0;
}
</style>
