<template>
  <div>
    <el-table
        :data="InfoHandle"
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
            <span>已处理</span>
          </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
import {getHanledInfo} from '../API/API'
export default {
  data(){
    return{
      InfoHandle: [
      ]
    }
  },
  components:{
  },
  mounted(){
      getHanledInfo(this).then((res)=>{
        res.body.data.forEach(element => {
          let date = new Date(element.createTime);
          var theDate = date.getFullYear() + '.' + date.getMonth() + '.' + date.getDate()
          element.createTime = theDate
        });
        this.InfoHandle = res.body.data
      })
  }
}
</script>

<style>

</style>