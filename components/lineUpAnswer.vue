<template>
  <div class="All">
    <h1>成绩单</h1>
    <div>
      <table cellspacing="0" class="reportListFirst">
        <tr>
          <th style="background-color:#F6F8F8">姓名</th>
          <th>张三</th>
          <th>李四</th>
          <th>王五</th>
          <th>赵六</th>
          <th>李逍遥</th>
          <th>小七</th>
          <th>小八</th>
          <th>张山</th>
          <th>李斯</th>
          <th>赵灵儿</th>
          <th>李忆如</th>
          <th>阿奴</th>
        </tr>
        <tr>
          <td style="background-color:#F6F8F8">成绩</td>
          <td>8.5</td>
          <td>9.5</td>
          <td>7.3</td>
          <td>5.3</td>
          <td>9.8</td>
          <td>6.9</td>
          <td>10</td>
          <td>9.2</td>
          <td>6.8</td>
          <td>6.8</td>
          <td>6.8</td>
          <td>6.8</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "lineUpAnswer"
};
</script>

<style lang="scss" scoped>
.All {
  h1 {
    font-size: 30px;
  }
}
.reportListFirst {
  margin-top: 100px;
  font-size: 20px;
  //   border: 1px solid #dedede;
  tr,
  th {
    // border: 1px solid #dedede;
    font-weight: 400;
    text-align: center;
    td {
      text-align: center;
      //   border: 1px solid #dedede;
    }
  }
}

table {
  width: 80%;
  border-top: 1px solid #dedede;
  border-left: 1px solid #dedede;
  border-collapse: collapse; /*设置单元格的边框合并为1*/
}
td,
th {
  border-bottom: 1px solid #dedede;
  border-right: 1px solid #dedede;
}
</style>