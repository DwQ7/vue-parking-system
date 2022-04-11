<template>
    <div class="login_tittle">
      <h3>车位预约系统</h3>
    </div>
    <div class="login_container">
      <div class="login_box_container">
        <div class="login_box">
          <div></div>
          <div>
            <el-icon :size="iconSize"><iphone /></el-icon>
            <el-input v-model="phoneNum" placeholder="输入手机号" />
          </div>
          <div>
            <el-icon :size="iconSize"><lock /></el-icon>
            <el-input
                v-model="passWord"
                type="password"
                placeholder="输入密码"
                show-password
            />
          </div>
          <div><el-button type="primary" loading>登录</el-button></div>
          <div></div>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  name: "LoginView",
  data(){
    return{
      phoneNum:undefined,
      passWord:undefined,
      iconSize:'1.2rem',
    }
  }
}
</script>

<style scoped>
.login_container{
  /*height: 60vh;*/
}
.login_tittle{
  font-size: 22px;
  font-weight: 400;
  margin: 30px auto;
  text-align: center;
}
.login_tittle h3{
  color:var(--el-color-primary);
}
.login_box_container{
  width: 100%;
}
.login_box{
  width: 25rem;
  height: 25rem;
  margin: 10px auto 70px;
  box-shadow: 2px 2px 9px #ccc;
  border: 1px solid #ececec;
  border-radius: 4px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
}
.login_box div{
  width: 70%;
}
.login_box .el-input{
  width: 80%;
}
.el-icon{
  color: var(--el-color-primary);
  padding-right: 1rem;
}
.el-button.is-loading {
  position: relative;
  pointer-events: none;
  width: 100%;
}
</style>