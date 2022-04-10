<template>
  <home-header/>
  <div class="reserve_tittle">
    <h4>为您查询到如下车库信息:</h4>
    <span>
      <el-icon><refresh /></el-icon>
      换一换
    </span>
  </div>
  <ReserveItem/>
  <ReserveItem/>
  <ReserveItem/>
  <ReserveItem/>
  <div class="reserve_footer">
    <el-pagination
        :page-size="20"
        :pager-count="11"
        layout="prev, pager, next"
        :total="1000"
    />
  </div>

</template>

<script>
import HomeHeader from "@/views/home/childComps/HomeHeader";
import ReserveItem from "@/views/reserve/childComps/ReserveItem";
export default {
  name: "ReserveView",
  components: {
    HomeHeader,
    ReserveItem
  }
}
</script>

<style scoped>
.reserve_tittle{
  color:var(--el-color-primary);
  margin: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.reserve_footer{
  display: flex;
  justify-content: center;
}
</style>