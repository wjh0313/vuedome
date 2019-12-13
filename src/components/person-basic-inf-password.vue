<template>
	<div class="thecontent-right">
		<div class="thecontent-right-top">
			<p>密码登陆</p>
		</div>
		<div class="thecontent-right-bottom">
			<div class="thecontent-right-bottom-div1">
				<label for="div1-inp">原密码</label>
				<input
					type="password"
					@change="judgepassword"
					name
					id="div1-inp"
					placeholder="请输入原始密码"
					v-model="inputpassword"
				/>
			</div>
			<div class="thecontent-right-bottom-div2">
				<label for="div1-inp">新密码</label>
				<input type="password" @change="judge" name id="div2-inp" placeholder="请输入新密码" v-model="input1" />
			</div>
			<div class="thecontent-right-bottom-div3">
				<label for="div1-inp">确认密码</label>
				<input
					type="password"
					@change="judges"
					name
					id="div3-inp"
					placeholder="请再次输入新密码"
					v-model="input2"
				/>
			</div>
			<div class="thecontent-right-bottom-div4">
				<span @click="uppassword" class="thebtnspan1">确认修改</span>
				<span class="thebtnspan2">取消修改</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "personbasicInfPassword",
	data() {
		return {
			thepassword: "",
			inputpassword: "",
			thestick: false,
			thestickpass: false,
			input1: "",
			input2: ""
		};
	},
	methods: {
		judgepassword: function() {
			if (this.thepassword == this.inputpassword) {
				this.thestick = true;
			} else {
				this.thestick = false;
				alert("与原密码不符合请输入原密码");
			}
		},
		judge: function() {
			if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(this.input1)) {
				alert("密码至少包含 数字和英文，长度6-20");
			} else if (this.thepassword == this.input1) {
				alert("与原密码相同请更换新密码");
			}
		},
		judges: function() {
			if (this.input1 == this.input2) {
				this.thestickpass = true;
			} else {
				this.thestickpass = false;
				alert("前后密码不一致，请重新输入");
			}
		},
		uppassword: function() {
			if (
				this.input1 != "" &&
				this.input2 != "" &&
				this.thestick == true &&
				this.thestickpass == true
			) {
				//发送修改数据请求
			this.axios
				.get("http://localhost:3000/reset", {
					params: {
						uploadimage: this.$cookies.get("images").split("&")[0],
						password: this.input1,
						stiac: this.$cookies.get("images").split("&")[2],
						job: "老师"
					}
				})
				.then(
					res => {
						alert(res.data);
						if(res.data == '修改成功')
						{
							this.$router.push({path:'/LandReg/teacherLand'});
						}
						// window.console.log(res);
					},
					res => {
						window.console.log(res);
					}
				);
			} else {
				alert("操作失误，请将输入框内容填写正确");
			}
		}
	},
	mounted() {
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
					this.thepassword = res.data[0].password;
					// window.console.log(res.data[0]);
				},
				res => {
					window.console.log(res);
				}
			);
	}
};
</script>

<style lang="less">
.thecontent-right {
	width: 900px;
	height: 580px;
	background-color: #ffffff;
	float: right;
	border-radius: 10px;
	margin-top: 30px;
	.thecontent-right-top {
		width: 100%;
		height: 110px;
		border-bottom: 1px solid #eeeeee;
		p {
			font-size: 15px;
			margin-left: 50px;
			line-height: 110px;
		}
	}
	.thecontent-right-bottom {
		margin-left: 50px;
		margin-top: 45px;
		.thecontent-right-bottom-div1 {
			label {
				color: #999;
				margin-left: 15px;
			}
			#div1-inp {
				text-indent: 10px;
				margin-left: 20px;
				width: 400px;
				height: 43px;
				border: 1px solid #eeeeee;
				border-radius: 5px;
				outline: none;
				font-size: 14px;
			}
		}
		.thecontent-right-bottom-div2 {
			margin-top: 15px;
			label {
				margin-left: 15px;
				color: #999;
			}
			#div2-inp {
				text-indent: 10px;
				margin-left: 20px;
				width: 400px;
				height: 43px;
				border: 1px solid #eeeeee;
				border-radius: 5px;
				outline: none;
				font-size: 14px;
			}
		}
		.thecontent-right-bottom-div3 {
			margin-top: 15px;
			label {
				color: #999;
			}
			#div3-inp {
				text-indent: 10px;
				margin-left: 20px;
				width: 400px;
				height: 43px;
				border: 1px solid #eeeeee;
				border-radius: 5px;
				outline: none;
				font-size: 14px;
			}
		}
		.thecontent-right-bottom-div4 {
			margin-top: 20px;
			margin-left: 85px;
			.thebtnspan1 {
				cursor: pointer;
				line-height: 45px;
				text-align: center;
				display: inline-block;
				width: 160px;
				height: 45px;
				background-color: #00aaff;
				border-radius: 10px;
				color: #ffffff;
			}
			.thebtnspan2 {
				cursor: pointer;
				margin-left: 20px;
				line-height: 45px;
				text-align: center;
				display: inline-block;
				width: 160px;
				height: 45px;
				background-color: #fff;
				border: 1px solid #eeeeee;
				border-radius: 10px;
				color: black;
			}
		}
	}
}
</style>