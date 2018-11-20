<template>
  	<div class="login_page fillcontain">
	  	<transition name="form-fade" mode="in-out">
	  		<section class="form_contianer">
		  		<div class="manage_tip">
		  			<p>elm后台管理系统</p>
		  		</div>
		    	<el-form :model="loginForm" :rules="rules" ref="loginForm">
					<el-form-item prop="username">
						<el-input placeholder="用户名"></el-input>
					</el-form-item>
					<el-form-item prop="password">
						<el-input type="password" placeholder="密码"></el-input>
					</el-form-item>
					<el-form-item>
				    	<el-button @click="go" type="primary" class="submit_btn">登陆</el-button>
				  	</el-form-item>
				</el-form>
	  		</section>
	  	</transition>
  	</div>
</template>

<script>
	export default {
	    data(){
			return {
				loginForm: {
					username: '',
					password: '',
				},
				rules: {
					username: [
			            { required: true, message: '请输入用户名', trigger: 'blur' },
			        ],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' }
					],
				},
				showLogin: false,
			}
        },
        methods:{
            go(){
                this.$router.push('/statistical')
            }
        }
	}
</script>

<style scoped>
	.manage_tip{
		position: absolute;
		width: 100%;
		top: -100px;
		left: 0;

	}
    .manage_tip p{
        font-size: 34px;
        color: #fff;
	}
	.form_contianer{
        margin-left: 30vw;
        margin-right: 30vw;
        margin-top: 150px;
		border-radius: 5px;
		text-align: center;
		background-color: #fff;
	}
    
    .submit_btn{
        width: 100%;
        font-size: 16px;
    }
	.tip{
		font-size: 12px;
		color: red;
	}
	.form-fade-enter-active, .form-fade-leave-active {
	  	transition: all 1s;
	}
	.form-fade-enter, .form-fade-leave-active {
	  	transform: translate3d(0, -50px, 0);
	  	opacity: 0;
	}
</style>
