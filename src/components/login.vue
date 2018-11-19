<template>
    <div class="main">
        <div class="contain">
            <div class="demo-input-suffix">
            属性方式：
            <el-input
                placeholder="请输入内容"
                v-model="input21">
            </el-input>
            </div>
            <div class="demo-input-suffix">
            slot 方式：
            <el-input
                placeholder="请输入内容"
                v-model="input23">
            </el-input>
            </div>
            <el-button @click="go" type="primary">主要按钮</el-button>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
  	go(){
  		this.$router.push('/index')
  	}
  }
}
</script>
<style>
    .main{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 150px;
    }
    .contain{
        width: 30vw;
    }
    .el-button{
        width: 30vw;
        margin-top: 40px;
    }

</style>

