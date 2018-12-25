<template>
	<div class="manage_page fillcontain">
    <el-col :span="4" style="height: 100vh;background-color:#545c64">
        <el-menu
        :default-active=index
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router>
        <el-menu-item index="statistical">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">统计中心</span>
        </el-menu-item>
        <el-menu-item index="emergency">
            <i class="el-icon-warning"></i>
            <span slot="title">应急中心</span>
        </el-menu-item>
        <el-menu-item :disabled="bool" index="coupons">
            <i class="el-icon-document"></i>
            <span slot="title">优惠券</span>
        </el-menu-item>
        <el-menu-item :disabled="bool" index="customServer">
            <i class="el-icon-service"></i>
            <span slot="title">客服中心</span>
        </el-menu-item>
        <el-menu-item :disabled="bool" index="finance">
            <i class="el-icon-sold-out"></i>
            <span slot="title">财务中心</span>
        </el-menu-item>
        <el-menu-item :disabled="bool" index="configPermise">
            <i class="el-icon-setting"></i>
            <span slot="title">权限配置</span>
        </el-menu-item>
        </el-menu>
    </el-col>
    <el-col :span="20">
        <header-top></header-top>
        <router-view></router-view>
    </el-col>
    </div>
</template>

<script>
import headerTop from "@/components/headerTop";
export default {
  data(){
      return{
        index:'statistical',
        bool:''
      }
  },
  name: 'index',
  components: {
      headerTop
  },
  created () {
      this.bool = !(sessionStorage.getItem('isBoos') == "true")
      console.log(this.bool);
  },
  mounted () {
    let arr = window.location.href.toString().split('/')
    this.index = arr[arr.length - 1]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>