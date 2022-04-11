<template>
  <div class="common-layout" >
    <home-header/>
    <home-main/>
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
    </ul>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {Delete} from "@element-plus/icons-vue";
import {getHomeMultiData,getHomeGoodList} from "@/network/home";
import todoList from "@/views/home/childComps/todoList";
import HomeAside from "@/views/home/childComps/HomeAside";
import HomeHeader from "@/views/home/childComps/HomeHeader";
import HomeMain from "@/views/home/childComps/HomeMain";
import HomeFooter from "@/components/content/homeFooter/HomeFooter";


export default {
  name: 'HomeView',
  data(){
    return{
      asideWidth:'200px'
    }
  },
  components: {
    NavBar,
    Delete,
    todoList,
    HomeAside,
    HomeHeader,
    HomeMain,
    HomeFooter
  },
  created(){

  },
  methods:{

  }
}
</script>

<style>
.common-layout{
  /*height: 100%;*/
}

</style>
