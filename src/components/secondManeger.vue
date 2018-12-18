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
                width='200'
                prop="weChat"
                label="账号">
                </el-table-column>
                <el-table-column
                prop="phone"
                label="电话">
                </el-table-column>
                <el-table-column
                width='250'
                prop="money"
                label="邮箱">
                </el-table-column>
                <el-table-column
                prop="school"
                width='250'
                label="学校">
                </el-table-column>
                <el-table-column>
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                        type="info">删除
                    </el-button>
                </template>
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

