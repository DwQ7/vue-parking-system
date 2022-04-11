<template>
  <el-affix :offset="0">
  <div class="header">
    <div class="header_tittle">
      <span>
        车位预约系统
      </span>
    </div>
    <div class="header_search">
      <el-input
          v-model="input1"
          class="w-50 m-2"
          placeholder="Type something"
          prefix-icon="Search"
          size="large"
      />
      <div class="header_loading">
        <el-switch v-model="value" @click="test123"/>
      </div>
    </div>
  </div>
  </el-affix>
</template>

<script>
import {switchTheme} from "@/common/colorTool";

export default {
  name: "HomeHeader",
  data(){
    return{
      input1:'',
      value:false
    }
  },
  methods:{
    test123(){
      switchTheme('warning')
    }
  }

}
</script>

<style scoped>
.header{
  position: sticky;
  top:0;
  background-color: var(--el-color-white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0 1rem 0;
  box-shadow: 2px 1px 2px 0 #e8e8e8;
  margin-bottom: 1rem;
}
.header_tittle{
  padding-left: 2rem;
  font-weight: bolder;
  font-size: 1.5rem;
  font-family: "Times New Roman", Times, serif;
  /*font-family:Arial,Helvetica,sans-serif;*/
  /*font-family:"Trebuchet MS", Arial, Helvetica, sans-serif;*/
}
.header_search{
  display: flex;
  width: 30%;
}
.header_loading{
  padding:0.5rem 0 0 1rem;
}
</style>