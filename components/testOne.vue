<template>
  <div class="testOne">
    <div class="unitHeader" :style="{backgroundImage:titleBgUrl}">选择工作区域</div>
    <div class="boxList">
      <div class="textArea" @click="goTestTwo(0)">
        <div class="areaLeft">热带植物区</div>
        <div class="areaRight">
          <img src="../assets/image/plant.png" alt />
        </div>
      </div>
      <div
        class="borderBox"
      >该区域年平均温度在22～26℃以上，温度变化小，属于高温高湿的环境。由于气候炎热、雨量充沛，一年四季适宜植物生长, 树木分层生长，我国云南的西双版纳和海南省都属于热带植物区。在大棚的模拟环境中对该区域的温度和湿度要求比较高，光照强度要求比较大。</div>
    </div>
    <div class="boxList">
      <div class="textArea" @click="goTestTwo(1)">
        <div class="areaLeft">沙漠区</div>
        <div class="areaRight">
          <img src="../assets/image/desert.png" alt />
        </div>
      </div>
      <div
        class="borderBox"
      >该区域地面被沙所覆盖、雨水稀少、空气干燥，年降水量在250毫米以下，适合仙人掌和多肉植物生存。中国沙漠总面积约70万平方千米，拥有塔克拉玛干沙漠等八大沙漠。在大棚的模拟环境中于对沙漠区要求温度高、湿度低。</div>
    </div>
    <div class="boxList">
      <div class="textArea" @click="goTestTwo(2)">
        <div class="areaLeft">气象站</div>
        <div class="areaRight">
          <img src="../assets/image/tornado.png" alt />
        </div>
      </div>
      <div
        class="borderBox"
      >要求能随时对能够对各气象要素，常规气象要素包括风、温、湿、雨四个方面进行检测，通过网络远程数据传输和网络实时气象状况监测，为大棚的整体管理提供依据。</div>
    </div>
    <div class="boxList">
      <div class="textArea" @click="goTestTwo(3)">
        <div class="areaLeft">花卉区</div>
        <div class="areaRight">
          <img src="../assets/image/flower.png" alt />
        </div>
      </div>
      <div
        class="borderBox"
      >该区域用于花卉种植，由于花草种植对空气温湿度、土壤温湿度、二氧化碳和光照等因素要求比较高，不同植物对土壤中质量需求也不同，因此农业大棚应用最广的区域是花卉种植和农作物种植。</div>
    </div>
    <div class="boxList">
      <div class="textArea" @click="goTestTwo(4)">
        <div class="areaLeft">环境监测区</div>
        <div class="areaRight">
          <img src="../assets/image/earth.png" alt />
        </div>
      </div>
      <div
        class="borderBox"
      >该区域对大棚内各个区域的土壤温湿度、光照和二氧化碳都有监控，并且当光照不足时及时进行补光，降雨量不足或湿度不足时又能打开喷雾进行降水满足植物的生长。</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleBgUrl: "url(" + require("../assets/image/titleBg.png") + ")",
      tornadoUrl: require("../assets/image/tornado.png"),
      plantUrl: require("../assets/image/plant.png"),
      flowerUrl: require("../assets/image/flower.png"),
      desertUrl: require("../assets/image/desert.png")
    };
  },
  methods: {
    goTestTwo(value) {
      sessionStorage.setItem("areaIndex",value)
      this.$router.push("testTwo");
    }
  },
  components: {},
  watch: {}
};
</script>
<style lang="scss" scoped>
.imgBox {
  width: 100%;
  margin-top: 50px;
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
.testOne {
  background-image: url("../assets/image/bg.png");
  height: 100vh;
  background-size: 100% 100%;
}
.boxList {
  display: flex;
  margin: 10px 0;
}
.borderBox {
  text-align: center;
  background-size: 100% 100%;
  width: 710px;
  height: 96px;
  margin: 0 auto;
  border: 2px solid #897753;
  border-radius: 10px;
  background: linear-gradient(#012c42, #041624);
  padding: 10px;
  color: #88d6ff;
  font-size: 18px;
}
.textArea {
  background-image: url("../assets/image/stepOneLeft.png");
  background-size: 100% 100%;
  width: 230px;
  height: 120px;
  display: flex;
  // margin: 20px auto;
  .areaLeft {
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    color: #facc56;
    width: 40px;
    height: 120px;
    border-right: 1px solid #2e96e1;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
  }
  .areaRight {
    text-align: center;
    width: 190px;
    height: 120px;
    img {
      width: 100px;
    }
  }
}
</style>