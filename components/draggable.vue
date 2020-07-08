<template>
  <div class="All"></div>
</template>

<script>
export default {
  name: "draggable",
  data() {
    return {
      moveDataelse: {
        x: null,
        y: null
      },
      staticDivList: [],
      zIndex: 1
    };
  },
  methods: {
    mouseDownHandleElse(e, ref) {
      console.log(e, ref);

      let odiv = ref; //获取目标元素
      //算出鼠标相对元素的位置
      let disX = e.clientX - odiv.offsetLeft;
      let disY = e.clientY - odiv.offsetTop;
      document.onmousemove = e => {
        //鼠标按下并移动的事件
        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left = e.clientX - disX;
        let top = e.clientY - disY;

        console.log(odiv.style.left);
        //绑定元素位置到positionX和positionY上面
        this.positionX = top;
        this.positionY = left;
        let x1 = e.clientX; //鼠标移动时候的X值
        let y1 = e.clientY; //鼠标移动时候的Y值
        var xR = x1 - odiv.offsetLeft; //转换后的鼠标移动x坐标
        var yR = y1 - odiv.offsetTop; //转换后的鼠标移动y坐标
        odiv.style.zIndex = this.zIndex++;

        //移动当前元素
        odiv.style.left = left + "px";
        odiv.style.top = top + "px";
        // odiv.style.zIndex = left;
        odiv.style.position = "absolute";
        console.log("鼠标本身" + x1, y1, "鼠标减之后" + xR, yR);

        // let xoffset = odiv.offsetLeft + x1 - x0; //鼠标的新x的位置
        // let yoffset = odiv.offsetTop + y1 - y0; //鼠标的新y的位置
        var staticDiv = document.getElementsByClassName("staticDiv");
        for (let i = 0; i < staticDiv.length; i++) {
          console.log(staticDiv[i].offsetLeft, staticDiv[i].offsetTop);

          staticDiv[i].style.transform = "";
          staticDiv[i].style.boxShadow = "";
          if (
            xR > staticDiv[i].offsetLeft &&
            xR < staticDiv[i].offsetLeft + 200 &&
            yR > staticDiv[i].offsetTop &&
            yR < staticDiv[i].offsetTop + 150
          ) {
            staticDiv[i].style.transform = "scale(1.05)"; //放大元素
            staticDiv[i].style.boxShadow = "0px 0px 10px #000000";
            console.log(i);
          }
        }
      };
      document.onmouseup = e => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
    mouseMoveHandleElse(event) {
      console.log("!!!");

      let moveLeft = event.pageX - this.moveDataelse.x + "px";
      let moveTop = event.pageY - this.moveDataelse.y + "px";
      this.$refs.part1.style.left = moveLeft;
      this.$refs.part1.style.top = moveTop;
    },
    mouseUpHandleElse(event, ref) {
      let odiv = ref;
      //   odiv.style.position = null;
      odiv.style.zIndex = this.zIndex++;
      window.onmousemove = null;
      event.currentTarget.style.cursor = "move";
      console.log("鼠标松开了");
    },
    diologShowNo() {
      this.$emit("diologShowNo");
    },
    lianlinaUpAnswer() {
      this.$emit("lianlinaUpAnswer");
    }
  }
};
</script>

<style lang="scss" scoped>
.staticBox {
  width: 280px;
  height: 120px;
  float: left;
  padding: 30px 10px;
  span {
    display: block;
    text-align: center;
    user-select: none;
  }
  .staticDiv {
    background-size: 100% 100%;
    height: 100%;
    border: 1px solid gray;
    .staticImgBox {
      margin: 0 auto;
      background-size: 100% 100%;
      width: 50%;
      height: 100%;
    }
  }
}
.List {
  width: 100%;
  text-align: center;
  .el-button {
    width: 100px;
    margin: 20px 20px;
  }
}
.draggableList {
  position: relative;
  margin-top: 100px;
  .draggableBox {
    cursor: pointer;
    position: relative;
    float: left;
    // padding: 10px 10px;
    margin: 10px 10px;
    background-size: 100% 100%;
    height: 120px;
    width: 280px;
  }
}
</style>