<template>
  <el-affix :offset="0">
  <div class="aside">
    <main-nav-bar v-on:changeOpen="changeOpen"></main-nav-bar>
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open=""
        @close=""
    >
      <el-menu-item index="0">
        <el-icon><House /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="1">
        <el-icon><location /></el-icon>
        <span>预约</span>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><edit /></el-icon>
        <span>订单</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><document /></el-icon>
        <span>关于</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon ><iphone /></el-icon>
        <span>联系</span>
      </el-menu-item>
    </el-menu>
  </div>
  </el-affix>
</template>

<script>
import MainNavBar from "@/components/content/mainNavBar/MainNavBar";

export default {
  name: "HomeAside",
  components:{
    MainNavBar
  },
  data(){
    return{
      isCollapse:false
    }
  },
  methods:{
    changeOpen(res){
      setTimeout(() =>{
        this.isCollapse = res
      })
    }
  }
}
</script>

<style scoped>
.aside{
  /*margin-right: -70px;*/
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>