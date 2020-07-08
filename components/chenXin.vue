<template>
  <div class="testTwo">
    <div class="headerBar">
      <div class="barLeft">
        <div class="iconStyle" :style="{backgroundImage:boyIconUrl}"></div>
        <span>陈鑫</span>
      </div>
      <div class="barRight">
        <el-button type="primary" @click="goBack()">返回</el-button>
      </div>
    </div>
    <div class="studentInfo">
      <table>
        <tr>
          <td>
            <span class="iconStyle" :style="{backgroundImage:classIconUrl}"></span>班级：
          </td>
          <td>
            <span class="iconStyle" :style="{backgroundImage:typeIconUrl}"></span>作品类型：
          </td>
          <td width="500px">
            <span class="iconStyle"></span>总得分：
          </td>
        </tr>
        <tr>
          <td>园林绿化181班</td>
          <td>礼盒花饰</td>
          <td style="font-size:50px;color:#11A0FF">60.6</td>
        </tr>
      </table>
    </div>
    <!-- <div>
      <table>
        <tr>
          <td>班级：</td>
          <td>作品类型：</td>
          <td>总得分：</td>
        </tr>
        <tr>
          <td>园林绿化181班</td>
          <td>礼盒花饰</td>
          <td>60.6</td>
        </tr>
      </table>
    </div>-->
    <h1>作品详情</h1>

    <div class="studentWorkImg">
      <div class="resultBox" :style="{backgroundImage:chenxin}"></div>
      <div class="rightBox">
        <div class="scoreBox" :style="{backgroundImage:twentyUrl}"></div>
        <div class="scoreBox" :style="{backgroundImage:nineteen}"></div>
      </div>
    </div>
    <div class="echartTab" ref="echart"></div>
    <div class="workDetail">
      <table border="1">
        <tr>
          <th>评分类型</th>
          <th colspan="2" style="width:400px">情况描述</th>
          <th style="width:300px">评分细则</th>
          <th>满分</th>
          <th>自评</th>
          <th colspan="2">组内互评</th>
          <th colspan="2">师评</th>
        </tr>
        <tr>
          <td rowspan="7">技术分（30%）</td>

          <td colspan="2">整洁度</td>
          <td>是否有损叶片、花朵等，以及制作过程中留下来的杂物</td>
          <td>5</td>
          <td>0</td>
          <td width="50px">0</td>
          <td rowspan="7" style="width:10%">20</td>
          <td width="50px">0</td>
          <td rowspan="7" style="width:10%">
            10
            <div @click="dialogView()">详情</div>
          </td>
        </tr>
        <tr>
          <td colspan="2">装饰对象受损</td>
          <td>不应对装饰对象造成损坏或改变</td>
          <td>2</td>
          <td>2</td>
          <td>2</td>
          <td>2</td>
        </tr>
        <tr>
          <td colspan="2">稳定度</td>
          <td>当抬起和触摸时保证其原有形态</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
        </tr>
        <tr>
          <td colspan="2">技法</td>
          <td>是否金属丝裸露 漏胶</td>
          <td>5</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td colspan="2">保水</td>
          <td>每一个活的植物有正确的保水措施</td>
          <td>5</td>
          <td>5</td>
          <td>5</td>
          <td>0</td>
        </tr>
        <tr>
          <td colspan="2">寿命</td>
          <td>平均预期的生命跨度达到理想状态</td>
          <td>5</td>
          <td>5</td>
          <td>5</td>
          <td>5</td>
        </tr>
        <tr>
          <td colspan="2">尊重植物</td>
          <td>所有植物材料必须得到尊重和正确对待</td>
          <td>5</td>
          <td>5</td>
          <td>5</td>
          <td>0</td>
        </tr>
        <tr>
          <td rowspan="8">主观分（70%）</td>
          <td rowspan="3">构成</td>
          <td>整体印象</td>
          <td>形状、形态、比例、视觉平衡</td>
          <td>10</td>
          <td>6.7</td>
          <td>6.7</td>
          <td rowspan="8">19.9</td>
          <td></td>
          <td rowspan="8"></td>
        </tr>
        <tr>
          <td>风格</td>
          <td>明确的设计风格</td>
          <td>5</td>
          <td>3.3</td>
          <td>3.3</td>
          <td></td>
        </tr>
        <tr>
          <td>韵律</td>
          <td>良好的材料选择和使用，线条和韵律感，动态和流畅度</td>
          <td>10</td>
          <td>3.3</td>
          <td>3.3</td>
          <td></td>
        </tr>
        <tr>
          <td rowspan="3">色彩</td>
          <td>和谐</td>
          <td>色彩达到和谐</td>
          <td>10</td>
          <td>3.3</td>
          <td>0</td>
        </tr>
        <tr>
          <td>张力</td>
          <td>多种色彩值表达和使用</td>
          <td>10</td>
          <td>0</td>
          <td>6.7</td>
          <td></td>
        </tr>
        <tr>
          <td>位置</td>
          <td>色彩平衡、颜色分组</td>
          <td>10</td>
          <td>6.7</td>
          <td>3.3</td>
        </tr>
        <tr>
          <td rowspan="2">创意</td>
          <td>材料</td>
          <td>恰当并有部分创意选择使用在任务中</td>
          <td>10</td>
          <td>3.3</td>
          <td>0</td>
          <td></td>
        </tr>
        <tr>
          <td>主题</td>
          <td>能够表达主题</td>
          <td>5</td>
          <td>6.7</td>
          <td>3.3</td>
          <td></td>
        </tr>
      </table>
    </div>
    <el-dialog title="评分说明" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <div class="content">
        <p>花瓣有残缺损伤</p>
        <p>漏胶</p>
        <p>有裸露的铁丝头，会损伤人体</p>
        <p>个别花头底部没有用花胶水</p>
        <p>植物材料收到挤压和变形，不尊重植物</p>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: "hello world!",
      dialogVisible: false,
      classIconUrl: "url(" + require("../assets/image/classIcon.png"),
      typeIconUrl: "url(" + require("../assets/image/typeIcon.png"),
      zhangxinyi: "url(" + require("../assets/image/zhangxinyi.png"),
      chenxin: "url(" + require("../assets/image/chenxin.png"),
      twentyUrl: "url(" + require("../assets/image/twenty.png"),
      nineteen: "url(" + require("../assets/image/nineteen.png"),
      boyIconUrl: "url(" + require("../assets/image/boyIcon.png")
    };
  },
  mounted() {
    this.echartsTab1();
  },
  methods: {
    goBack() {
      this.$router.push("textOne");
    },
    dialogView() {
      this.dialogVisible = true;
    },
    echartsTab1() {
      let myChart = this.$echarts.init(this.$refs.echart); // 绘制图表
      myChart.setOption({
        title: {
          text: "技术分自评互评对比陈鑫",
          textStyle: {
            fontSize: "30",
            fontWeight: "bold",
            color: "gray"
          }
        },
        tooltip: {},
        xAxis: {
          type: "category",
          data: [
            "整洁度",
            "装饰对象受损",
            "稳定度",
            "技法",
            "保水",
            "寿命",
            "尊重植物"
          ],
          axisLabel: {
            textStyle: {
              fontSize: "15",
              color: "gray" //坐标值的具体的颜色
            }
          }
        },
        yAxis: {
          axisLabel: {
            textStyle: {
              color: "gray", //坐标值得具体的颜色
              fontSize: "16"
            }
          }
        },
        series: [
          {
            name: "成绩",
            type: "bar",
            data: [0, 2, 3, 0, 5, 5, 5],
            barWidth: 40, //柱图宽度
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            itemStyle: {
              normal: {
                //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，

                color: () => {
                  return "#3385FF";
                }
              }
            }
          },
          {
            name: "成绩",
            type: "bar",
            data: [0, 2, 3, 0, 5, 5, 5],
            barWidth: 40, //柱图宽度
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            itemStyle: {
              normal: {
                //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，

                color: () => {
                  return "#ED7D31";
                }
              }
            }
          }
        ]
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.echartTab {
  width: 100%;
  height: 400px;
}
.testTwo {
  width: 80%;
  margin: 0 auto;
  margin-bottom: 100px;
}
.studentInfo {
  background-color: #fff5f5;
  margin: 0 auto;
  table {
    width: 100%;
    tr {
      td {
        // display: flex;
        line-height: 100px;
        .iconStyle {
          width: 30px;
          display: inline-block;
          height: 30px;
          line-height: 30px;
          margin: 0 10px;
          background-size: 100% 100%;
        }
        background-color: transparent;
        text-align: center;
        font-size: 30px;
      }
    }
  }
}
.headerBar {
  display: flex;
  margin: 0 auto;
}
.barLeft {
  height: 60px;
  border-bottom: 1px solid #416771;
  display: flex;
  width: 90%;
  .iconStyle {
    width: 30px;
    margin: 6px;
    height: 40px;
    background-size: 100% 100%;
  }
  span {
    display: block;
    font-size: 30px;
    font: bold;
  }
}
.barRight {
  height: 60px;
  width: 10%;
  .el-button {
    // margin-left: 30px;
    width: 100px;
  }
}
// table {
//   width: 100%;

//   tr:nth-child(2n) {
//     background-color: #efefef;
//   }
//   tr:nth-child(2n-1) {
//     background-color: #f6f6f6;
//   }
//   tr {
//     td {
//       font-size: 20px;
//       // background-color: #faf2d7;
//     }
//   }
// }
.studentWorkImg {
  width: 100%;
  margin: 0 auto;
  background-color: #efefef;
  display: flex;
  .resultBox {
    background-size: 100% 100%;
    height: 600px;
    width: 65%;
  }
  .rightBox {
    width: 40%;
    height: 100%;
    .scoreBox {
      background-size: 100% 100%;
      width: 200px;
      height: 200px;
      margin: 50px auto;
    }
  }
}
.workDetail {
  margin-top: 40px;
  table,
  th,
  tr,
  td {
    border: 1px solid rgba(221, 221, 221, 1);
  }
  tr:nth-child(2n) {
    background-color: #efefef;
  }
  tr:nth-child(2n-1) {
    background-color: #f6f6f6;
  }
  table {
    width: 100%;

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
      background-color: #e1e1e1;
      // color: white;
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