<template>
  <div>
    <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">未处理</el-menu-item>
      <el-menu-item index="2">已处理</el-menu-item>
    </el-menu>
    <el-table
        :data="tableData3"
        height="250"
        border
        stripe
        style="width: 100%">
        <el-table-column
          type="index"
          label="序号"
          width="80"
          align="center">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="100"
          align="center">
        </el-table-column>
        <el-table-column
          prop="wechatName"
          label="微信昵称"
          width="100"
          align="center">
        </el-table-column>
        <el-table-column
          prop="tel"
          label="联系方式"
          width="140"
          align="center">
        </el-table-column>
        <el-table-column
          prop="state"
          label="订单状态"
          width="100"
          align="center">
        </el-table-column>
        <el-table-column
          prop="money"
          label="订单金额"
          width="80"
          align="center">
        </el-table-column>
        <el-table-column
          prop="time"
          label="发单时间"
          width="200"
          align="center">
        </el-table-column>
        <el-table-column
          label="操作"
          align="center">
          <template slot-scope="scope">
            <el-button>设置为已处理</el-button>
            <el-button>详情</el-button>
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
          name: '张俊',
          wechatName: 'Kiris',
          tel: 15991266003,
          state: '订单超时',
          money: 3,
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
