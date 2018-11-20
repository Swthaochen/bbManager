<template>
    <div>
        <template>
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                type="index">
                </el-table-column>
                <el-table-column
                width='100'
                prop="weChat"
                label="微信">
                </el-table-column>
                <el-table-column
                prop="phone"
                label="手机号码">
                </el-table-column>
                <el-table-column
                width='100'
                prop="money"
                label="金额">
                </el-table-column>
                <el-table-column
                width='180'
                prop="time"
                label="时间">
                </el-table-column>
                <el-table-column
                prop="school"
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
export default {
    data(){
        return{
            tableData: [{
                weChat:'张三',
                phone:'13233333333',
                money:'2223.1元',
                time:'2018年12月12日14：30',
                school:'西安电子科技大学',
                state:'已处理'
            }, {
                weChat:'张三',
                phone:'13233333333',
                money:'23.1元',
                time:'2018年12月12日14：30',
                school:'西安电子科技大学',
                state:'已处理'
            }, {
                weChat:'张三',
                phone:'13233333333',
                money:'23.1元',
                time:'2018年12月12日14：30',
                school:'西安电子科技大学',
                state:'已处理'
            }, {
                weChat:'张三',
                phone:'13233333333',
                money:'23.1元',
                time:'2018年12月12日14：30',
                school:'西安电子科技大学',
                state:'已处理'
            }],
        }
    }
}
</script>
<style>

</style>

