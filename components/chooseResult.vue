<template>
  <div class="testOne">
    <div class="unitHeader" :style="{backgroundImage:titleBgUrl}">选择结果</div>
    <div class="personBox"></div>
    <div class="floorBox">
      <div class="textArea">
        <div class="areaLeft">{{srcList[areaIndex].textTag}}</div>
        <div class="areaRight">
          <div class="imgBox" :style="{backgroundImage:srcList[areaIndex].imgSrc}" alt></div>
        </div>
      </div>
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
    <div class="successBox" @click="goComparison()" :style="{backgroundImage:successBoxUrl}">提交</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      areaIndex: sessionStorage.getItem("areaIndex"),
      successBoxUrl: "url(" + require("../assets/image/successBox.png") + ")",
      titleBgUrl: "url(" + require("../assets/image/titleBg.png") + ")",
      srcList: [
        {
          textTag: "热带植物区",
          imgSrc: "url(" + require("../assets/image/plant.png") + ")"
        },
        {
          textTag: "沙漠区",
          imgSrc: "url(" + require("../assets/image/desert.png") + ")"
        },
        {
          textTag: "气象站",
          imgSrc: "url(" + require("../assets/image/tornado.png") + ")"
        },
        {
          textTag: "花卉区",
          imgSrc: "url(" + require("../assets/image/flower.png") + ")"
        },
        {
          textTag: "环境监测区",
          imgSrc: "url(" + require("../assets/image/earth.png") + ")"
        }
      ],
      content: this.$route.query.value
    };
  },
  methods: {
    goComparison() {
      this.$router.push({
        path: "/comparison",
        query: { value: this.content }
      });
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
.floorBox {
  display: flex;
  justify-content: center;
  margin: 100px;
}
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
  //   position: absolute;
  color: #040f50;
  text-align: center;
  line-height: 50px;
  background-size: 100% 100%;
  font-size: 20px;
  top: 10px;
  right: 10px;
  width: 160px;
  height: 50px;
  margin: 0 auto;
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
  //   margin:  auto;
  color: #88d6ff;
  font-size: 20px;
  table {
    width: 80%;
    margin: 30px auto;
  }
}
.textArea {
  background-image: url("../assets/image/stepOneLeft.png");
  background-size: 100% 100%;
  width: 300px;
  height: 230px;
  display: flex;
  // margin: 20px auto;
  .areaLeft {
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    color: #facc56;
    width: 40px;
    height: 230px;
    border-right: 1px solid #2e96e1;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
  }
  .areaRight {
    text-align: center;
    width: 240px;
    height: 120px;
    .imgBox {
      width: 200px;
      height: 200px;
      margin: 0 auto;
      background-size: 100% 100%;
    }
  }
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