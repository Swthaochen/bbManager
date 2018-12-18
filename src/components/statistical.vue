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
      <el-select v-model="school" placeholder="按学校选择">
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
        <div class="info">123</div>
      </el-card>
      <el-card shadow="hover">
        <i class="el-icon-circle-plus"> 新增订单数量</i>
        <div class="info">123</div>
      </el-card>
      <el-card shadow="hover">
        <i class="el-icon-success"> 已完成订单数量</i>
        <div class="info">123</div>
      </el-card>
      <el-card shadow="hover">
        <i class="el-icon-star-on"> 完成订单总金额</i>
        <div class="info">123</div>
      </el-card>
    </div>
  </div>
</template>

<script>
import {test} from '../API/API'
function setCookie(key, value, iDay) {
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + iDay);
    document.cookie = key + '=' + value + ';expires=' + oDate;
}
export default {
  data() {
    return {
      date: '',
      school: '',
      cookie: '',
      schools: [{
          value: '选项1',
          label: '西安电子科技大学'
        }, {
          value: '选项2',
          label: '西北大学'
        }, {
          value: '选项3',
          label: '西北政法大学'
        }, {
          value: '选项4',
          label: '西安邮电大学'
        }, {
          value: '选项5',
          label: '西安外国语大学'
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
    search(){
      let date1 = new Date(this.date[0]) 
      let date1_value=`${date1.getFullYear()}${(date1.getMonth() + 1)}${date1.getDate()}`
      let date2 = new Date(this.date[1]) 
      let date2_value=`${date2.getFullYear()}${(date2.getMonth() + 1)}${date2.getDate()}`
      this.$http({
        url: `https://bang.zhengsj.top/admin/statistics/viewConcreteInfo/${date1_value}/${date2_value}`,
        methods: 'GET',
        headers: {
          token: this.cookie
        },
        withCredentials: true
      }).then(res=>console.log(res))
    }
  },
  mounted(){
    this.cookie = sessionStorage.getItem('cookie')
    this.cookie = this.cookie.split('=')[1]
    console.log(this.cookie)
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
