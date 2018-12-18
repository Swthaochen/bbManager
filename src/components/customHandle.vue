<template>
  <div>
    <el-table
        :data="InfoNotHandle"
        stripe
        style="width: 100%">
        <el-table-column
          prop="content"
          width="600"
          align="center">
        </el-table-column>
        <el-table-column
          prop="createTime"
          align="center">
        </el-table-column>
        <el-table-column
          prop="phone"
          align="center">
        </el-table-column>
        <el-table-column
          align="center">
          <template slot-scope="scope">
            <el-button @click="setHandle(scope.row)">设置为已处理</el-button>
          </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
import {getNotHandle,handleInfo} from '../API/API'
export default {
  data(){
    return{
      InfoNotHandle: [
      ]
    }
  },
  methods:{
    setHandle(row){
      handleInfo(this,row.feedbackId).then((res)=>{
        getNotHandle(this).then((res)=>{
          res.body.data.forEach(element => {
            let date = new Date(element.createTime);
            var theDate = date.getFullYear() + '.' + date.getMonth() + '.' + date.getDate()
            element.createTime = theDate
          });
          this.InfoNotHandle = res.body.data
        })
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  },
  components:{
  },
  mounted(){
      getNotHandle(this).then((res)=>{
        res.body.data.forEach(element => {
          let date = new Date(element.createTime);
          var theDate = date.getFullYear() + '.' + date.getMonth() + '.' + date.getDate()
          element.createTime = theDate
        });
        this.InfoNotHandle = res.body.data
      })
  }
}
</script>

<style>

</style>
