<template>
  <div>
    <el-table
        :data="tableData3"
        stripe
        style="width: 100%">
        <el-table-column
          prop="info"
          width="600"
          align="center">
        </el-table-column>
        <el-table-column
          prop="time"
          align="center">
        </el-table-column>
        <el-table-column
          prop="tel"
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
export default {
  data(){
    return{
      tableData3: [
        {
          info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo com',
          tel: 15991266003,
          time: '2018.20.13'
        }
      ]
    }
  },
  components:{
  }
}
</script>

<style>

</style>
