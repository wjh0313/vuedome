<template>
	<div class="thecontenttr-right">
		<div class="thecontentt-right-top">
			<p class="theimage">{{theinages}}</p>
			<p class="thecenter">
				<span class="thecenter-span1"></span>
				<span class="thecenter-span2 iconfont icon-duihao"></span>
			</p>
			<p class="thefoot">上传成功 100%</p>
		</div>
		<div class="thecontentt-right-bottom">
			<div class="thefirstinput">
				<label for="theinput1">标题</label>
				<input id="theinput1" type="text" placeholder="请输入课程标题" />
			</div>
			<div class="theselect">
				<label for="theselects">分类</label>
				<select name id="theselects">
					<option selected value>请选择课程分类</option>
					<option value>1</option>
					<option value>2</option>
				</select>
			</div>
			<div class="thetext">
				<label class="therea" for="thetexts">课程介绍</label><textarea name id='thetexts'></textarea>
			</div>
            <router-link to="/person/courseManger/videoing">
			<p class="thebtn">保存信息</p>
            </router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "personCourseVideoImage",
	data() {
		return {
			theinages: "上传的文件名字"
		};
	},
	methods: {
	}
};
</script>

<style lang="less">
@import "../../public/font-icon/iconfont.css";
.thepIsactive {
	color: #00aaff;
}
.margin-ten {
	margin-left: 10px;
}
.clearfix::after {
	content: "";
	display: block;
	height: 0;
	clear: both;
	visibility: hidden;
}
p {
	margin: 0;
}
.thecontenttr-right {
	width: 900px;
	height: 580px;
	background-color: #ffffff;
	float: right;
	border-radius: 10px;
	margin-top: 30px;
	overflow: hidden;
	.thecontentt-right-top {
		width: 100%;
		overflow: hidden;
		background-color: #fafeff;
		border-bottom: 1px solid #eee;
		height: 160px;
		.theimage {
			margin-top: 45px;
			margin-left: 40px;
			font-size: 13px;
		}
		.thecenter {
			margin-left: 40px;
			margin-top: 10px;
			.thecenter-span1 {
				display: inline-block;
				width: 800px;
				height: 9px;
				background-color: #00aaff;
				border-radius: 5px;
			}
			.thecenter-span2 {
				margin-left: 15px;
			}
		}
		.thefoot {
			font-size: 12px;
			color: #999;
			margin-top: 10px;
			margin-left: 40px;
		}
	}
	.thecontentt-right-bottom {
		width: 100%;
		text-align: center;
		label {
			color: #ccc;
			font-size: 14px;
		}
		.thefirstinput {
			margin-top: 35px;
			#theinput1 {
				width: 740px;
				height: 45px;
				outline: none;
				border: 1px solid #eee;
				border-radius: 5px;
				margin-left: 20px;
				text-indent: 15px;
			}
		}
		.theselect {
			margin-top: 13px;
			#theselects {
				width: 740px;
				height: 45px;
				outline: none;
				border: 1px solid #eee;
				border-radius: 5px;
				margin-left: 20px;
				text-indent: 15px;
			}
		}
		.thetext
		{
			margin-top: 15px;
			#thetexts
			{
				width: 720px;
				height: 155px;
				border-radius: 5px;
				border: 1px solid #eee;
				outline: none;
				resize: none;
				padding-top: 15px;
				padding-left: 15px;
			}
			.therea
			{
				position: relative;
				left: -24px;
				bottom: 150px;
			}
		}
		.thebtn
		{
			margin-top: 20px;
			background-color: #00aaff;
			color: #ffffff;
			width: 160px;
			height: 45px;
			line-height: 45px;
			border-radius: 10px;
			cursor: pointer;
			margin-left: 100px;
		}
	}
}
</style>