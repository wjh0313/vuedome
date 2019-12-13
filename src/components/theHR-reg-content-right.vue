<template>
	<div id="theHR-reg-content-right">
		<div class="theRegcontent">
			<p class="thep1">HR手机号码注册</p>
			<div class="theinput1">
				<input type="text" placeholder="手机号" @change.prevent="testtel()" v-model="thetelphone" />
				<span @click="getimage" class="thespan haveHand">获取验证码</span>
			</div>
			<div class="theinput2">
				<input type="text" placeholder="验证码" v-model="theimages" />
			</div>
			<div class="theinput2">
				<input type="password" placeholder="密码" @change.prevent="testpassword()" v-model="passwords" />
			</div>
			<p @click="judgereg" class="theupload haveHand">提交注册</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "theHRReg",
	data() {
		return {
			//自定义验证码
			theimage: "%&￥@）*￥&&@lo*sd！！",
			//用户输入验证码
			theimages: "",
			//用户输入的手机号码
			thetelphone: "",
			//用户定义的密码
			passwords: "",
			//手机号码格式是否正确
			telphonestick: false,
			//密码格式是否正确
			passwordstick: false
		};
	},
	methods: {
		//通过点击事件获取验证码
		getimage: function() {
			//发送请求获取验证码
			this.axios.get("http://localhost:3000/getCode").then(
				res => {
					this.theimage = res.data;
					alert(
						"请记着这次注册的验证码------>" +
							this.theimage +
							"<------不要填写错误哦"
					);
				},
				res => {
					window.console.log(res);
				}
			);
		},
		judgereg: function() {
			//判断是否验证码是否相同且用户输入的手机号码和密码格式是否正确
			if (
				this.theimage == this.theimages &&
				this.telphonestick === true &&
				this.passwordstick === true
			) {
				//将其电话号码和密码发送到后端
				//后续axios操作
				this.axios
					.get("http://localhost:3000/getimage", {
						params: {
							telphone: this.thetelphone,
							password: this.passwords,
							job: "HR"
						}
					})
					.then(
						res => {
							alert(res.data);
							// window.console.log(res);
						},
						res => {
							window.console.log(res);
						}
					);
			}
			//判断用户有没有输入正确的手机号码
			else if (this.thetelphone == "") {
				alert("请输入手机号码哦");
			}
			//判断用户有没有输入密码
			else if (this.passwords == "") {
				alert("请输入密码哦");
			}
			//判断验证码格式
			else {
				alert("请输入正确的验证码");
			}
		},
		//匹配手机号码格式
		testtel: function() {
			if (!/^1[3456789]\d{9}$/.test(this.thetelphone)) {
				this.telphonestick = false;
				alert("手机号码格式不对请填写正确的手机号码");
			} else {
				this.telphonestick = true;
			}
		},
		//匹配密码格式
		testpassword: function() {
			if (
				!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(this.passwords)
			) {
				this.passwordstick = false;
				alert("密码至少包含 数字和英文，长度6-20");
			} else {
				this.passwordstick = true;
			}
		}
	}
};
</script>

<style lang="less">
#theHR-reg-content-right {
	float: right;
	width: 528px;
	height: 457px;
	margin-top: 140px;
	background-color: #fff;
	margin-right: 402px;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
	box-shadow: 5px 5px 10px -4px #eee, 5px -5px 10px -4px #eee;
	.theRegcontent {
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
			margin-top: 35px;
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