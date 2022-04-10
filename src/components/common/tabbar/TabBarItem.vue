<template>
  <div class="tab-bar-item" @click="itemClick">
    <div :style="activeStyle"><slot name="item-icon"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    },
  },
  data(){
    return{
      color:'var(--el-color-primary)'
    }
  },
  computed:{
    isActive() {
      return this.$route.path === this.path;
    },
    activeStyle() {
      return this.isActive ? {color: this.color} : {}
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path);
    }
  }
}
</script>

<!--<style scoped>-->
<!--vue组件中的style标签标有scoped属性时表明style里的css样式只适用于当前组件元素-->
<!--而如果你的标签是其他组件插槽进来的声明过scoped将无法对其产生作用-->
<style>
.tab-bar-item {
  padding-top: 0.4rem;
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
</style>
