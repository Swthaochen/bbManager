<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
      <el-menu-item style="font-size:22px;" index="1" text-color="#000" disabled>提现信息</el-menu-item>
      <el-menu-item index="finance">未处理</el-menu-item>
      <el-menu-item index="haveHandled">已处理</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return {
        activeIndex:'finance',
    }
  },
  components:{
  }
}
</script>

<style>

</style>
