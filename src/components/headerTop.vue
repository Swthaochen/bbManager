<template>
    <div class="header_container">

		<el-breadcrumb separator="/">
			<el-breadcrumb-item >帮帮后台管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-dropdown menu-align='start'>
			<div class="avator">
			</div>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item>首页</el-dropdown-item>
				<el-dropdown-item>退出</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
    </div>
</template>

<script>
    export default {
    	data(){
    		return {
                
    		}
    	}
    }
</script>

<style>
	.header_container{
		background-color: #EFF2F7;
		height: 60px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 20px;
	}
	.avator{
        height: 36px;
        width: 36px;
		border-radius: 50%;
		margin-right: 37px;
        background: #000
	}
	.el-dropdown-menu__item{
        text-align: center;
    }
</style>