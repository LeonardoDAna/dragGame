<template>
  <div class="testOne">
    <div class="bgOpacity">
      <div class="unitHeader" :style="{backgroundImage:titleBgUrl}">图文配对</div>
      <div class="boxList" style="margin-top:100px">
        <div class="borderBox" :style="{backgroundImage:AUrl}"></div>
        <div class="borderBox" :style="{backgroundImage:BUrl}"></div>
        <div class="borderBox" :style="{backgroundImage:CUrl}"></div>
        <div class="borderBox" :style="{backgroundImage:DUrl}"></div>
        <div class="borderBox" :style="{backgroundImage:EUrl}"></div>
      </div>
      <div class="boxList">
        <div class="textArea" data-text="二氧化碳传感器"></div>
        <div class="textArea" data-text="风速传感器"></div>
        <div class="textArea" data-text="风向传感器"></div>
        <div class="textArea" data-text="光照传感器"></div>
        <div class="textArea" data-text="空气温湿度传感器"></div>
      </div>
      <div style="display:flex">
        <div>
          <div class="boxList" style="width:400px">
            <div class="borderBox" :style="{backgroundImage:FUrl}"></div>
            <div class="borderBox" :style="{backgroundImage:GUrl}"></div>
          </div>
          <div class="boxList" style="width:400px">
            <div class="textArea" data-text="土壤温湿度传感器"></div>
            <div class="textArea" data-text="雨量传感器"></div>
          </div>
        </div>
        <div class="footerBox">
          <div class="footRight">
            <div class="draggableBox" draggable="true" data-text="光照传感器">光照传感器</div>
            <div class="draggableBox" draggable="true" data-text="风速传感器">风速传感器</div>
            <div class="draggableBox" draggable="true" data-text="空气温湿度传感器">空气温湿度传感器</div>
            <div class="draggableBox" draggable="true" data-text="雨量传感器">雨量传感器</div>
            <div class="draggableBox" draggable="true" data-text="二氧化碳传感器">二氧化碳传感器</div>
            <div class="draggableBox" draggable="true" data-text="土壤温湿度传感器">土壤温湿度传感器</div>
            <div class="draggableBox" draggable="true" data-text="风向传感器">风向传感器</div>
          </div>
          <div class="footLeft">
            <div class="personImg"></div>
            <div class="personText">请拖动文字到对应的图片下</div>
          </div>
        </div>
      </div>

      <audio
        ref="secondMachine"
        src="../assets/audio/success.mp3"
        class="audio"
        muted="muted"
        preload="auto"
      />
      <audio
        ref="failMachine"
        src="../assets/audio/fail.mp3"
        class="audio"
        muted="muted"
        preload="auto"
      />
    </div>
  </div>
</template>

<script>
// import "../config/tbl.js";
import $ from "jquery";
export default {
  data() {
    return {
      titleBgUrl: "url(" + require("../assets/image/titleBg.png") + ")",
      AUrl: "url(" + require("../assets/image/A.png") + ")",
      BUrl: "url(" + require("../assets/image/B.png") + ")",
      CUrl: "url(" + require("../assets/image/C.png") + ")",
      DUrl: "url(" + require("../assets/image/D.png") + ")",
      EUrl: "url(" + require("../assets/image/E.png") + ")",
      FUrl: "url(" + require("../assets/image/F.png") + ")",
      GUrl: "url(" + require("../assets/image/G.png") + ")",
      zIndex: 0,
      times: 0
    };
  },
  methods: {
    goTestTwo(value) {
      this.$router.push("testTwo");
    },
    dragFn() {
      let _this = this;
      //解决火狐弹出新选项卡的问题
      $(".testOne").bind("drop", function(event) {
        event.preventDefault();
        event.stopPropagation();
      });

      //拖拽开始时将被拖拽元素透明度设置为50%
      $(".footRight > .draggableBox").bind("touchstart", function(event) {
        event.preventDefault(); //阻止其他事件
        let audio = _this.$refs.secondMachine;
        audio.load();
        let failAudio = _this.$refs.failMachine;
        failAudio.load();
        var event = event.originalEvent;
        event.target.style.opacity = 0.5;
      });

      //拖拽过程不执行任何操作。将会被持续触发
      $(".footRight > .draggableBox").bind("touchmove", function(e) {
        // 如果这个元素的位置内只有一个手指的话
        //console.log(e.targetTouches)
        console.log(
          event.targetTouches[0].clientX +
            "/" +
            event.targetTouches[0].clientY +
            "/" +
            event.targetTouches[0].pageX +
            "/" +
            event.targetTouches[0].pageY
        );
        if (e.targetTouches.length == 1) {
          var touch = e.targetTouches[0]; // 把元素放在手指所在的位置
          $(this).css("position", "absolute");
          $(this).css(
            "left",
            touch.pageX - parseInt($(this).width()) / 2 + "px"
          );
          $(this).css(
            "top",
            touch.pageY - parseInt($(this).height()) / 2 + "px"
          );
          let x1 = touch.clientX; //鼠标移动时候的X值
          let y1 = touch.clientY; //鼠标移动时候的Y值
          var xR = x1 - touch.offsetLeft; //转换后的鼠标移动x坐标
          var yR = y1 - touch.offsetTop; //转换后的鼠标移动y坐标
          console.log(touch);

          touch.target.style.zIndex = this.zIndex++;

          var staticDiv = document.getElementsByClassName("textArea");
          for (let i = 0; i < staticDiv.length; i++) {
            console.log("x1", x1, "y1", y1);

            console.log(staticDiv[i].offsetLeft, staticDiv[i].offsetTop);

            staticDiv[i].style.transform = "";
            staticDiv[i].style.boxShadow = "";
            if (
              x1 > staticDiv[i].offsetLeft &&
              x1 < staticDiv[i].offsetLeft + 120 &&
              y1 > staticDiv[i].offsetTop &&
              y1 < staticDiv[i].offsetTop + 50
            ) {
              staticDiv[i].style.transform = "scale(1.05)"; //放大元素
              staticDiv[i].style.boxShadow = "0px 0px 10px #000000";
            }
          }
          // $(this).css("background", getcolor());
        }
      });

      //拖拽之后恢复被拖拽元素的透明度
      $(".footRight > .draggableBox").bind("touchend", function(event) {
        event.preventDefault();
        var e = event;
        e.target.style.opacity = 1;
        console.log(event.changedTouches[0]);
        let touchDivText = e.changedTouches[0].target.innerText;
        let touch = e.changedTouches[0]; // 把元素放在手指所在的位置
        let x1 = touch.clientX; //鼠标移动时候的X值
        let y1 = touch.clientY; //鼠标移动时候的Y值
        var xR = x1 - touch.offsetLeft; //转换后的鼠标移动x坐标
        var yR = y1 - touch.offsetTop; //转换后的鼠标移动y坐标
        touch.target.style.zIndex = this.zIndex++;
        //拿到拖动元素的data-text
        var dataText = $(event.target).attr("data-text");
        var staticDiv = document.getElementsByClassName("textArea");
        for (let i = 0; i < staticDiv.length; i++) {
          console.log("dataText", dataText);
          staticDiv[i].style.transform = "";
          staticDiv[i].style.boxShadow = "";
          if (
            x1 > staticDiv[i].offsetLeft &&
            x1 < staticDiv[i].offsetLeft + 120 &&
            y1 > staticDiv[i].offsetTop &&
            y1 < staticDiv[i].offsetTop + 50
          ) {
            var divText = $(staticDiv[i]).attr("data-text");
            if (divText == dataText) {
              let audio = _this.$refs.secondMachine;
              e.target.style.display = "none";
              staticDiv[i].innerHTML = touchDivText; //放大元素
              _this.times++;
              audio.play();
            } else {
              let failAudio = _this.$refs.failMachine;
              failAudio.play();
            }
          }
        }
      });

      //将元素拖入当前元素
      $(".draggableBox").bind("dragenter", ".textArea", function(event) {
        var event = event.originalEvent;
        event.target.style.color = "white";
      });
      //google chrome,opera需要添加
      $(".dataTbl").bind("dragover", "td", function(e) {
        e.originalEvent.preventDefault();
      });
      //将元素拖离当前元素
      $(".dataTbl").bind("dragleave", "td", function(event) {
        var event = event.originalEvent;
        event.target.style.backgroundColor = "";
      });

      //将元素释放到当前元素中
      $(".dataTbl").bind("drop", "td", function(event) {
        //拿到选中的列名
        let firstTdList = $("table").find("th");
        let textList = [];
        for (let i = 0; i < firstTdList.length; i++) {
          textList.push(firstTdList[i].innerText);
        }
        var ind = $(event.target).prevAll().length;
        console.log(textList[ind]);
        var event = event.originalEvent;
        var text = event.dataTransfer.getData("text");
        //重置背景色
        event.target.style.backgroundColor = "";
        //添加拖拽元素的类型
        $(event.target).removeClass();
        $(event.target).addClass(text);
        $(event.target).text(text);
        event.preventDefault();
        event.stopPropagation();
      });
    }
  },
  components: {},
  watch: {
    times(val) {
      if (val == 7) {
        this.$router.push("chooseCapteur");
      }
    }
  },
  mounted() {
    this.dragFn();
  }
};
</script>
<style lang="scss" scoped>
.footerBox {
  display: flex;
  width: 100%;
}
.footLeft {
  position: relative;
  height: 200px;
  width: 40%;
  margin-top: 80px;
  .personImg {
    position: absolute;
    width: 90px;
    height: 200px;
    right: 0;
    background-image: url("../assets/image/personImg.png");
    background-size: 100% 100%;
  }
  .personText {
    position: absolute;
    width: 240px;
    height: 100px;
    left: -100px;
    top: 100px;
    background-image: url("../assets/image/personText.png");
    background-size: 100% 100%;
    color: white;
    font-size: 23px;
    padding-right: 50px;
    line-height: 50px;
  }
}
.footRight {
  // position: relative;
  height: 200px;
  width: 60%;
  text-align: center;
  .draggableBox {
    color: #7de5ff;
    // position: absolute;
    // top: 0;
    // left: 0;
    font-size: 24px;
  }
}
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
  position: relative;
  background-color: black;
  background-size: 100% 100%;
  height: 100vh;
}
.bgOpacity {
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
}
.boxList {
  display: flex;
  width: 1024px;
  // margin: 0 auto;
}
.borderBox {
  background-size: 100% 100%;
  width: 150px;
  height: 150px;
  margin: 20px auto
}
.textArea {
  background-image: url("../assets/image/smallTextArea.png");
  background-size: 100% 100%;
  width: 150px;
  height: 40px;
  margin: 20px auto;
  color: #7de5ff;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
}
</style>