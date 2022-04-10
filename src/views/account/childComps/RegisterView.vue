<template>
  <div class="register_tittle">
    注册账号
  </div>
  <div class="register_container">
    <el-steps :active="1" align-center>
      <el-step title="账户信息" description="Some description" />
      <el-step title="手机验证" description="Some description" />
      <el-step title="设置密码" description="Some description" />
      <el-step title="完成" description="Some description" />
    </el-steps>
  </div>
  <div class="register_box_container">
    <div class="register_box">
      <div class="register_info">
        <el-icon :size="iconSize"><user /></el-icon>
        <el-input v-model="userName" placeholder="输入用户名" />
      </div>
      <div><el-button type="primary">下一步</el-button></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterView",
  data(){
    return{
      iconSize:'1.2rem',
      userName:undefined,
    }
  }
}
</script>

<style scoped>
.register_tittle{
  font-size: 22px;
  font-weight: 400;
  margin: 50px auto 30px;
  text-align: center;
}
.register_container{
  height: 20vh;
}
.register_box_container{
  margin: 0 20px
}
.register_box{
  width: 25rem;
  height: 15rem;
  margin: 20px auto 60px;
  box-shadow: 2px 2px 9px #ccc;
  border: 1px solid #ececec;
  border-radius: 4px;
  display: grid;
  justify-items: center;
}
.register_info{
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-icon{
  color: var(--el-color-primary);
  padding-right: 1rem;
}
</style>