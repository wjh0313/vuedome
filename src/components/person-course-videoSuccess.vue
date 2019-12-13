<template>
	<div class="thecontentt-right">
		<div class="thecontentt-right-top">
			<p class="theimage">{{theinages}}</p>
			<p class="thecenter">
				<span class="thecenter-span1"></span>
				<span class="thecenter-span2 iconfont icon-duihao"></span>
			</p>
			<p class="thefoot">上传成功 100%</p>
		</div>
		<div class="thecontentt-right-bottom">
			<img src="@/assets/teacher-land-person-duihao.png" alt="">
			<p class="bottom-p1">保存成功，等待审核</p>
			<p class="bottom-p2">课程上传成功，正在进行人工审核，我们会在24小时后告知您审核结果，请耐心等待</p>
            <router-link to="/person/courseManger/upvideo">
			<p  class="bottom-p3">继续上传</p>
            </router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "personCourseSuccess",
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
.thecontentt-right {
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
	.thecontentt-right-bottom
	{
		width: 100%;
		text-align: center;
		img{
			margin-top: 80px;
			width: 85px;
			height: 85px;
		}
		.bottom-p1
		{
			font-size: 20px;
			margin-top: 20px;
		}
		.bottom-p2
		{
			margin-top: 15px;
			font-size: 14px;
			color: #999;
			width: 320px;
			margin-left: 300px;
		}
		.bottom-p3
		{
			background-color: #00aaff;
			border-radius: 10px;
			width: 160px;
			height: 45px;
			line-height: 45px;
			color: #ffffff;
			margin-top: 20px;
			margin-left: 370px;
			cursor: pointer;
		}
	}
}
</style>