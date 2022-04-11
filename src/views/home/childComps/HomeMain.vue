<template>
    <div class="main_content">
      <div style="width: 50%; height: 100%">
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="main_reserve">
        <home-reserve/>
      </div>
    </div>
    <div class="main_footer">
      <el-skeleton style="width: 50%; padding-right: 2rem">
        <template #template>
          <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
          <div style="padding: 14px">
          </div>
        </template>
      </el-skeleton>
      <el-skeleton :rows="5" animated />
    </div>
</template>

<script>
import Progress from "@/components/common/progress/Progress";
import ProgressView from "@/components/common/progress/Progress";
import HomeReserve from "@/views/home/childComps/HomeReserve";

export default {
  name: "HomeMain",
  components:{
    ProgressView,
    Progress,
    HomeReserve
  }
}
</script>

<style scoped>
.main_content{
  height: 50%;
  display: flex;
}
.main_footer{
  display: flex;
  height: 50%;
}
.main_reserve{
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}
.el-carousel__item:nth-child(2n) {
  background-color: var(--el-color-primary-light-4);
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: var(--el-color-primary-light-2);
}
</style>