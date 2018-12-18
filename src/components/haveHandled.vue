<template>
    <div>
        <template>
            <el-table
                :data="InfoHandle"
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
                <el-table-column
                prop="state"
                label="状态">
                </el-table-column>
            </el-table>
        </template>
    </div>
</template>
<script>
import {fanHandled} from '../API/API'
export default {
    data(){
        return{
            InfoHandle: [],
        }
    },
    mounted(){
        fanHandled(this).then((res)=>{
            console.log(res.body.data)
            res.body.data.forEach(element => {
                let date = new Date(element.createTime);
                var theDate = date.getFullYear() + '.' + date.getMonth() + '.' + date.getDate()
                element.createTime = theDate
                element.state = '已处理'
            });
            this.InfoHandle = res.body.data
        })
    }
}
</script>
<style>

</style>

