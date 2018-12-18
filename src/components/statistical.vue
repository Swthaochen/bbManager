<template>
  <div class="contents">
    <div class="pickers">
      <el-date-picker
        v-model="date"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
      <el-select @change="selectSchool" v-model="school" placeholder="按学校选择">
        <el-option
          v-for="item in schools"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button @click="search">查询结果</el-button>
    </div>
    <div class="cards" @click="test">
      <el-card shadow="hover">
        <i class="el-icon-info"> 待配送订单</i>
        <div class="info">{{deleyOrders}}</div>
      </el-card>
      <el-card shadow="hover">
        <i class="el-icon-circle-plus"> 新增订单数量</i>
        <div class="info">{{newOrder}}</div>
      </el-card>
      <el-card shadow="hover">
        <i class="el-icon-success"> 已完成订单数量</i>
        <div class="info">{{completedOrder}}</div>
      </el-card>
      <el-card shadow="hover">
        <i class="el-icon-star-on"> 完成订单总金额</i>
        <div class="info">{{totalMoney}}</div>
      </el-card>
    </div>
  </div>
</template>

<script>
import {test} from '../API/API'
function getDetailDate(date) {
  let year,month,day
  year = date.getFullYear()
  if (date.getMonth()+1 < 10) month = `0${date.getMonth()+1}`
  else month = date.getMonth()+1
  if (date.getDate() < 10) day = `0${date.getDate()+1}`
  else day = date.getDate()
  return `${year}${month}${day}`
}
export default {
  data() {
    return {
      date: '',
      school: '',
      schoolid: '',
      cookie: '',
      newOrder: 0,
      completedOrder: 0,
      totalMoney: 0,
      beginTemp: '',
      endTemp:'',
      deleyOrders: 0,
      schools: [{
          value: '1',
          label: '西安邮电大学'
        }, {
          value: '2',
          label: '陕西国际商贸学院'
        }, {
          value: '3',
          label: '陕西科技大学镐京学院'
        }, {
          value: '4',
          label: '欧亚学院'
        }, {
          value: '5',
          label: '西京学院'
        },{
          value: '6',
          label: '西北大学'
        }, {
          value: '7',
          label: '西安工业大学'
        }, {
          value: '8',
          label: '咸阳财经学院'
        }, {
          value: '9',
          label: '西安电子科技大学'
        }, {
          value: '10',
          label: '西安体育学院'
        },{
          value: '11',
          label: '西安美术学院'
        }, {
          value: '12',
          label: '西安科技大学'
        }]
    }
  },
  components:{
  },
  methods:{
    test(){
      test(this).then((res)=>{
        console.log(res)
      })
    },
    selectSchool(e){
      this.schoolid = e
    },
    search(){
      this.newOrder = 0
      this.totalMoney = 0
      this.deleyOrders = 0
      this.completedOrder = 0
      let date1 = new Date(this.date[0]) 
      let date1_value= getDetailDate(date1)
      let date2 = new Date(this.date[1]) 
      let date2_value= getDetailDate(date2)
      this.beginTemp = new Date(this.date[0]).valueOf()
      this.endTemp = new Date(this.date[1]).valueOf()
      this.$http({
        url: `https://bang.zhengsj.top/admin/statistics/viewConcreteInfo/${date1_value}/${date2_value}`,
        methods: 'GET',
        headers: {
          token: this.cookie
        },
        withCredentials: true
      }).then(res => {
        let data = res.body.data
        if(!this.schoolid){
          data.forEach(item => {
            this.newOrder += item.newIndent
            this.completedOrder += item.finishedIndent
            this.totalMoney += item.income
          })
        } else {
          data.forEach(item => {
            if(item.schoolId == this.schoolid) {
              this.newOrder += item.newIndent
              this.completedOrder += item.finishedIndent
              this.totalMoney += item.income
            }
          })
        }
      })
      this.$http({
        url: `https://bang.zhengsj.top/admin/statistics/viewUnPicked`,
        methods: 'GET',
        headers: {
          token: this.cookie
        },
        data: {
          schoolid: this.schoolid
        },
        withCredentials: true
      }).then(res => {
        this.deleyOrders = 0
        console.log(res);
        res.body.data.forEach(item => {
          item.createTime = new Date(item.createTime).valueOf()
          if (!this.schoolid){
            if (item.createTime >= this.beginTemp && item.createTime <= this.endTemp) this.deleyOrders++
          } else {
            if (item.createTime >= this.beginTemp && item.createTime <= this.endTemp && this.schoolid == item.schoolId) this.deleyOrders++
          }
        })
      })
    }
  },
  mounted(){
    this.cookie = sessionStorage.getItem('cookie')
    this.cookie = this.cookie.split('=')[1]
  }
}
</script>

<style scoped>
  .contents{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .pickers{
    width: 60%;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }
  .cards{
    display: flex;
    justify-content: space-between;
    margin-top: 250px;
    width: 80%
  }
  .info{
    width: 100%;
    text-align: center;
    margin-top: 30px;
    font-size: 25px;
    font-weight: bolder
  }
  .el-card{
    width: 200px;
    height: 120px;
    text-align: center;
  }
</style>
