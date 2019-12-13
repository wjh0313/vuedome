<template>
	<div id="teacher-land-content-right">
		<div class="thetopTab">
			<span @click="changeTab(0)" class="haveHand" :class="spanIsactive == 0 ? 'spanActive':''">老师账号登陆</span>
			<span @click="changeTab(1)" class="haveHand" :class="spanIsactive == 1 ? 'spanActive':''">微信登陆</span>
		</div>
		<div class="thecenterInput">
			<input v-if="spanIsactive == 0" type="text" placeholder="手机号" v-model="input1" />
			<input v-if="spanIsactive == 1" type="text" placeholder="微信号" v-model="input1" />
			<input class="mt-40" type="password" placeholder="密码" v-model="input2" />
		</div>
		<router-link to="/LandReg/teacherForget"><p class="theforgetpassword haveHand">忘记密码？</p></router-link>
		<p @click="judge" class="theupload haveHand">登陆啦！</p>
		<p class="thereg">
			<span>还没有账号？</span>
			<span>请</span>
			<router-link to='/LandReg/teacherReg'><span class="haveHand thecolor">注册</span></router-link>
		</p>
	</div>
</template>

<script>
export default {
	name:'teacherLand',
	data() {
		return {
            spanIsactive: 0,
			input1: "",
			input2: ""
		};
	},
	methods: {
		changeTab: function(val) {
			this.input2 = "";
			this.input1 = "";
			this.spanIsactive = val;
		},
		judge: function() {
			//发送请求验证账号密码
			this.axios
				.get("http://localhost:3000/upload", {
					params: {
						uploadimage: this.input1,
						password: this.input2,
						stiac: this.spanIsactive == 0 ? "telphone" : "wxtel",
						job: "老师"
					}
				})
				.then(
					res => {
						alert(res.data);
						this.changeTab(this.spanIsactive);
						if(res.data == '登陆成功')
						{
							this.$router.push({path:'/person/myHome'});
						}
						// window.console.log(res);
					},
					res => {
						window.console.log(res);
					}
				);
		}
	}
};
</script>

<style lang="less">
#teacher-land-content-right {
	float: right;
	width: 528px;
	height: 457px;
	margin-top: 140px;
	background-color: #fff;
	margin-right: 402px;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
	box-shadow: 5px 5px 10px -4px #eee, 5px -5px 10px -4px #eee;
	.thetopTab {
		margin-top: 45px;
		margin-left: 65px;
		span {
			display: inline-block;
			padding: 15px 70px;
			color: #7c8495;
			border-bottom: 4px solid #eee;
		}
		.spanActive {
			border-bottom: 4px solid #abc000;
			color: #abc000;
		}
	}
	.thecenterInput {
		margin-left: 65px;
		margin-top: 50px;
		input {
			display: block;
			border: none;
			outline: none;
			border-bottom: 1px solid #eee;
			color: #7c8495;
			width: 410px;
			height: 35px;
		}
	}
	.theforgetpassword {
		margin-top: 12px;
		margin-left: 400px;
		color: #7c8495;
	}
	.theupload {
		margin-left: 65px;
		margin-top: 50px;
		width: 410px;
		height: 45px;
		background-color: #abc000;
		color: #fff;
		border-radius: 25px;
		text-align: center;
		line-height: 45px;
	}
	.thereg {
		margin-top: 25px;
		text-align: center;
		color: #7c8495;
	}
	.thecolor {
		color: #abc000;
    }
}
</style>