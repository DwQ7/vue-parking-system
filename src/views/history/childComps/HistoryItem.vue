<template>
  <div class="historyItem_box">
    <img src="@assets/images/parking/park4.png">
    <div class="history_info">
      <h3>预约车库：杭师大仓前B区地下停车场</h3>
      <p>预约日期：2022-4-10</p>
      <p>预约状态：</p>
      <el-steps :space="200" :active="1"  >
        <el-step title="已预约" icon="Calendar" />
        <el-step title="已入库" icon="Location" />
        <el-step title="已出库" icon="Compass" />
      </el-steps>
    </div>
    <div class="history_button">
<!--      <el-button icon="Star" circle />-->
      <el-button icon="Delete" circle />
    </div>
  </div>
</template>

<script>
import {Edit, Picture, UploadFilled,Location,Calendar,Compass} from "@element-plus/icons-vue";

export default {
  name: "HistoryItem",
  components:{
    Edit,
    UploadFilled,
    Picture,
    Location,
    Calendar,
    Compass
  }
}
</script>

<style scoped>
.historyItem_box{
  width: 55rem;
  height: 15rem;
  margin: 1rem 2rem;
  box-shadow: 2px 2px 9px #ccc;
  border: 1px solid #ececec;
  border-radius: 4px;
  display: grid;
  grid-template-columns: 15rem 1fr 6rem;
}
.historyItem_box img{
  padding: 1rem;
  width: 12rem;
  height: 12rem;
}
.history_info p{
  font-family: "SimHei", Times, serif;
  font-size: 1.1rem;
  color: var(--el-color-info);
}
.history_button{
  padding: 1rem;
  text-align: right;
}
</style>