<template>
    <div id="app">
      <el-container >
        <home-aside ></home-aside>
        <el-container class="home_right">
          <el-main>
              <router-view v-slot="{Component}">
                <keep-alive>
                  <component :is="Component" :key="$route.name"  v-if="$route.meta.keepAlive" />
                </keep-alive>
              </router-view>
          </el-main>
        </el-container>
      </el-container>
      <el-footer class="footer">
        <h3>简约</h3>
      </el-footer>
    </div>

</template>

<script>


import HomeAside from "@/views/home/childComps/HomeAside";
import HomeHeader from "@/views/home/childComps/HomeHeader";

export default {
  name:'App',
  data(){
    return{
    }
  },
  components:{
    HomeAside,
    HomeHeader,
  }
}
</script>

<style>
  /*style中引用css固定写法*/
  @import "./assets/css/base.css";
  .footer{
    background-color: #2b333e;
    /*width: 100%;*/
    color: hsla(0,0%,100%,.5);
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .footer div{

  }
  .el-main{
    padding: 0;
  }
</style>
