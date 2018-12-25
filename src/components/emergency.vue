<template>
  <div>
    <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">未处理</el-menu-item>
      <el-menu-item index="2">已处理</el-menu-item>
    </el-menu>
    <el-table
        :data="tableData3"
        height="400"
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
          prop="trueName"
          label="姓名"
          width="100"
          align="center">
        </el-table-column>
        <el-table-column
          prop="userName"
          label="微信昵称"
          width="100"
          align="center">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="联系方式"
          width="140"
          align="center">
        </el-table-column>
        <el-table-column
          prop="urgentType"
          label="订单状态"
          width="100"
          align="center">
        </el-table-column>
        <el-table-column
          prop="indentPrice"
          label="订单金额"
          width="80"
          align="center">
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="发单时间"
          width="200"
          align="center">
        </el-table-column>
        <el-table-column
          label="操作"
          align="center">
          <template slot-scope="scope">
            <el-button v-if="flag" @click="doneOrder(scope.row)">设置为已处理</el-button>
            <el-button @click="getDetail(scope.row)">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog
        title="订单信息"
        :visible.sync="dialogVisible"
        width="30%">
        <div>下单人：{{orderDetail.trueName}}</div>
        <div>学校：{{orderDetail.school}}</div>
        <div>订单内容：{{orderDetail.indentContent}}</div>
        <div>取货地点：{{orderDetail.shippingAddressId}}</div>
        <div>送货地点：{{orderDetail.takeGoodAddress}}</div>
        <div>订单金额：{{orderDetail.totalPrice}}</div>
        <div>发布者电话：{{orderDetail.phone}}</div>
        <div>发布时间：{{orderDetail.createTime}}</div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<script>
function getType(urgentType){
  if(urgentType == 0) return '未加急'
  else if(urgentType == 1) return '超时'
  else return '退单'
}
export default {
  data(){
    return{
      tableData3: [],
      flag: true,
      dialogVisible: false,
      orderDetail:''
    }
  },
  methods: {
    getEmergy(){
      this.$http({
        url: `https://bang.zhengsj.top/admin/urgent/indent/unhandled`,
        methods: 'GET',
        headers: {
          token: this.cookie
        },
        withCredentials: true
      }).then(res => {
        res.body.data.forEach(item => {
          item.createTime = new Date(item.createTime).toLocaleString()
          item.urgentType = getType(item.urgentType)
        })
        this.tableData3 = res.body.data
      })
    },
    handleSelect(e){
      let url = (e == 1) ? `https://bang.zhengsj.top/admin/urgent/indent/unhandled` : `https://bang.zhengsj.top/admin/urgent/indent/handled`
      this.flag = (e == 1) ? true : false
      this.$http({
        url,
        methods: 'GET',
        headers: {
          token: this.cookie
        },
        withCredentials: true
      }).then(res => {
        res.body.data.forEach(item => {
          item.createTime = new Date(item.createTime).toLocaleString()
          item.urgentType = getType(item.urgentType)
        })
        this.tableData3 = res.body.data
        console.log(this.tableData3);
      })
    },
    getDetail(row){
      this.dialogVisible = true
      this.orderDetail = row
      console.log(row);
    },
    doneOrder(row){
      this.$http({
        url: `https://bang.zhengsj.top/admin/urgent/indent/${row.indentId}`,
        methods: 'GET',
        headers: {
          token: this.cookie
        },
        withCredentials: true
      }).then(res => {
        this.getEmergy()
      })
    }
  },
  created(){
    this.cookie = sessionStorage.getItem('cookie')
    this.getEmergy()
  }
}
</script>

<style>

</style>
