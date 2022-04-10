<template>
  <el-button @click="reserve">预约</el-button>
  <el-dialog v-model="dialogFormVisible" title="预约信息">
    <el-form :model="reserveForm">
      <el-form-item label="获取当前位置" :label-width="formLabelWidth">
        <el-input v-model="reserveForm.position" autocomplete="off"  suffix-icon=location />
      </el-form-item>
      <el-form-item label="选择车型" :label-width="formLabelWidth">
        <el-select v-model="reserveForm.carModel" placeholder="选择车型">
          <el-option label="Zone No.1" value="shanghai" />
          <el-option label="Zone No.2" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="reserve"
        >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>

</template>

<script>
import location from "@element-plus/icons-vue/dist/es/location.mjs";
import iphone from "@element-plus/icons-vue/dist/es/iphone.mjs";

export default {
  name: "HomeReserve",
  components:{
    location,
  },
  data(){
    return{
      dialogFormVisible:false,
      reserveForm:reactive({
        position:'',
        carModel: '',
      }),
      formLabelWidth:'100px'
    }
  },
  methods:{
    reserve(){
      this.dialogFormVisible = !this.dialogFormVisible
      let res = JSON.parse(JSON.stringify(this.reserveForm))
      console.log(res);
    }
  }
}
</script>

<style scoped>

</style>