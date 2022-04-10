<template>
  <transition name="el-zoom-in-top">
    <div class="reserveItem_box">
      <img src="@assets/images/parking/park1.png">
      <div class="reserve_info">
        <p>车库名称：杭师大仓前B区地下停车场</p>
        <p>车库余量：999</p>
        <p>距离：3.49km</p>
        <p>联系电话：12138</p>
        <el-button type="primary" size="large" @click="reservePark">
          点击预约<el-icon class="el-icon--right"><calendar /></el-icon>
        </el-button>
      </div>
      <div class="reserve_button">
          <el-button icon="Star" circle />
          <el-button icon="Delete" circle />
      </div>
    </div>
  </transition>

  <el-dialog v-model="dialogFormVisible" title="预约时间">
    <el-form :model="reserveForm">
      <el-date-picker
          v-model="reserveForm.inTime"
          type="datetime"
          placeholder="预约入场时间"
          :shortcuts="inShortcuts"
          size="large"
      />
      <br>
      <br>
      <el-date-picker
          v-model="reserveForm.outTime"
          type="datetime"
          placeholder="预约离场时间"
          :shortcuts="outShortcuts"
          size="large"
      />
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="reservePark">Cancel</el-button>
        <el-button type="primary" @click="reservePark"
        >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script>
import {Delete,Star} from "@element-plus/icons-vue";
import ReservePopup from "@/views/reserve/childComps/ReservePopup";

export default {
  name: "ReserveItem",
  data(){
    return{
      dialogFormVisible:false,
      reserveForm:reactive({
        inTime:ref(''),
        outTime:ref(''),
      }),
      formLabelWidth:'200px',
      inShortcuts:[
        {
          text: 'Today',
          value: new Date(),
        },
        {
          text: 'Yesterday',
          value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            return date
          },
        },
        {
          text: 'A week ago',
          value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            return date
          },
        },
      ],
      outShortcuts:[
        {
          text: 'tomorrow',
          value:() => {
            const date = new Date()
            date.setTime(date.getTime() + 3600 * 1000 * 24)
            return date
        }
        },
        {
          text: 'while',
          value:() => {
            const date = new Date()
            date.setTime(date.getTime() + 3600 * 1000 * 3)
            return date
          }
        },
        {
          text: 'A week later',
          value: () => {
            const date = new Date()
            date.setTime(date.getTime() + 3600 * 1000 * 24 * 7)
            return date
          },
        },
      ]
    }
  },
  methods:{
    reservePark(){
      this.dialogFormVisible = !this.dialogFormVisible
      let res = JSON.parse(JSON.stringify(this.reserveForm))
      console.log(res);
    }
  },
  components:{
    Star,
    Delete,
    ReservePopup
  }
}
</script>

<style scoped>
.reserveItem_box{
  width: 55rem;
  height: 15rem;
  margin: 1rem 2rem;
  box-shadow: 2px 2px 9px #ccc;
  border: 1px solid #ececec;
  border-radius: 4px;
  display: grid;
  grid-template-columns: 15rem 1fr 1fr;
}
.reserveItem_box img{
  padding: 1rem;
  width: 12rem;
  height: 12rem;
}
.reserve_info{
  font-family: "SimHei", Times, serif;
  font-size: 1.1rem;
  color: var(--el-color-info);
}
.reserve_button{
  padding: 1rem;
  text-align: right;
}
</style>