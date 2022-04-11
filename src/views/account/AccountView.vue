<template>
    <nav-bar class="account_nav">
      <template #left><h2 @click="backHome" style="color:var(--el-color-primary);">简约</h2></template>
      <template #right>
          <router-link to="/account/login">登录</router-link> |
          <router-link to="/account/register">注册</router-link>
      </template>
    </nav-bar>
    <router-view></router-view>
  <div style="padding: 2rem"></div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "AccountView",
  components:{
    NavBar,
  },
  data(){
    return{
    }
  },
  methods:{
    backHome(){
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>
.account_nav{
  height: 5rem;
  box-shadow: 0 3px 12px #e8e8e8;
}
.account_nav a {
  font-weight: bold;
  color: black;
  text-decoration: none;
}
.account_nav a.router-link-exact-active {
  color: var(--el-color-primary);
}
</style>