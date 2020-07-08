<template>
  <div class="testTwo">
    <div class="headerBar">
      <div class="barLeft">
        <span>陈鑫</span>
      </div>
      <div class="barRight">
        <el-button type="primary" @click="goBack()">返回</el-button>
      </div>
    </div>
    <div>
      <table>
        <tr>
          <td>过程记录</td>
        </tr>
      </table>
    </div>
    <div class="studentWorkImg" :style="{backgroundImage:chenxin}"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: "hello world!",
      dialogVisible: false,
      zhangxinyi: "url(" + require("../assets/image/zhangxinyi.png"),
      chenxin: "url(" + require("../assets/image/xuxin2.jpg"),
      point25: "url(" + require("../assets/image/25-30.png"),
      point36: "url(" + require("../assets/image/36.7-70.png")
    };
  },
  methods: {
    goBack() {
      this.$router.push("textOne");
    },
    dialogView() {
      this.dialogVisible = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.testTwo {
}
.headerBar {
  display: flex;
}
.barLeft {
  height: 60px;
  border-bottom: 1px solid #416771;
  width: 80%;
  span {
    font-size: 20px;
    font: bold;
  }
}
.barRight {
  height: 60px;
  width: 20%;
  .el-button {
    margin-left: 30px;
    width: 100px;
  }
}
table {
  tr {
    td {
      font-size: 20px;
    }
  }
}
.studentWorkImg {
  background-size: 100% 100%;
  height: 600px;
  width: 400px;
  margin: 0 auto;
}
.workDetail {
  margin-top: 40px;
  table {
    border-collapse: collapse;
    tr {
      line-height: 40px;
      td {
        text-align: center;
        font-size: 16px;
      }
    }
    th {
      width: 150px;
      text-align: center;
      background-color: #3a7280;
      color: white;
    }
  }
}
.point {
  background-size: 100% 100%;
  width: 150px;
  height: 150px;
}
.content {
  p {
    line-height: 20px;
    font-size: 20px;
  }
}
</style>