<template>
	<div class="myHave-content">
		<div class="thecontent-top">
			<p class="theCenter-span clearfix">
				<span v-if="isShow">总收入</span>
				<span v-if="!isShow">可提现金额</span>
				<span class="themoney">￥{{themoney}}</span>
				<span v-if="isShow" @click="changeup" class="therightspan haveHand">我要提现</span>
			</p>
		</div>
		<div v-if="isShow" class="theCenter-bottom">
			<p class="theBottom-top">收入明细</p>
			<p class="theSpans-loop clearfix">
				<span class="theTime">2017-05-09 20:12:40</span>
				<span class="themoney">+7</span>
				<span class="theimage">学院课程付费（课程编号：11789900106）</span>
			</p>
		</div>
		<div v-if="!isShow" class="theUpmoney">
			<div class="thefirstint">
				<label class="ml-55" for="input1">提现金额</label>
				<input type="text" name id="input1" v-model="teupmoney" />
			</div>
			<div class="theserint">
				<label class="ml-40" for="input2">提现银行卡</label>
				<select name id="input2">
					<option value selected>6225 777</option>
					<option value>6666 888</option>
				</select>
			</div>
			<div class="thethreeint">
				<label class="ml-70" for="input3">手续费</label>
				<select name id="input3">
					<option value selected>24小时到账（免费）</option>
					<option value>1小时到账 （1%）</option>
				</select>
			</div>
			<p @click="changeback" class="thelastp">确认提现</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "myMoneymyHave",
	data() {
		return {
			themoney: 400,
			teupmoney:'',
			isShow: true
		};
	},
	methods: {
		changeup: function() {
			this.teupmoney = this.themoney;
			this.isShow = false;
		},
		changeback:function() {
			this.themoney = this.themoney - this.teupmoney;
			this.isShow = true;
		}
	}
};
</script>

<style lang="less">
.myHave-content {
	width: 900px;
	height: 580px;
	background-color: #ffffff;
	float: right;
	border-radius: 10px;
	margin-top: 30px;
	.thecontent-top {
		height: 100px;
		border-bottom: 2px solid #eee;
		width: 100%;
		line-height: 100px;
		.theCenter-span {
			margin-left: 40px;
			.themoney {
				font-size: 30px;
				color: #00aaff;
				margin-left: 30px;
				position: relative;
				top: 3px;
			}
			.therightspan {
				float: right;
				line-height: 33px;
				width: 160px;
				height: 32px;
				background-color: #00aaff;
				color: #fff;
				text-align: center;
				border-radius: 10px;
				margin-top: 35px;
				margin-right: 40px;
			}
		}
	}
	.theCenter-bottom {
		.theBottom-top {
			margin-top: 40px;
			margin-left: 40px;
			border-bottom: 2px solid #00aaff;
			padding-bottom: 10px;
			width: 65px;
		}
		.theSpans-loop {
			margin-top: 25px;
			.theTime {
				margin-left: 40px;
				color: #999;
				font-size: 14px;
				margin-right: 116px;
			}
			.themoney {
				color: #00aaff;
			}
			.theimage {
				float: right;
				margin-right: 200px;
				color: #999;
			}
		}
	}
	.theUpmoney {
		.ml-55 {
			margin-left: 55px;
		}
		.ml-40 {
			margin-left: 41px;
		}
		.ml-70{
			margin-left: 70px;
		}
		label {
			color: #999;
			font-size: 14px;
		}
		select {
			width: 400px;
			height: 44px;
			outline: none;
			border: none;
			border: 1px solid #eee;
			border-radius: 5px;
			font-size: 16px;
			text-indent: 15px;
			margin-left: 20px;
			color: #999;
		}
		.thefirstint {
			margin-top: 40px;
			#input1 {
				color: #00aaff;
				width: 400px;
				height: 44px;
				outline: none;
				border: none;
				border: 1px solid #eee;
				border-radius: 5px;
				font-size: 18px;
				text-indent: 15px;
				margin-left: 20px;
			}
		}
		.theserint
		{
			margin-top: 15px;
		}
		.thethreeint
		{
			margin-top: 15px;
		}
		.thelastp
		{
			width: 160px;
			height: 44px;
			background-color: #00aaff;
			border-radius: 10px;
			color: #ffffff;
			line-height: 44px;
			text-align: center;
			margin-top: 20px;
			margin-left: 130px;
		}
	}
}
</style>
