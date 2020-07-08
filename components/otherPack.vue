<template>
  <div class="testOne">
    <div class="unitHeader" :style="{backgroundImage:titleBgUrl}">传感器介绍</div>
    <div class="successBox" :style="{backgroundImage:successBoxUrl}">下一步</div>
    <div class="boxList">
      <div class="borderBox">
        <div class="BoxTop">
          <div class="topLeft">
            <img class="topLeftImg" :src="windUrl" alt />
          </div>
          <div class="topRight">风速传感器</div>
        </div>
        <div class="BoxMain">
          <div
            class="clickBox"
            @click="pitchFn(0)"
            :style="{backgroundImage:pickList[0].chosen?clickNoUrl:clickOffUrl}"
          ></div>
        </div>
      </div>
      <div class="borderBox">
        <div class="BoxTop">
          <div class="topLeft">
            <img class="topLeftImg" :src="tornadoUrl" alt />
          </div>
          <div class="topRight">风速传感器</div>
        </div>
        <div class="BoxMain">
          <div
            class="clickBox"
            @click="pitchFn(1)"
            :style="{backgroundImage:pickList[1].chosen?clickNoUrl:clickOffUrl}"
          ></div>
        </div>
      </div>
      <div class="borderBox">
        <div class="BoxTop">
          <div class="topLeft">
            <img class="topLeftImg" :src="lightUrl" alt />
          </div>
          <div class="topRight">风速传感器</div>
        </div>
        <div class="BoxMain">
          <div
            class="clickBox"
            @click="pitchFn(2)"
            :style="{backgroundImage:pickList[2].chosen?clickNoUrl:clickOffUrl}"
          ></div>
        </div>
      </div>
      <div class="borderBox">
        <div class="BoxTop">
          <div class="topLeft">
            <img class="topLeftImg" style="width:17px;margin:17px" :src="airUrl" alt />
          </div>
          <div class="topRight">风速传感器</div>
        </div>
        <div class="BoxMain">
          <div
            class="clickBox"
            @click="pitchFn(3)"
            :style="{backgroundImage:pickList[3].chosen?clickNoUrl:clickOffUrl}"
          ></div>
        </div>
      </div>
    </div>
    <div class="boxList">
      <div class="borderBox">
        <div class="BoxTop">
          <div class="topLeft">
            <img class="topLeftImg" :src="co2Url" alt />
          </div>
          <div class="topRight">风速传感器</div>
        </div>
        <div class="BoxMain">
          <div
            class="clickBox"
            @click="pitchFn(4)"
            :style="{backgroundImage:pickList[4].chosen?clickNoUrl:clickOffUrl}"
          ></div>
        </div>
      </div>
      <div class="borderBox">
        <div class="BoxTop">
          <div class="topLeft">
            <img class="topLeftImg" :src="soilUrl" alt />
          </div>
          <div class="topRight">风速传感器</div>
        </div>
        <div class="BoxMain">
          <div
            class="clickBox"
            @click="pitchFn(5)"
            :style="{backgroundImage:pickList[5].chosen?clickNoUrl:clickOffUrl}"
          ></div>
        </div>
      </div>
      <div class="borderBox">
        <div class="BoxTop">
          <div class="topLeft">
            <img class="topLeftImg" :src="tornadoUrl" alt />
          </div>
          <div class="topRight">风速传感器</div>
        </div>
        <div class="BoxMain">
          <div
            class="clickBox"
            @click="pitchFn(6)"
            :style="{backgroundImage:pickList[6].chosen?clickNoUrl:clickOffUrl}"
          ></div>
        </div>
      </div>
      <div class="borderBox" style="background-image:none"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleBgUrl: "url(" + require("../assets/image/titleBg.png") + ")",
      lightUrl: require("../assets/image/light.png"),
      windUrl: require("../assets/image/wind.png"),
      airUrl: require("../assets/image/air.png"),
      tornadoUrl: require("../assets/image/air2.png"),
      co2Url: require("../assets/image/co2.png"),
      soilUrl: require("../assets/image/soil.png"),
      clickNoUrl: "url(" + require("../assets/image/clickNo.png") + ")",
      clickOffUrl: "url(" + require("../assets/image/clickOff.png") + ")",
      successBoxUrl: "url(" + require("../assets/image/successBox.png") + ")",
      pickList: [
        { chosen: false },
        { chosen: false },
        { chosen: false },
        { chosen: false },
        { chosen: false },
        { chosen: false },
        { chosen: false }
      ]
    };
  },
  methods: {
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
  display: flex;
}
.borderBox {
  background-image: url("../assets/image/otherPackBox.png");
  background-size: 100% 100%;
  width: 225px;
  height: 270px;
  padding: 5px;
  margin: 20px auto;
  .BoxTop {
    border-bottom: 1px solid #88d6ff;
    height: 60px;
    display: flex;
    .topLeft {
      background-color: #88d6ff;
      width: 50px;
      border-radius: 50%;
      height: 50px;
      margin: 5px;
    }
    .topRight {
      font-size: 22px;
      line-height: 50px;
      margin: 5px;
      color: #88d6ff;
    }
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