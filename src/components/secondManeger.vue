<template>
    <div>
        <template>
            <el-table
                :data="adminList"
                style="width: 100%">
                <el-table-column
                width='100'
                type="index">
                </el-table-column>
                <el-table-column
                width='250'
                prop="adminId"
                label="账号">
                </el-table-column>
                <el-table-column
                prop="adminPhone"
                label="电话">
                </el-table-column>
                <el-table-column
                prop="adminSchool"
                width='250'
                label="学校">
                </el-table-column>
                <el-table-column>
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                     @click="deleteThis(scope.row)"
                        type="info">删除
                    </el-button>
                </template>
                </el-table-column>
            </el-table>
        </template>
    </div>
</template>
<script>
import {getAdmin,getSchoolList,deleteAdmin} from '../API/API'
export default {
    data(){
        return{
            adminList:[],
            schoolList:[]
        }
    },
    methods:{
        deleteThis(row){
            console.log(row)
            deleteAdmin(this,row.adminId).then((res)=>{
                getSchoolList(this).then((res)=>{
                    this.schoolList = res.body.data
                    return getAdmin(this)
                })
                .then((res)=>{
                    res.body.data.forEach(element => {
                        element.adminSchool = this.schoolList[element.adminSchoolId].schoolName
                    });
                    this.adminList = res.body.data
                })
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    },
    mounted(){
        getSchoolList(this).then((res)=>{
            this.schoolList = res.body.data
            return getAdmin(this)
        })
        .then((res)=>{
            res.body.data.forEach(element => {
                element.adminSchool = this.schoolList[element.adminSchoolId].schoolName
            });
            this.adminList = res.body.data
        })
    }
}
</script>
<style>

</style>

