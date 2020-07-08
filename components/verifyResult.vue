<template>
  <div class="testOne">
    <div class="unitHeader" :style="{backgroundImage:titleBgUrl}">确认传感器</div>
    <div class="successBox" @click="goResult()" :style="{backgroundImage:successBoxUrl}">下一步</div>
    <div class="personBox"></div>
    <div class="boxList">
      <table>
        <tr v-for="item in content" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.model}}</td>
          <td>x{{item.num}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      successBoxUrl: "url(" + require("../assets/image/successBox.png") + ")",
      titleBgUrl: "url(" + require("../assets/image/titleBg.png") + ")",
      content: this.$route.query.value
    };
  },
  methods: {
    goResult() {
        this.$router.push({path:"/chooseResult",query:{value:this.content}});
    },
    goTestTwo(value) {
      this.$router.push("testTwo");
    },
    pitchFn(val) {
      this.pickList[val].chosen = !this.pickList[val].chosen;
    }
  },
  components: {},
  watch: {}
};
</script>
<style lang="scss" scoped>
.personBox {
  position: absolute;
  width: 90px;
  height: 200px;
  bottom: 30px;
  left: 50px;
  background-image: url("../assets/image/personImg.png");
  background-size: 100% 100%;
}
.topLeftImg {
  width: 30px;
  margin: 10px;
}
.unitHeader {
  width: 500px;
  height: 100px;
  background-size: 100% 100%;
  margin: 0 auto;
  color: #040f50;
  text-align: center;
  line-height: 80px;
  font-size: 50px;
  font-weight: 600;
}
.successBox {
  position: absolute;
  color: #040f50;
  text-align: center;
  line-height: 50px;
  background-size: 100% 100%;
  font-size: 20px;
  top: 10px;
  right: 10px;
  width: 100px;
  height: 50px;
  font-weight: 600;
}
.testOne {
  background-image: url("../assets/image/bg.png");
  height: 100vh;
  background-size: 100% 100%;
}
.boxList {
  border: 1px solid #877450;
  border-radius: 10px;
  background: linear-gradient(#042b45, #041624);
  background-size: 100% 100%;
  width: 600px;
  // height: 205px;
  margin: 100px auto;
  color: #88d6ff;
  font-size: 20px;
  table {
    width: 80%;
    margin: 30px auto;
  }
}
.textArea {
  background-image: url("../assets/image/textArea.png");
  background-size: 100% 100%;
  width: 230px;
  height: 175px;
  margin: 20px auto;
}
.BoxMain {
  position: relative;
  height: 205px;
  .clickBox {
    width: 35px;
    height: 35px;
    background-size: 100% 100%;
    position: absolute;
    right: 5px;
    bottom: 5px;
  }
}
</style>