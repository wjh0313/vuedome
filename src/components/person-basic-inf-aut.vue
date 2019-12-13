<template>
	<div class="thecontent-right clearfix">
		<div class="thecontent-right-left">
			<div class="thecontenttop">
				<div class="thecontenttop-img">
					<label for="input1"></label>
					<input
						id="input1"
						name="file"
						type="file"
						accept="image/png, image/gif, image/jpeg"
						@click="changeColorf"
					/>
					<img src="../assets/teacher-land-person-pic.png" alt />
					<label class="marginl-twoten" for="input2"></label>
					<input
						id="input2"
						name="file"
						type="file"
						accept="image/png, image/gif, image/jpeg"
						@click="changeColort"
					/>
					<img class="marginl-twoten" src="../assets/teacher-land-person-pic.png" alt />
					<p>
						<span class="thespan">身份证(正面)</span>
						<span
							class="maginr-fiften span-color"
							:class="isActiceSpan == 3? 'span-colorActive':''"
						>{{arrspan[isActiceSpan]}}</span>
						<span class="thespan">身份证(反面)</span>
						<span
							class="span-color"
							:class="isActiceSpan == 3? 'span-colorActive':''"
						>{{arrspan[isActiceSpan]}}</span>
					</p>
				</div>
				<p class="thecontenttop-p">请上传真实的身份证信息（正反面）</p>
				<p class="thecontenttop-p margint-fif">照片要四角对齐，如有模糊、反光、太暗有遮挡，则不予认证</p>
				<div class="thecontenttop-font"></div>
			</div>
			<div class="thecontentbottom">
				<div class="thecontentbottom-img">
					<label for="input3"></label>
					<input
						id="input3"
						name="file"
						type="file"
						accept="image/png, image/gif, image/jpeg"
						@click="changeColort"
					/>
					<img @click="changeColortr" src="../assets/teacher-land-person-pic.png" alt />
					<p>
						<span class="thespan">资质认证</span>
						<span
							class="span-color"
							:class="isActiceSpan == 3? 'span-colorActive':''"
						>{{arrspan[isActiceSpan]}}</span>
					</p>
				</div>
				<p class="thecontentbottom-p">请上传能证明您专业技能的照片</p>
				<p class="thecontentbottom-p margint-fif">如：资质证书、加盖公章的材料证明，获奖证书等</p>
			</div>
		</div>
		<div class="thecontent-right-right">
			<div class="thecontent-top clearfix">
				<span class="thecontent-top-span">个人简介</span>
				<span v-show="isShwowtext" @click="changetext" class="thecontent-top-span2">编辑</span>
			</div>
			<div class="thecontent-top-text">
				<textarea
					name
					id
					v-model="thetext"
					wrap="hard"
					:readonly="isShwowtext"
					:class=" !isShwowtext ?'activetext':''"
				></textarea>
			</div>
			<div class="thecontent-top-btns">
				<span v-show="!isShwowtext" @click="backtext" class="thebtn1">确认修改</span>
				<span v-show="!isShwowtext" @click="backtext" class="thebtn2">取消修改</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "personBasicInfAut",
	data() {
		return {
			arrspan: ["【未认证】", "【认证失败】", "【认证中】", "【已认证】"],
			isActiceSpan: 0,
			isShwowtext: true,
			thetext:
				"《罗密欧与朱丽叶》（Romeo and Juliet）是英国剧作家威廉·莎士比亚创作的戏剧，因其知名度而常被误称为莎士比亚的四大悲剧之一（实为《麦克白》、《奥赛罗》、《李尔王》及《哈姆雷特》）。\n    该剧讲述意大利贵族凯普莱特女儿朱丽叶与蒙太古的儿子罗密欧诚挚相爱，誓言相依，但因两家世代为仇而受到阻挠。",
			thetextcopy: ""
		};
	},
	methods: {
		changeColorf: function(e) {
			this.isActiceSpan = 1;
			let file = e.target.files[0];
			let param = new FormData(); // 创建form对象
			param.append("file", file); // 通过append向form对象添加数据
			window.console.log( file,param);
		},
		changeColort: function(e) {
			this.isActiceSpan = 3;
			let file = e.target.files[0];
			let param = new FormData(); // 创建form对象
			param.append("file", file); // 通过append向form对象添加数据
			window.console.log( file,param);
		},
		changeColortr: function(e) {
			this.isActiceSpan = 2;
			let file = e.target.files[0];
			let param = new FormData(); // 创建form对象
			param.append("file", file); // 通过append向form对象添加数据
			window.console.log(file,param);
		},
		changetext: function() {
			this.isShwowtext = false;
			this.thetextcopy = this.thetext.slice(0);
		},
		backtext: function() {
			this.isShwowtext = true;
		},
		backtext1: function() {
			this.thetext = this.thetextcopy;
			this.isShwowtext = true;
		}
	}
};
</script>

<style lang="less">
.span-color {
	color: #da4e23;
	font-size: 12px;
}
.span-colorActive {
	color: #71e493;
	font-size: 12px;
}
.margin-ten {
	margin-left: 10px;
}
.maginr-fiften {
	margin-right: 50px;
}
.marginl-twoten {
	margin-left: 20px;
}
p {
	margin: 8px 0;
}
.thecontent-right {
	width: 900px;
	height: 580px;
	background-color: #ffffff;
	float: right;
	border-radius: 10px;
	margin-top: 30px;
	.thecontent-right-left {
		display: inline-block;
		width: 50%;
		height: 100%;
		border-right: 1px solid #eeeeee;
		.thecontenttop {
			.thecontenttop-img {
				position: relative;
				label {
					position: absolute;
					width: 170px;
					height: 120px;
					margin-top: 50px;
				}
				input {
					position: absolute;
					visibility: hidden;
				}
			}
			.thecontenttop-p {
				color: #cccccc;
				font-size: 12px;
				margin: 0;
			}
			.margint-fif {
				margin-top: 5px;
			}
			text-align: center;
			width: 100%;
			height: 50%;
			border-bottom: 1px solid #eeeeee;
			img {
				cursor: pointer;
				margin-top: 50px;
				width: 170px;
				height: 120px;
			}
			.thespan {
				font-size: 12px;
				color: #7d92ae;
			}
		}
		.thecontentbottom {
			position: relative;
			text-align: center;
			label {
				position: absolute;
				width: 170px;
				height: 120px;
				margin-top: 50px;
			}
			input {
				position: absolute;
				visibility: hidden;
			}
			img {
				cursor: pointer;
				margin-top: 50px;
				width: 170px;
				height: 120px;
			}
			.thespan {
				font-size: 12px;
				color: #7d92ae;
			}
			.thecontentbottom-p {
				color: #cccccc;
				font-size: 12px;
				margin: 0;
			}
			.margint-fif {
				margin-top: 5px;
			}
		}
	}
	.thecontent-right-right {
		float: right;
		width: 449px;
		margin-top: 50px;
		.thecontent-top {
			margin-left: 35px;
			.thecontent-top-span {
				color: #000;
				font-size: 16px;
			}
			.thecontent-top-span2 {
				float: right;
				margin-right: 45px;
				cursor: pointer;
				color: #00aaff;
				font-weight: 500;
			}
		}
		.thecontent-top-text {
			margin-left: 35px;
			margin-top: 30px;
			textarea {
				width: 363px;
				height: 355px;
				resize: none;
				outline: none;
				border: none;
				text-indent: 18px;
				padding-top: 20px;
			}
			.activetext {
				border: 1px solid #eee;
			}
		}
		.thecontent-top-btns {
			width: 100%;
			text-align: center;
			margin-top: 24px;
			.thebtn1 {
				display: inline-block;
				width: 160px;
				height: 45px;
				color: #ffffff;
				background-color: #00aaff;
				line-height: 45px;
				border-radius: 10px;
				cursor: pointer;
			}
			.thebtn2 {
				display: inline-block;
				width: 160px;
				height: 45px;
				border: 1px solid #eeeeee;
				line-height: 45px;
				border-radius: 10px;
				margin-left: 20px;
				cursor: pointer;
			}
		}
	}
}
</style>