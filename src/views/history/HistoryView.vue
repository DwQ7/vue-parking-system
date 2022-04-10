<template>
  <home-header/>
  <div class="history_tittle">
    <h4>历史预约订单</h4>
    <span>
      <el-icon><refresh /></el-icon>
      刷新
    </span>
  </div>
  <history-item/>
  <history-item/>
  <history-item/>
  <history-item/>
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</template>

<script>
import HomeHeader from "@/views/home/childComps/HomeHeader";
import HistoryItem from "@/views/history/childComps/HistoryItem";
export default {
  name: "HistoryView",
  components: {
    HomeHeader,
    HistoryItem
  }
}
</script>

<style scoped>
.history_tittle{
  color:var(--el-color-primary);
  margin: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>