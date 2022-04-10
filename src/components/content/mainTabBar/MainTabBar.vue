<template>
  <tab-bar>
    <tab-bar-item path="/blog" activeColor="red">
      <template #item-icon><el-icon :size="iconSize"><edit /></el-icon></template>
      <template #item-text><div>博客</div></template>
    </tab-bar-item>
    <tab-bar-item path="/todoList" activeColor="red">
      <template #item-icon><el-icon :size="iconSize"><folder-checked /></el-icon></template>
      <template #item-text><div>待办</div></template>
    </tab-bar-item>
    <tab-bar-item path="/about" activeColor="red">
      <template #item-icon><el-icon :size="iconSize"><iphone /></el-icon></template>
      <template #item-text><div>关于</div></template>
    </tab-bar-item>
    <tab-bar-item path="/contact" activeColor="red">
      <template #item-icon><el-icon :size="iconSize"><chat-line-square /></el-icon></template>
      <template #item-text><div>联系</div></template>
    </tab-bar-item>

  </tab-bar>
</template>

<script>


import TabBar from "@/components/common/tabbar/TabBar"
import TabBarItem from "@/components/common/tabbar/TabBarItem"

export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  },
  data(){
    return{
      iconSize:'1.5rem'
    }
  }
}
</script>

<style scoped>

</style>