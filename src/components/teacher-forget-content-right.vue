<template>
	<div id="teacher-forget-content-right">
		<div class="theforgetPassword">
			<p class="thep1">通过手机验证码登陆</p>
			<div class="theinput1">
				<input type="text" placeholder="手机号" v-model="thetelphone" />
				<span @click="judges" class="thespan haveHand">获取验证码</span>
			</div>
			<div class="theinput2">
				<input type="text" placeholder="验证码" v-model="theimage" />
			</div>
			<p @click="judgesup" class="theupload haveHand">登陆啦！</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "teacherforget",
	data() {
		return {
			thetelphone: "",
			theimage: "",
			theimages: "dsfdgfasf434wesedfgry534werg"
		};
	},
	methods: {
		judges: function() {
			//发送手机号码验证是否存在验证并登陆
			this.axios
				.get("http://localhost:3000/forget", {
					params: {
						telphone: this.thetelphone,
						job: "老师"
					}
				})
				.then(
					res => {
						this.theimages = res.data;
						alert(this.theimages);
						// window.console.log(res);
					},
					res => {
						window.console.log(res);
					}
				);
		},
		judgesup: function() {
			if (this.theimage == this.theimages) {
				alert("登陆成功");
				//老师跳转路径
				this.$router.push({path:'/person/myMoney'});
			} else if (this.thetelphone == "") {
				alert("请输入手机号码");
			} else {
				alert("验证码错误，重新获取验证码");
			}
		}
	}
};
</script>

<style lang="less">
#teacher-forget-content-right {
	float: right;
	width: 528px;
	height: 457px;
	margin-top: 140px;
	background-color: #fff;
	margin-right: 402px;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
	box-shadow: 5px 5px 10px -4px #eee, 5px -5px 10px -4px #eee;
	.theforgetPassword {
		margin-top: 60px;
		margin-left: 65px;
		.thep1 {
			width: 410px;
			text-align: center;
			padding-bottom: 15px;
			border-bottom: 4px solid #eee;
		}
		input {
			border: none;
			outline: none;
			border-bottom: 1px solid #eee;
			color: #7c8495;
			width: 410px;
			height: 35px;
		}
		.theinput1 {
			position: relative;
			margin-top: 45px;
			.thespan {
				position: absolute;
				left: 326px;
				color: #abc000;
			}
		}
		.theinput2 {
			margin-top: 35px;
		}
		.theupload {
			margin-left: 0;
			margin-top: 90px;
			width: 410px;
			height: 45px;
			background-color: #abc000;
			color: #fff;
			border-radius: 25px;
			text-align: center;
			line-height: 45px;
		}
	}
}
</style>