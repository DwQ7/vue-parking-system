<template>
  <div class="progress">
    <div class="demo_progress">
      <el-progress :percentage="50" :indeterminate="true" />
      <el-progress :percentage="100" :format="format" :indeterminate="true" />
      <el-progress
          :percentage="100"
          :indeterminate="true"
          :duration="5"
      />
      <el-progress
          :percentage="100"
          :indeterminate="true"
          :duration="1"
      />
      <el-progress :percentage="50"  :indeterminate="true" />
      <el-progress :percentage="percentage"  />
    </div>
    <div class="demo_loading">
      <div element-loading-text="Loading" v-loading="true"></div>
<!--      <div element-loading-text="Loading" v-loading="true" style="color: var(&#45;&#45;el-color-danger)"></div>-->
    </div>

  </div>

</template>

<script>


import {Minus, Plus} from "@element-plus/icons-vue";
export default {
  name: "ProgressView",
  data(){
    return{
      format:(percentage) => (percentage === 100 ? 'Full' : `${percentage}%`),
      customColors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 },
      ],
      percentage:10,
      loading:true
    }
  },
  methods:{
    increase(){
      this.percentage += 10
      if (this.percentage > 100) {
        this.percentage = 100
      }
    },
    decrease(){
      this.percentage -= 10
      if (this.percentage < 0) {
        this.percentage = 0
      }
    }
  },
  components:{
    Plus,Minus
  }
}
</script>

<style scoped>
.progress{
  display: flex;
}
.demo_progress{
  width: 60%;
  padding-left: 1rem;
}
.demo_progress .el-progress--line {
  padding: 1rem 1rem 1rem 1.5rem;
}
.demo_loading{
  padding-top:5rem;
  width: 40%;
}
</style>