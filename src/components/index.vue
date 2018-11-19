<template>
	<div class="manage_page fillcontain">
    <el-col :span="4" style="height: 100vh;background-color:#545c64">
        <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router>
        <el-menu-item index="statistics">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">统计中心</span>
        </el-menu-item>
        <el-menu-item index="2">
            <i class="el-icon-warning"></i>
            <span slot="title">应急中心</span>
        </el-menu-item>
        <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">优惠券</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-service"></i>
            <span slot="title">客服中心</span>
        </el-menu-item>
        <el-menu-item index="5">
            <i class="el-icon-sold-out"></i>
            <span slot="title">财务中心</span>
        </el-menu-item>
        <el-menu-item index="6">
            <i class="el-icon-setting"></i>
            <span slot="title">权限配置</span>
        </el-menu-item>
        </el-menu>
    </el-col>
    <el-col :span="20">
       <div>{{$route.query.name}}</div>
        <router-view></router-view>
    </el-col>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
