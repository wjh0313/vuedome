<template>
	<div class="myCard-content">
		<div class="theContents">
			<div v-if="isShow" class="theCard-loop haveHand clearfix">
				<img src="@/assets/teacher-land-person-Card.png" alt />
				<span class="ml-10">华夏银行</span>
				<span class="thespans">默认</span>
				<span class="theRightspan">尾号4704</span>
			</div>
			<div v-if="isShow" @click="changeup" class="theCard-loop-add haveHand">
				<p>+ 添加银行卡</p>
			</div>
			<div v-if="!isShow" class="uptheCard">
				<div class="Input1">
					<label for="inputs1" class="ml-30">姓名</label>
					<input type="text" readonly="true" id="inputs1" />
				</div>
				<div class="Input2">
					<label for="inputs2" class="ml-15">身份证</label>
					<input type="text" readonly="true" id="inputs2" />
				</div>
				<div class="Input3">
					<label for="inputs3">选择银行</label>
					<select name id="inputs3">
						<option value></option>
						<option value></option>
						<option value></option>
						<option value></option>
					</select>
				</div>
				<div class="Input4">
					<label for="inputs4">银行卡号</label>
					<input type="text" id="inputs4" />
				</div>
				<div class="Input5">
					<label for="inputs5">手机号码</label>
					<input type="text" id="inputs5" />
				</div>
				<p @click="changeback" class="thebtn haveHand">保存信息</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "myMoneymyCard",
	data() {
		return {
			isShow: true
		};
	},
	methods: {
		changeup: function() {
			this.isShow = false;
		},
		changeback:function() {
			this.isShow = true;
		}
	}
};
</script>

<style lang="less">
.myCard-content {
	width: 900px;
	height: 580px;
	background-color: #ffffff;
	float: right;
	border-radius: 10px;
	margin-top: 30px;
	.theContents {
		margin-top: 40px;
		margin-left: 40px;
		.theCard-loop {
			.ml-10 {
				margin-left: 10px;
			}
			.thespans {
				color: #00aaff;
				margin-left: 10px;
			}
			display: inline-block;
			width: 400px;
			height: 88px;
			background-color: #fcfcfc;
			border: 1px solid #eee;
			border-radius: 15px;
			margin-right: 20px;
			line-height: 88px;
			overflow: hidden;
			img {
				width: 22px;
				height: 22px;
				margin-left: 34px;
				position: relative;
				top: 5px;
			}
			.theRightspan {
				float: right;
				margin-right: 38px;
			}
		}
		.theCard-loop-add {
			display: inline-block;
			width: 400px;
			height: 88px;
			background-color: #fcfcfc;
			border: 1px solid #eee;
			border-radius: 15px;
			margin-right: 20px;
			line-height: 88px;
			overflow: hidden;
			text-align: center;
			color: #00aaff;
		}
		.uptheCard {
			.thebtn {
				width: 160px;
				height: 44px;
				background-color: #00aaff;
				border-radius: 10px;
				color: #ffffff;
				line-height: 44px;
				text-align: center;
				margin-top: 20px;
				margin-left: 80px;
			}
			label {
				color: #999;
				font-size: 14px;
			}
			.ml-30 {
				margin-left: 30px;
			}
			.ml-15 {
				margin-left: 15px;
			}
			#inputs1 {
				background-color: #eee;
			}
			#inputs2 {
				background-color: #eee;
			}
			select {
				width: 400px;
				height: 44px;
				border: none;
				outline: none;
				border: 1px solid #eee;
				border-radius: 10px;
				text-indent: 20px;
				margin-left: 20px;
				margin-top: 15px;
			}
			input {
				width: 400px;
				height: 44px;
				border: none;
				outline: none;
				border: 1px solid #eee;
				border-radius: 10px;
				text-indent: 20px;
				margin-left: 20px;
				margin-top: 15px;
			}
		}
	}
}
</style>