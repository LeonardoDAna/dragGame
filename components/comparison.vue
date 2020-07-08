<template>
  <div class="testOne">
    <div class="unitHeader" :style="{backgroundImage:titleBgUrl}">答案对比</div>
    <div class="successBox" @click="goResult()" :style="{backgroundImage:successBoxUrl}"></div>
    <div class="headerTag" :style="{backgroundImage:headerTagUrl}">{{teacherAnswer[areaIndex].tag}}</div>
    <div class="floorBox">
      <div class="floorLeft">
        <img src="../assets/image/teacher.png" alt />
        <p>正确答案</p>
      </div>
      <div class="floorRight">
        <div class="textBox" v-for="(item,i) in teacherAnswer[areaIndex].chosen" :key="i">
          <table>
            <tr>
              <td width="200px">{{item.id}}</td>
              <td>{{item.model}}</td>
              <td>x{{item.num}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div class="floorBox">
      <div class="floorLeft">
        <img src="../assets/image/personImg.png" alt style="width:100px" />
        <p>学生答案</p>
      </div>
      <div class="floorRight">
        <div
          class="textBox"
          v-for="(item,i) in content"
          :key="i"
          :style="{border:(item.status?'1px solid red':'')}"
        >
          <table>
            <tr>
              <td width="200px">{{item.id}}</td>
              <td>{{item.model}}</td>
              <td>x{{item.num}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      successBoxUrl: "url(" + require("../assets/image/home.png") + ")",
      titleBgUrl: "url(" + require("../assets/image/titleBg.png") + ")",
      headerTagUrl: "url(" + require("../assets/image/headerTag.png") + ")",
      content: this.$route.query.value,
      // content: [
      //   { status: true, id: "空气温湿度传感器", num: 1, model: "选型一" },
      //   { status: true, id: "光照度传感器", num: 1, model: "选型二" },
      //   { status: true, id: "土壤温湿度传感器", num: 1, model: "选型二" }
      // ],
      areaIndex: sessionStorage.getItem("areaIndex"),
      teacherAnswer: [
        {
          tag: "热带植物区",
          chosen: [
            { id: "空气温湿度传感器", num: 1, model: "选型一" },
            { id: "光照度传感器", num: 1, model: "选型二" },
            { id: "土壤温湿度传感器", num: 1, model: "选型二" }
          ]
        },
        {
          id: "",
          tag: "沙漠区",
          chosen: [
            { id: "空气温湿度传感器", num: 1, model: "选型一" },
            { id: "光照度传感器", num: 1, model: "选型二" },
            { id: "二氧化碳传感器", num: 1, model: "选型一" }
          ]
        },
        {
          id: "",
          tag: "气象站",
          chosen: [
            { id: "风向传感器", num: 1, model: "选型二" },
            { id: "风速传感器", num: 1, model: "选型一" },
            { id: "雨量传感器", num: 1, model: "选型一" },
            { id: "光照度传感器", num: 1, model: "选型一" },
            { id: "二氧化碳传感器", num: 1, model: "选型二" },
            { id: "空气温湿度传感器", num: 1, model: "选型一" }
          ]
        },
        {
          id: "",
          tag: "花卉区",
          chosen: [
            { id: "空气温湿度传感器", num: 1, model: "选型一" },
            { id: "土壤温湿度传感器", num: 1, model: "选型二" },
            { id: "二氧化碳传感器", num: 1, model: "选型一" }
          ]
        },
        {
          id: "",
          tag: "环境监测区",
          chosen: [
            { id: "空气温湿度传感器", num: 2, model: "选型一" },
            { id: "光照度传感器", num: 1, model: "选型二" },
            { id: "土壤温湿度传感器", num: 1, model: "选型二" },
            { id: "二氧化碳传感器", num: 1, model: "选型一" }
          ]
        }
      ]
    };
  },
  methods: {
    goResult() {
      this.$router.push({ path: "/home" });
    },
    goTestTwo(value) {
      this.$router.push("testTwo");
    },
    pitchFn(val) {
      this.pickList[val].chosen = !this.pickList[val].chosen;
    },
    comparison() {
      let correctAnswer = this.teacherAnswer[this.areaIndex].chosen;
      let studentAnswer = this.content;

      console.log(correctAnswer.length, studentAnswer.length);
      for (let i = 0; i < correctAnswer.length; i++) {

        for (let j = 0; j < studentAnswer.length; j++) {
          console.log(correctAnswer[i].id, studentAnswer[j].id);
          console.log(correctAnswer[i].model, studentAnswer[j].model);
          console.log(correctAnswer[i].num, studentAnswer[j].num);
          if (
            correctAnswer[i].id == studentAnswer[j].id &&
            correctAnswer[i].model == studentAnswer[j].model &&
            correctAnswer[i].num == studentAnswer[j].num
          ) {
            // debugger;
            studentAnswer[j].status = false;
          }
        }
      }

      console.log(this.content);
    }
  },
  components: {},
  watch: {},
  mounted() {
    this.comparison();
  }
};
</script>
<style lang="scss" scoped>
.floorBox {
  display: flex;
  width: 90%;
  padding: 20px;
  margin: 20px auto;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.452);
  .floorLeft {
    text-align: center;
    width: 200px;
    img {
    }
    p {
      margin: 0;
      padding-left: 50px;
      text-align: left;
      color: #f6e098;
      font-size: 20px;
    }
  }
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
.headerTag {
  width: 1000px;
  background-size: 100% 100%;
  height: 5px;
  margin: 10px auto;
  color: #f3dc86;
  text-align: center;
  line-height: 5px;
  font-size: 20px;
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
.textBox {
  border: 1px solid #877450;
  border-radius: 10px;
  background: linear-gradient(#042b45, #041624);
  background-size: 100% 100%;
  width: 600px;
  height: 75px;
  margin: 10px auto;
  color: #88d6ff;
  font-size: 20px;
  table {
    width: 80%;
    margin: 20px auto;
  }
}
.successBox {
  position: absolute;
  color: #040f50;
  text-align: center;
  line-height: 50px;
  background-size: 100% 100%;
  font-size: 20px;
  top: 10px;
  left: 10px;
  width: 50px;
  height: 50px;
  font-weight: 600;
}
.testOne {
  background-image: url("../assets/image/bg.png");
  //   height: 100vh;
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