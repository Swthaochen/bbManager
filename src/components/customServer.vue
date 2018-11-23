<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
      <el-menu-item style="font-size:22px;color=#000" index="1" text-color="#000" disabled>用户反馈</el-menu-item>
      <el-menu-item index="customServer">未处理</el-menu-item>
      <el-menu-item index="customDone">已处理</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return {
        activeIndex:'customServer',
    }
  }
}
</script>

<style>

</style>
