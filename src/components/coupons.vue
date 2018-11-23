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
          prop="money"
          label="优惠额度"
          width="100"
          align="center">
        </el-table-column>
        <el-table-column
          prop="conditions"
          label="使用条件"
          width="200"
          align="center">
        </el-table-column>
        <el-table-column
          prop="startTime"
          label="生效时间"
          width="200"
          align="center">
        </el-table-column>
        <el-table-column
          prop="endTime"
          label="失效时间"
          width="200"
          align="center">
        </el-table-column>
        <el-table-column
          label="操作"
          align="center">
          <template slot-scope="scope">
            <el-button type="danger">撤销优惠券</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="buttons">
        <el-button type="success" @click="dialogFormVisible = true">添加优惠券</el-button>
      </div>
      <el-dialog title="添加优惠券" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="优惠额度" :label-width="formLabelWidth">
            <el-input placeholder="只输入优惠金额数字，如“3”" v-model.number="form.money" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="优惠条件" :label-width="formLabelWidth">
            <el-input placeholder="只输入满额金额数字，如“30”" v-model.number="form.conditions" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="生效时间" :label-width="formLabelWidth">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.startTime" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item label="失效时间" :label-width="formLabelWidth">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.endTime" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tableData3: [
        {
          money: 3,
          conditions: '满30',
          startTime: '2018-10-13',
          endTime: '2018-12-31'
        }
      ],
      dialogFormVisible: false,
        form: {
          money:'',
          conditions:'',
          startTime:'',
          endTime:''
        },
        formLabelWidth: '120px'
    }
  },
  components:{
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
