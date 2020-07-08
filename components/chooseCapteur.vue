<template>
  <div class="testOne">
    <div class="bgOpacity">
      <div class="unitHeader" :style="{backgroundImage:titleBgUrl}">选择传感器</div>
      <!-- <div class="successBox" :style="{backgroundImage:successBoxUrl}">完成</div> -->
      <div class="leftArrow" :style="{backgroundImage:leftArrowUrl}" @click="indexMin()"></div>
      <div class="rightArrow" :style="{backgroundImage:rightArrowUrl}" @click="indexAdd()"></div>
      <div class="mainBox" v-show="index=='1'">
        <div class="leftTextArea">空气温湿度传感器</div>
        <div class="rightArea">
          <div class="floor">
            <div class="textArea">
              <div style="border-bottom:1px solid #88d6ff;line-height:30px ">选型一参数:</div>
              <span>测量范围：温度-40℃-80℃ / 湿度0-100%RH</span>
              <span>精度：温度0.1℃ / 湿度3%RH</span>
              <span>通讯方式：RS485</span>
              <span>设备特点：PVC探头通气孔大，通风快，响应速度快</span>
              <span>价格：90元</span>
            </div>
            <div class="imgBox" :style="{backgroundImage:humidityAUrl}"></div>
            <div class="countBox">
              <div class="addBox" @click="addFn('A')"></div>
              <input type="text" v-model="chosen[0].num" class="inputStyle" />
              <div class="minBox" @click="minFn('A')"></div>
            </div>
          </div>
          <div class="floor">
            <div class="textArea">
              <div style="border-bottom:1px solid #88d6ff;line-height:30px ">选型二参数:</div>
              <span>测量范围：温度-40℃-60℃ / 湿度0-80%RH</span>
              <span>精度：温度0.5℃ / 湿度3%RH</span>
              <span>通讯方式：RS485</span>
              <span>设备特点：进口传感器</span>
              <span>价格：147元</span>
            </div>
            <div class="imgBox" :style="{backgroundImage:humidityBUrl}"></div>
            <div class="countBox">
              <div class="addBox" @click="addFn('B')"></div>
              <input type="text" v-model="chosen[1].num" class="inputStyle" />
              <div class="minBox" @click="minFn('B')"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="mainBox" v-show="index=='2'">
        <div class="leftTextArea">土壤温湿度传感器</div>
        <div class="rightArea">
          <div class="floor">
            <div class="textArea">
              <div style="border-bottom:1px solid #88d6ff;line-height:30px ">选型一参数:</div>
              <span>测量范围：温度-40℃-80℃/湿度0-100%RH</span>
              <span>精度：温度0.5℃/湿度3%RH</span>
              <span>通讯方式：RS485</span>
              <span>设备特点：进口芯片，进口探针</span>
              <span>价格：380元</span>
            </div>
            <div class="imgBox" :style="{backgroundImage:soilAUrl}"></div>
            <div class="countBox">
              <div class="addBox" @click="addFn('A')"></div>
              <input type="text" v-model="chosen[2].num" class="inputStyle" />
              <div class="minBox" @click="minFn('A')"></div>
            </div>
          </div>
          <div class="floor">
            <div class="textArea">
              <div style="border-bottom:1px solid #88d6ff;line-height:30px ">选型二参数:</div>
              <span>测量范围：温度-40℃-80℃/湿度0-100%RH/电导率量程0-20000us/cm</span>
              <span>精度：温度0.5℃/湿度3%RH</span>
              <span>通讯方式：RS485</span>
              <span>设备特点：进口芯片，进口探针</span>
              <span>价格：398元</span>
            </div>
            <div class="imgBox" :style="{backgroundImage:soilBUrl}"></div>
            <div class="countBox">
              <div class="addBox" @click="addFn('B')"></div>
              <input type="text" v-model="chosen[3].num" class="inputStyle" />
              <div class="minBox" @click="minFn('B')"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="mainBox" v-show="index=='3'">
        <div class="leftTextArea">光照度传感器</div>
        <div class="rightArea">
          <div class="floor">
            <div class="textArea">
              <div style="border-bottom:1px solid #88d6ff;line-height:30px ">选型一参数:</div>
              <span>光照强度：0-200000LUX</span>
              <span>光照强度精度：5%</span>
              <span>通信方式：RS485</span>
              <span>价格：236</span>
            </div>
            <div class="imgBox" :style="{backgroundImage:lightAUrl}"></div>
            <div class="countBox">
              <div class="addBox" @click="addFn('A')"></div>
              <input type="text" v-model="chosen[4].num" class="inputStyle" />
              <div class="minBox" @click="minFn('A')"></div>
            </div>
          </div>
          <div class="floor">
            <div class="textArea">
              <div style="border-bottom:1px solid #88d6ff;line-height:30px ">选型二参数:</div>
              <span>光照强度：0-65535LUX</span>
              <span>光照强度精度：5%</span>
              <span>通信方式：RS485</span>
              <span>价格：128</span>
            </div>
            <div class="imgBox" :style="{backgroundImage:lightBUrl}"></div>
            <div class="countBox">
              <div class="addBox" @click="addFn('B')"></div>
              <input type="text" v-model="chosen[5].num" class="inputStyle" />
              <div class="minBox" @click="minFn('B')"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="mainBox" v-show="index=='4'">
        <div class="leftTextArea">二氧化碳传感器</div>
        <div class="rightArea">
          <div class="floor">
            <div class="textArea">
              <div style="border-bottom:1px solid #88d6ff;line-height:30px ">选型一参数:</div>
              <span>二氧化碳量程：0-2000PPM</span>
              <span>精度：40ppm</span>
              <span>通讯方式：RS485</span>
              <span>价格：466</span>
            </div>
            <div class="imgBox" :style="{backgroundImage:CO2AUrl}"></div>
            <div class="countBox">
              <div class="addBox" @click="addFn('A')"></div>
              <input type="text" v-model="chosen[6].num" class="inputStyle" />
              <div class="minBox" @click="minFn('A')"></div>
            </div>
          </div>
          <div class="floor">
            <div class="textArea">
              <div style="border-bottom:1px solid #88d6ff;line-height:30px ">选型二参数:</div>
              <span>二氧化碳量程：0-5000PPM/span></span>
              <span>精度：3ppm</span>
              <span>通讯方式：RS485</span>
              <span>价格：:605</span>
            </div>
            <div class="imgBox" :style="{backgroundImage:CO2BUrl}"></div>
            <div class="countBox">
              <div class="addBox" @click="addFn('B')"></div>
              <input type="text" v-model="chosen[7].num" class="inputStyle" />
              <div class="minBox" @click="minFn('B')"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="mainBox" v-show="index=='5'">
        <div class="leftTextArea">风向传感器</div>
        <div class="rightArea">
          <div class="floor">
            <div class="textArea">
              <div style="border-bottom:1px solid #88d6ff;line-height:30px ">选型一参数:</div>
              <span>测量范围：16个方位</span>
              <span>响应速度：≤0.5s</span>
              <span>通讯方式：RS485</span>
              <span>使用环境：-20℃-60摄氏度</span>
              <span>价格：450</span>
            </div>
            <div class="imgBox" :style="{backgroundImage:windDirectionAUrl}"></div>
            <div class="countBox">
              <div class="addBox" @click="addFn('A')"></div>
              <input type="text" v-model="chosen[8].num" class="inputStyle" />
              <div class="minBox" @click="minFn('A')"></div>
            </div>
          </div>
          <div class="floor">
            <div class="textArea">
              <div style="border-bottom:1px solid #88d6ff;line-height:30px ">选型二参数:</div>
              <span>测量范围：8个方位</span>
              <span>响应速度：≤1s</span>
              <span>通讯方式：RS485</span>
              <span>使用环境：-15℃-60摄氏度</span>
              <span>价格：222</span>
            </div>
            <div class="imgBox" :style="{backgroundImage:windDirectionBUrl}"></div>
            <div class="countBox">
              <div class="addBox" @click="addFn('B')"></div>
              <input type="text" v-model="chosen[9].num" class="inputStyle" />
              <div class="minBox" @click="minFn('B')"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="mainBox" v-show="index=='6'">
        <div class="leftTextArea">风速传感器</div>
        <div class="rightArea">
          <div class="floor">
            <div class="textArea">
              <div style="border-bottom:1px solid #88d6ff;line-height:30px ">选型一参数:</div>
              <span>测量范围：0-30m/s</span>
              <span>风速精度：0.2m/s</span>
              <span>通讯方式：RS485</span>
              <span>分辨率：0.1m/s</span>
              <span>价格156s</span>
            </div>
            <div class="imgBox" :style="{backgroundImage:windSpeedAUrl}"></div>
            <div class="countBox">
              <div class="addBox" @click="addFn('A')"></div>
              <input type="text" v-model="chosen[10].num" class="inputStyle" />
              <div class="minBox" @click="minFn('A')"></div>
            </div>
          </div>
          <div class="floor">
            <div class="textArea">
              <div style="border-bottom:1px solid #88d6ff;line-height:30px ">选型二参数:</div>
              <span>测量范围：0-70m/s</span>
              <span>风速精度：0.2 m/s</span>
              <span>通讯方式：RS485</span>
              <span>分辨率：0.0875m/s</span>
              <span>价格283</span>
            </div>
            <div class="imgBox" :style="{backgroundImage:windSpeedBUrl}"></div>
            <div class="countBox">
              <div class="addBox" @click="addFn('B')"></div>
              <input type="text" v-model="chosen[11].num" class="inputStyle" />
              <div class="minBox" @click="minFn('B')"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="mainBox" v-show="index=='7'">
        <div class="leftTextArea">雨量传感器</div>
        <div class="rightArea">
          <div class="floor">
            <div class="textArea">
              <div style="border-bottom:1px solid #88d6ff;line-height:30px ">选型一参数:</div>
              <span>测量降水强度：≤4mm/min</span>
              <span>分辨率：0.2mm</span>
              <span>通讯方式：RS485</span>
              <span>价格：934</span>
            </div>
            <div class="imgBox" :style="{backgroundImage:rainAUrl}"></div>
            <div class="countBox">
              <div class="addBox" @click="addFn('A')"></div>
              <input type="text" v-model="chosen[12].num" class="inputStyle" />
              <div class="minBox" @click="minFn('A')"></div>
            </div>
          </div>
          <div class="floor">
            <div class="textArea">
              <div style="border-bottom:1px solid #88d6ff;line-height:30px ">选型二参数:</div>
              <span>测量降水强度：≤8mm/min</span>
              <span>分辨率：0.1mm</span>
              <span>通讯方式：RS485</span>
              <span>价格：1116</span>
            </div>
            <div class="imgBox" :style="{backgroundImage:rainBUrl}"></div>
            <div class="countBox">
              <div class="addBox" @click="addFn('B')"></div>
              <input type="text" v-model="chosen[13].num" class="inputStyle" />
              <div class="minBox" @click="minFn('B')"></div>
            </div>
          </div>
        </div>
      </div>
      <textarea
        class="explainArea"
        name
        v-show="index == 1"
        cols="30"
        rows="20"
        placeholder="请输入选择原因"
        v-model="chosen[index*2-1].explainText"
      ></textarea>
      <textarea
        class="explainArea"
        name
        v-show="index == 2"
        cols="30"
        rows="20"
        placeholder="请输入选择原因"
        v-model="chosen[index*2-1].explainText"
      ></textarea>
      <textarea
        class="explainArea"
        name
        v-show="index == 3"
        cols="30"
        rows="20"
        placeholder="请输入选择原因"
        v-model="chosen[index*2-1].explainText"
      ></textarea>
      <textarea
        class="explainArea"
        name
        v-show="index == 4"
        cols="30"
        rows="20"
        placeholder="请输入选择原因"
        v-model="chosen[index*2-1].explainText"
      ></textarea>
      <textarea
        class="explainArea"
        name
        v-show="index == 5"
        cols="30"
        rows="20"
        placeholder="请输入选择原因"
        v-model="chosen[index*2-1].explainText"
      ></textarea>
      <textarea
        class="explainArea"
        name
        v-show="index == 6"
        cols="30"
        rows="20"
        placeholder="请输入选择原因"
        v-model="chosen[index*2-1].explainText"
      ></textarea>
      <textarea
        class="explainArea"
        name
        v-show="index == 7"
        cols="30"
        rows="20"
        placeholder="请输入选择原因"
        v-model="chosen[index*2-1].explainText"
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 1,
      chosen: [
        {
          id: "空气温湿度传感器",
          model: "选型一",
          num: 0,
          status: true,
          explainText: ""
        },
        {
          id: "空气温湿度传感器",
          model: "选型二",
          num: 0,
          status: true,
          explainText: ""
        },
        {
          id: "土壤温湿度传感器",
          model: "选型一",
          num: 0,
          status: true,
          explainText: ""
        },
        {
          id: "土壤温湿度传感器",
          model: "选型二",
          num: 0,
          status: true,
          explainText: ""
        },
        {
          id: "光照度传感器",
          model: "选型一",
          num: 0,
          status: true,
          explainText: ""
        },
        {
          id: "光照度传感器",
          model: "选型二",
          num: 0,
          status: true,
          explainText: ""
        },
        {
          id: "二氧化碳传感器",
          model: "选型一",
          num: 0,
          status: true,
          explainText: ""
        },
        {
          id: "二氧化碳传感器",
          model: "选型二",
          num: 0,
          status: true,
          explainText: ""
        },
        {
          id: "风向传感器",
          model: "选型一",
          num: 0,
          status: true,
          explainText: ""
        },
        {
          id: "风向传感器",
          model: "选型二",
          num: 0,
          status: true,
          explainText: ""
        },
        {
          id: "风速传感器",
          model: "选型一",
          num: 0,
          status: true,
          explainText: ""
        },
        {
          id: "风速传感器",
          model: "选型二",
          num: 0,
          status: true,
          explainText: ""
        },
        {
          id: "雨量传感器",
          model: "选型一",
          num: 0,
          status: true,
          explainText: ""
        },
        {
          id: "雨量传感器",
          model: "选型二",
          num: 0,
          status: true,
          explainText: ""
        }
      ],
      titleBgUrl: "url(" + require("../assets/image/titleBg.png") + ")",
      leftArrowUrl: "url(" + require("../assets/image/leftArrow.png") + ")",
      rightArrowUrl: "url(" + require("../assets/image/rightArrow.png") + ")",
      humidityAUrl: "url(" + require("../assets/image/humidityA.png") + ")",
      humidityBUrl: "url(" + require("../assets/image/humidityB.png") + ")",
      soilAUrl: "url(" + require("../assets/image/soilA.png") + ")",
      soilBUrl: "url(" + require("../assets/image/soilB.png") + ")",
      lightAUrl: "url(" + require("../assets/image/lightA.png") + ")",
      lightBUrl: "url(" + require("../assets/image/lightB.png") + ")",
      CO2AUrl: "url(" + require("../assets/image/CO2A.png") + ")",
      CO2BUrl: "url(" + require("../assets/image/CO2B.png") + ")",
      rainAUrl: "url(" + require("../assets/image/rainA.png") + ")",
      rainBUrl: "url(" + require("../assets/image/rainB.png") + ")",
      windSpeedAUrl: "url(" + require("../assets/image/windSpeedA.png") + ")",
      windSpeedBUrl: "url(" + require("../assets/image/windSpeedB.png") + ")",
      windDirectionAUrl:
        "url(" + require("../assets/image/windDirectionA.png") + ")",
      windDirectionBUrl:
        "url(" + require("../assets/image/windDirectionB.png") + ")",
      humidityA_Num: 0,
      humidityB_Num: 0
      // explainText: ""
    };
  },
  methods: {
    getChooseContent() {
      let chosenList = [];
      for (let i = 0; i < this.chosen.length; i++) {
        if (this.chosen[i].num !== 0) {
          chosenList.push(this.chosen[i]);
        }
      }
      console.log("chosen", chosenList);
      // this.$router.push("/verifyResult");
      this.$router.push({
        path: "/verifyResult",
        query: { value: chosenList }
      });
    },
    goTestTwo(value) {
      this.$router.push("testTwo");
    },
    pitchFn(val) {
      this.pickList[val].chosen = !this.pickList[val].chosen;
    },
    addFn(val) {
      if (val == "A") {
        this.chosen[this.index * 2 - 2].num += 1;
      } else {
        this.chosen[this.index * 2 - 1].num += 1;
      }
    },
    minFn(val) {
      if (val == "A") {
        if (this.chosen[this.index * 2 - 2].num !== 0) {
          this.chosen[this.index * 2 - 2].num -= 1;
        } else return;
      } else {
        if (this.chosen[this.index * 2 - 1].num !== 0) {
          this.chosen[this.index * 2 - 1].num -= 1;
        } else return;
      }
    },
    indexAdd() {
      console.log(this.index * 2 - 1);
      this.index += 1;
      if (this.index > 7) {
        this.getChooseContent();
      }
    },
    indexMin() {
      if (this.index < 1) return;
      this.index -= 1;
    }
  },
  components: {},
  watch: {}
};
</script>
<style lang="scss" scoped>
.explainArea {
  width: 800px;
  margin: 0 auto;
  height: 150px;
  display: block;
  font-size: 18px;
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
  position: relative;
}
.boxList {
  display: flex;
}
.leftArrow {
  width: 60px;
  position: absolute;
  left: 10px;
  top: 50%;
  margin-top: -60px;
  height: 120px;
  background-size: 100% 100%;
}
.rightArrow {
  width: 60px;
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: -60px;
  height: 120px;
  background-size: 100% 100%;
}
.mainBox {
  margin: 0 auto;
  width: 800px;
  display: flex;
  font-size: 18px;
  .leftTextArea {
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    color: #facc56;
    width: 40px;
    height: 500px;
    // border-right: 1px solid #2e96e1;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
    border: 1px solid #877450;
    border-radius: 10px;
    background: linear-gradient(#042b45, #041624);
  }
  .rightArea {
    .floor {
      display: flex;
      .textArea {
        border: 1px solid #877450;
        border-radius: 10px;
        background: linear-gradient(#042b45, #041624);
        background-size: 100% 100%;
        width: 310px;
        height: 185px;
        color: #88d6ff;
        padding: 20px;
        margin: 10px;
        margin-left: 30px;
        span {
          display: block;
        }
      }
      .imgBox {
        width: 215px;
        height: 225px;
        background-size: 100% 100%;
        margin: 10px;
      }
    }
  }
}
.countBox {
  height: 225px;
  margin: 10px;
  .addBox {
    width: 40px;
    height: 40px;
    background-size: 100% 100%;
    background-image: url("../assets/image/add.png");
    margin: 12px auto;
  }
  .minBox {
    width: 40px;
    height: 40px;
    background-size: 100% 100%;
    margin: 12px auto;
    background-image: url("../assets/image/min.png");
  }
  .inputStyle {
    width: 100px;
    height: 50px;
    margin: 12px auto;
    border: 1px solid #877450;
    border-radius: 10px;
    outline: none;
  }
}
.bgOpacity {
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
}
</style>