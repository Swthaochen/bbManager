<template>
    <div class="stuInfo">
        <div class="myForm">
            <el-form ref="form" :model="form1" label-width="120px">
                <el-form-item label="公司收益占比">
                    <el-input placeholder="请输入公司收益占比,如0.5" v-model="form1.companyRatio" place></el-input>
                </el-form-item>
                <el-form-item label="推荐人收益占比">
                    <el-input placeholder="请输入推荐人收益占比,如0.5" v-model="form1.masterRatio"></el-input>
                </el-form-item>
                <el-form-item label="接单者收益占比">
                    <el-input placeholder="请输入接单者收益占比,如0.5" v-model="form1.performerRatio"></el-input>
                </el-form-item>
                <el-form-item label="最小单价">
                    <el-input placeholder="请输入最小单价，如3" v-model="form1.leastPrice"></el-input>
                </el-form-item>
                <el-form-item label="超时时间">
                    <el-input placeholder="请输入超时时间，单位为秒" v-model="form1.overTime"></el-input>
                </el-form-item>
                <el-form-item class="bottom-bnt">
                    <el-button type="primary" @click="clickChange">点击修改</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="myForm">
            <el-form ref="form" :model="form2" label-width="120px">
                <el-form-item label="学校名">
                    <el-input placeholder="请输入新增的学校名(一旦添加无法修改或删除)" v-model="form2.schoolName"></el-input>
                </el-form-item>
                <el-form-item class="bottom-bnt">
                    <el-button type="primary" @click="clickAdd">点击添加</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import {getConfigNums,setConfigNums,setConfigSchool} from '../API/API'
export default {
    data() {
      return {
        form1: {
            companyRatio:'',
            masterRatio:'',
            performerRatio:'',
            leastPrice:'',
            overTime:''
        },
        form2:{
            schoolName:''
        }
      }
    },
    methods:{
        clickChange(){
            this.form1.companyRatio = parseFloat(this.form1.companyRatio) || 0
            this.form1.masterRatio = parseFloat(this.form1.masterRatio) || 0
            this.form1.performerRatio = parseFloat(this.form1.performerRatio) || 0
            //console.log(parseFloat(this.form1.companyRatio) + parseFloat(this.form1.masterRatio) + parseFloat(this.form1.performerRatio))
            if(this.form1.companyRatio + this.form1.masterRatio + this.form1.performerRatio != 1){
                //不通过验证
                console.log(this.form1.companyRatio + this.form1.masterRatio + this.form1.performerRatio)
            }else{
                //通过验证
                setConfigNums(this,this.form1).then((res)=>{
                    console.log(res)
                })
            }
        },
        clickAdd(){
            if(this.form2.schoolName == ''){
                console.log('学校名不能为空')
            }else{
                console.log(this.form2)
                setConfigSchool(this,this.form2).then((res)=>{
                    console.log(res)
                })
            }
        }
    },
    mounted(){
        getConfigNums(this).then((res)=>{
            console.log(res.body.data)
            this.form1 = res.body.data
        })
    }
}
</script>
<style scoped>
.el-form{
    width: 39vw;
    border: 1px solid #000;
    margin-top: 30px;
    padding: 10px 50px;
    border-radius: 8px;
    box-shadow:3px 3px 3px 3px #abcdef;
}
.myForm{
    display: flex;
    justify-content: center;
}
.el-form-item{
    margin-right: 50px;
}
.el-tag{
    margin-right:10px
}
.bottom-bnt{
    margin-top: 30px
}
</style>
