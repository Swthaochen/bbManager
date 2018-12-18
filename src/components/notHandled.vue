<template>
    <div>
        <template>
            <el-table
                :data="InfoNotHandle"
                style="width: 100%">
                <el-table-column
                type="index">
                </el-table-column>
                <el-table-column
                width='200'
                prop="userId"
                label="微信">
                </el-table-column>
                <el-table-column
                prop="phone"
                label="手机号码">
                </el-table-column>
                <el-table-column
                prop="balance"
                label="金额">
                </el-table-column>
                <el-table-column
                width='180'
                prop="createTime"
                label="时间">
                </el-table-column>
                <el-table-column
                prop="schoolName"
                width='180'
                label="学校">
                </el-table-column>
                <el-table-column>
                <template slot-scope="scope">
                    <el-button
                        type="primary"
                        @click="handleThis(scope.row)"
                        >设置为已处理
                    </el-button>
                </template>
                </el-table-column>
            </el-table>
        </template>
    </div>
</template>
<script>
import {fanNotHandled,handleFance} from '../API/API'
export default {
    data(){
        return{
            InfoNotHandle: [],
        }
    },
    mounted(){
        fanNotHandled(this).then((res)=>{
            console.log(res.body.data)
            res.body.data.forEach(element => {
                let date = new Date(element.createTime);
                var theDate = date.getFullYear() + '.' + date.getMonth() + '.' + date.getDate()
                element.createTime = theDate
            });
            this.InfoNotHandle = res.body.data
        })
    },
    methods:{
        handleThis(row){
            handleFance(this,row.userId).then((res)=>{
                console.log(res)
                fanNotHandled(this).then((res)=>{
                    res.body.data.forEach(element => {
                        let date = new Date(element.createTime);
                        var theDate = date.getFullYear() + '.' + date.getMonth() + '.' + date.getDate()
                        element.createTime = theDate
                    });
                    this.InfoNotHandle = res.body.data
                })
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }
}
</script>
<style>

</style>

