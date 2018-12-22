<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
        <el-menu-item index="configPermise">二级管理员</el-menu-item>
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
              <el-input v-model="form.adminName"></el-input>
          </el-form-item>
          <el-form-item label="电话">
              <el-input v-model="form.adminPhone"></el-input>
          </el-form-item>
          <el-form-item label="密码">
              <el-input type="password" v-model="form.adminPass"></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
              <el-input type="password" v-model="passConfig"></el-input>
          </el-form-item>
          <el-form-item label="学校"> 
            <el-select v-model="adminSchoolId" placeholder="请选择" @change="chooseSchool(adminSchoolId)">
                <el-option
                v-for="item in schoolList"
                :key="item.id"
                :label="item.value"
                :value="item.id">
                </el-option>
            </el-select>
          </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
    </div>
    </el-dialog>
    <router-view></router-view>
  </div>
</template>
<script>
import headertop from '@/components/headerTop';
import {addSecond} from '../API/API'
import Bus from '../API/Bus'
export default {
    data(){
        return{
            dialogFormVisible:false,
            dialogFormVisible2:false,
            activeIndex:'configPermise',
            adminSchoolId:'',
            form:{
                adminName:'',
                adminPhone:'',
                adminPass:''
            },
            schoolList:[
                {
                    value:'西安电子科技大学',
                    id:1
                },
                {
                    value:'西安邮电大学',
                    id:2
                },
                {
                    value:'西安外国语大学',
                    id:3
                }
            ],
            passConfig:''
        }
    },
    components:{
        headertop
    },
    methods:{
        addBnt(){
            if(this.$route.path == '/configPermise')
                this.dialogFormVisible = true;
            console.log(this.$route.path);
        },
        chooseSchool(id){
            this.adminSchoolId = id
        },
        submitForm(){
            var data = {
                adminName:this.form.adminName,
                adminPhone:this.form.adminPhone,
                adminPass:this.form.adminPass,
                adminSchoolId:this.adminSchoolId,
                adminRole:'ROLE_ADMIN_2' 
            }
            addSecond(this,data).then((res)=>{
                console.log(res)
                Bus.$emit('fresh', 120)
            })
            this.dialogFormVisible = false

        }
    },
    mounted(){
        getSchoolList(this).then((res)=>{
            this.schoolList = res.body.data
        })
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

