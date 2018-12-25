<template>
  <div>
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
          prop="reducePrice"
          label="优惠额度"
          width="100"
          align="center">
        </el-table-column>
        <el-table-column
          prop="leastPrice"
          label="使用条件"
          width="200"
          align="center">
        </el-table-column>
        <el-table-column
          prop="validTime"
          label="生效时间"
          width="200"
          align="center">
        </el-table-column>
        <el-table-column
          prop="invalidTime"
          label="失效时间"
          width="200"
          align="center">
        </el-table-column>
        <el-table-column
          label="操作"
          align="center">
          <template slot-scope="scope">
            <el-button @click="deleteCoupon(scope.row)" type="danger">撤销优惠券</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="buttons">
        <el-button type="success" @click="dialogFormVisible = true">添加优惠券</el-button>
      </div>
      <el-dialog title="添加优惠券" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="优惠额度" :label-width="formLabelWidth">
            <el-input placeholder="只输入优惠金额数字，如“3”" v-model.number="form.reducePrice" autocomplete="off"></el-input>
          </el-form-item>
          <br>
          <el-form-item label="优惠条件" :label-width="formLabelWidth">
            <el-input placeholder="只输入满额金额数字，如“30”" v-model.number="form.leastPrice" autocomplete="off"></el-input>
          </el-form-item>
          <br>
          <el-form-item label="生效时间" :label-width="formLabelWidth">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.validTime" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <br>
          <el-form-item label="失效时间" :label-width="formLabelWidth">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.invalidTime" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-form>
        <el-upload
          action="https://bang.zhengsj.top/admin/coupon/addNew"
          :headers="header"
          :limit="1"
          accept="image/png,image/gif,image/jpg,image/jpeg"
          ref="upload"
          name="picture"
          :data="usefulData"
          :file-list="fileList"
          :auto-upload="false">
          <el-button slot="trigger" size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过1m,长宽比为5：2</div>
        </el-upload>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitUpload">确 定</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tableData3: [],
      cookie:'',
      dialogFormVisible: false,
      form: {
        reducePrice:'',
        leastPrice:'',
        validTime:'',
        invalidTime:''
      },
      formLabelWidth: '120px',
      header:{
        token: ''
      },
      flieList: []
    }
  },
  computed: {
    usefulData:function(){
      let obj = {}
      obj.reducePrice = this.form.reducePrice
      obj.leastPrice  = this.form.leastPrice
      obj.validTime = new Date(this.form.validTime).valueOf()
      obj.invalidTime = new Date(this.form.invalidTime).valueOf()
      return obj
    }
  },
  methods: {
    getCoupons(){
      this.$http({
        url: `https://bang.zhengsj.top/admin/coupon/viewAll`,
        methods: 'GET',
        headers: {
          token: this.cookie
        },
        withCredentials: true
      }).then(res => {
        console.log(res);
        res.body.data.forEach(item => {
          item.validTime = new Date(item.validTime).toLocaleString()
          item.invalidTime = new Date(item.invalidTime).toLocaleString()
        })
        this.tableData3 = res.body.data
      })
    },
    submitUpload(){
      this.dialogFormVisible = false
      this.$refs.upload.submit()
      this.getCoupons()
      this.$notify({
          title: '成功',
          message: '优惠券添加成功'
        });
    },
    deleteCoupon(row){
      this.$http({
        url: `https://bang.zhengsj.top/admin/coupon/delete/${row.couponId}`,
        methods: 'GET',
        headers: {
          token: this.cookie
        },
        withCredentials: true
      }).then(res => {
        this.getCoupons()
      })
    }
  },
  created(){
    this.cookie = sessionStorage.getItem('cookie')
    this.header.token = this.cookie
    this.getCoupons()
  }
}
</script>

<style scoped>
  .buttons{
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
</style>
