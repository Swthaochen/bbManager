<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
        <el-menu-item index="configPermise">二级管理员</el-menu-item>
        <el-menu-item index="localManeger">区域负责人</el-menu-item>
        <el-button
            class="addBnt"
            type="primary" plain
            @click="addBnt"
            >添加
        </el-button>
    </el-menu>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
    <el-form 
        label-width="70px"
        :model="form"
        >
        <el-form-item label="账号">
              <el-input v-model="form.clu_no"></el-input>
          </el-form-item>
          <el-form-item label="电话">
              <el-input v-model="form.clu_name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
              <el-input v-model="form.clu_loc"></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
              <el-input v-model="form.clu_year"></el-input>
          </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
    </el-dialog>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible2">
    <el-form 
        label-width="70px"
        :model="form"
        >
          <el-form-item label="电话">
              <el-input v-model="form.clu_name"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
              <el-input v-model="form.clu_year"></el-input>
          </el-form-item>
          <el-form-item label="微信">
              <el-input v-model="form.clu_year"></el-input>
          </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible2 = false">确 定</el-button>
    </div>
    </el-dialog>
    <router-view></router-view>
  </div>
</template>
<script>
import headertop from '@/components/headerTop';
export default {
    data(){
        return{
            dialogFormVisible:false,
            dialogFormVisible2:false,
            activeIndex:'configPermise',
            form:[
                
            ]
        }
    },
    components:{
        headertop
    },
    methods:{
        addBnt(){
            if(this.$route.path == '/configPermise')
                this.dialogFormVisible = true;
            else
                this.dialogFormVisible2 = true;
            console.log(this.$route.path);
        }
    }

}
</script>
<style>
.addBnt{
    margin: 11px;
}
.el-input{
    width: 250px;
}
.el-form{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

</style>

