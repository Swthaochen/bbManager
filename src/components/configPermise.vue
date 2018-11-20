<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
        <el-menu-item index="configPermise">二级管理员</el-menu-item>
        <el-menu-item index="localManeger">区域管理员</el-menu-item>
        <el-button
            class="addBnt"
            type="primary" plain>添加
        </el-button>
    </el-menu>
    <router-view></router-view>
  </div>
</template>
<script>
import headertop from '@/components/headerTop';
export default {
    data(){
        return{
            activeIndex:'configPermise'
        }
    },
    components:{
        headertop
    }
}
</script>
<style>
.addBnt{
    margin: 11px;
}

</style>

