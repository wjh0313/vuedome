<template>
	<div class="thecontent-right">
		<div class="theinpt1 clearfix">
			<label for="inpt1">姓名</label>
			<input
				id="inpt1"
				type="text"
				:readonly="theinput"
				:class="!theinput?'inputActive':''"
				v-model="arrint.name"
				@change="juagename"
			/>
			<span v-if="theinput" @click="changeinput" class="thespan">编辑</span>
		</div>
		<div class="theinpt2">
			<label for="inpt2">出生年月</label>
			<input
				id="inpt2"
				type="text"
				readonly="agepanduan"
				:class="!theinput?'inputActive':''"
				v-model="age"
				placeholder="本项不可输入，填完身份证信息可同步出生年月"
			/>
		</div>
		<div class="theinpt3">
			<label for="inpt3">性别</label>
			<select
				:disabled="theinput"
				:class="!theinput?'inputActive':''"
				name
				id="inpt3"
				v-model="arrint.sex"
			>
				<option value="1" selected>男</option>
				<option value="2">女</option>
			</select>
		</div>
		<div class="theinpt4">
			<label for="inpt4">手机号</label>
			<input
				id="inpt4"
				type="text"
				:readonly="theinput"
				:class="!theinput?'inputActive':''"
				v-model="arrint.telphone"
				@change="juagetelphone"
			/>
			<span class="aspans">√ 已验证</span>
			<span v-show="!theinput" class="getimage haveHand">获取验证码</span>
		</div>
		<div class="theinpt5">
			<label for="inpt5">邮箱</label>
			<input
				id="inpt5"
				type="text"
				:readonly="theinput"
				:class="!theinput?'inputActive':''"
				v-model="arrint.youxiang"
				@change="juageyx"
			/>
		</div>
		<div class="theinpt6">
			<label for="inpt6">身份证</label>
			<input
				id="inpt6"
				type="text"
				:readonly="theinput"
				:class="!theinput?'inputActive':''"
				v-model="arrint.idcard"
				@change="theages"
			/>
		</div>
		<div class="theinpt7">
			<label for="inpt7">微信号</label>
			<input
				id="inpt7"
				type="text"
				:readonly="theinput"
				:class="!theinput?'inputActive':''"
				v-model="arrint.wxtel"
				@change="juagewxtel"
			/>
		</div>
		<div class="theinpt8">
			<label for="inpt8">QQ号</label>
			<input
				id="inpt8"
				type="text"
				:readonly="theinput"
				:class="!theinput?'inputActive':''"
				v-model="arrint.qqtel"
				@change="juageqq"
			/>
		</div>
		<div class="thebtn">
			<span v-if="!theinput" @click="changeimg" class="thebtn-fir">保存修改</span>
			<span v-if="!theinput" @click="changeimg1" class="thebtn-sec">取消修改</span>
		</div>
	</div>
</template>


<script>
export default {
	name: "personBasicInfMymessage",
	data() {
		return {
			arrint: {
				name: "",
				sex: "",
				telphone: "",
				youxiang: "",
				idcard: "",
				wxtel: "",
				qqtel: ""
			},
			arrintcopy: {},
			age: "",
			agepanduan: false,
			theinput: true
		};
	},
	methods: {
		changeinput: function() {
			this.arrintcopy = Object.assign({}, this.arrint);
			this.theinput = false;
		},
		changeimg: function() {
			this.theinput = true;
			//将用户修改的数据提交到数据库
				this.axios
					.get("http://localhost:3000/updataimages", {
						params: {
							thearr: this.arrint
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
		},
		changeimg1: function() {
			this.agepanduan = true;
			this.age = "";
			this.arrint = this.arrintcopy;
			this.agepanduan = false;
			this.theinput = true;
		},
		juagename: function() {
			if (this.arrint.name.length > 4 || this.arrint.name.length == 0) {
				
				alert("姓名需要长度小于4且不可以为0");
			} 
		},
		juagetelphone: function() {
			if (!/^1[3456789]\d{9}$/.test(this.arrint.telphone)) {
				
				alert("手机号码格式不对请填写正确的手机号码");
			} 
		},
		juageyx: function() {
			if (
				!/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(
					this.arrint.youxiang
				)
			) {
				
				alert("邮箱格式不对请填写正确的邮箱");
			} 
		},
		// !(/\d{17}[\d|x]|\d{15}/).test(value) || (value.length !== 15 && value.length !== 18))
		// /^[a-zA-Z][a-zA-Z0-9_-]{5,19}$/
		theages: function() {
			if (
				!/\d{17}[\d|x]|\d{15}/.test(this.arrint.idcard) ||
				(this.arrint.idcard.length !== 15 && this.arrint.idcard.length !== 18)
			) {
				
				alert("身份证格式不对请填写正确的身份证");
			} else {
				this.agepanduan = true;
				
				this.age = this.getBirthdayFromIdCard(this.arrint.idcard);
				this.agepanduan = false;
			}
		},
		juagewxtel: function() {
			if (!/^[a-zA-Z][a-zA-Z0-9_-]{5,19}$/.test(this.arrint.wxtel)) {
				
				alert("微信格式不对请填写正确的微信号");
			} 
		},
		juageqq: function() {
			if (!/^[1-9][0-9]{4,9}$/gim.test(this.arrint.qqtel)) {
				
				alert("qq格式不对请填写正确的qq号");
			} 
		},
		getBirthdayFromIdCard: function(idCard) {
			var birthday = "";
			if (idCard != null && idCard != "") {
				if (idCard.length == 15) {
					birthday = "19" + idCard.substr(6, 6);
				} else if (idCard.length == 18) {
					birthday = idCard.substr(6, 8);
				}

				birthday = birthday.replace(/(.{4})(.{2})/, "$1-$2-");
			}

			return birthday;
		},
		juage: function() {}
	},
	mounted() {
		if (this.$cookies.get("images") != null) {
			this.axios
				.get("http://localhost:3000/username", {
					params: {
						thenum: this.$cookies.get("images").split("&")[0],
						job: this.$cookies.get("images").split("&")[1],
						static: this.$cookies.get("images").split("&")[2]
					}
				})
				.then(
					res => {
						this.theinput = false;
						this.arrint = res.data[0];
						this.agepanduan = true;
						this.age = this.getBirthdayFromIdCard(this.arrint.idcard);
						this.agepanduan = false;
						this.theinput = true;
						// window.console.log(res.data[0]);
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
.thecontent-right {
	margin-top: 30px;
	float: right;
	width: 900px;
	height: 580px;
	background-color: #ffffff;
	border-radius: 15px;
	.theinpt1 {
		margin-top: 50px;
		margin-left: 60px;
		.thespan {
			font-size: 18px;
			color: #00aaff;
			float: right;
			margin-right: 45px;
			cursor: pointer;
		}
	}
	.theinpt2 {
		margin-left: 30px;
		margin-top: 10px;
	}
	.theinpt3 {
		margin-left: 60px;
		margin-top: 10px;
	}
	.theinpt4 {
		position: relative;
		margin-left: 45px;
		margin-top: 10px;
		.getimage {
			display: inline-block;
			position: absolute;
			width: 160px;
			height: 42px;
			line-height: 42px;
			border-left: 1px solid #eee;
			left: 300px;
			text-indent: 40px;
		}
		.aspans {
			position: absolute;
			color: #abc123;
			font-size: 14px;
			top: 10px;
			left: 230px;
		}
	}
	.theinpt5 {
		margin-left: 60px;
		margin-top: 10px;
	}
	.theinpt6 {
		margin-left: 45px;
		margin-top: 10px;
	}
	.theinpt7 {
		margin-left: 45px;
		margin-top: 10px;
	}
	.theinpt8 {
		margin-left: 52px;
		margin-top: 10px;
	}
	input {
		margin-left: 20px;
		text-indent: 20px;
		outline: none;
		border: none;
		width: 400px;
		height: 42px;
		box-sizing: border-box;
	}
	select {
		box-sizing: border-box;
		margin-left: 20px;
		text-indent: 20px;
		border: none;
		outline: none;
		width: 400px;
		height: 42px;
	}
	label {
		color: #999;
		font-size: 14px;
	}
	.inputActive {
		border: 1px solid #eee;
		border-radius: 5px;
	}
	.thebtn {
		width: 550px;
		text-align: center;
		margin-top: 20px;
		.thebtn-fir {
			display: inline-block;
			width: 160px;
			height: 44px;
			background-color: #00aaff;
			color: #ffffff;
			cursor: pointer;
			line-height: 44px;
			border-radius: 10px;
		}
		.thebtn-fir {
			display: inline-block;
			width: 160px;
			height: 44px;
			background-color: #00aaff;
			color: #ffffff;
			cursor: pointer;
			line-height: 44px;
			border-radius: 10px;
		}
		.thebtn-sec {
			margin-left: 20px;
			border: 1px solid #eee;
			display: inline-block;
			width: 160px;
			height: 44px;
			cursor: pointer;
			line-height: 44px;
			border-radius: 10px;
		}
	}
}
</style>