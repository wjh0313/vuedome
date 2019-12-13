<template>
	<div class="thecontentfive-right">
		<div class="manger-top">
			<div @click="change1" class="manger-top-fir">
				<img v-if="isShowpng1" src="@/assets/teacher-land-person-chick.png" alt />
				<img v-if="!isShowpng1" src="@/assets/teacher-land-person-chick1.png" alt />
				<span>已发布课程</span>
			</div>
			<div @click="change2" class="manger-top-center">
				<img v-if="isShowpng2" src="@/assets/teacher-land-person-chick.png" alt />
				<img v-if="!isShowpng2" src="@/assets/teacher-land-person-chick1.png" alt />
				<span>审核中课程</span>
			</div>
			<div @click="change3" class="manger-top-footer">
				<img v-if="isShowpng3" src="@/assets/teacher-land-person-chick.png" alt />
				<img v-if="!isShowpng3" src="@/assets/teacher-land-person-chick1.png" alt />
				<span>未通过审核课程</span>
			</div>
		</div>
		<div class="margin-contet clearfix">
			<img src="@/assets/teacher-land-person-tou.png" alt />
			<div class="margin-contet-ps">
				<p class="thep1">
					{{thearr1[0]}}
					<span class="thespan" v-if="!isShowpng1">{{thearr3[0]}}</span>
				</p>
				<p class="thep2">{{thearr1[1]}}</p>
				<p v-if="!isShowpng1" class="theaddp">
					<span class="iconfont icon-touxiang fs-12">{{thearr4[0]}}</span>
					<span class="iconfont icon-xiaoxi1 fs-12">{{thearr4[1]}}</span>
				</p>
				<p class="thep3">{{thearr1[2]}}</p>
			</div>
			<div class="thecontenbtns">
				<p class="theps1">修改课程</p>
				<p v-if="!isShowpng3" class="theps2">删除课程</p>
			</div>
		</div>
		<div class="margin-contet clearfix">
			<img src="@/assets/teacher-land-person-tou.png" alt />
			<div class="margin-contet-ps">
				<p class="thep1">
					{{thearr2[0]}}
					<span class="thespan1" v-if="!isShowpng1">{{thearr3[1]}}</span>
				</p>
				<p class="thep2">{{thearr2[1]}}</p>
				<p v-if="!isShowpng1" class="theaddp">
					<span class="iconfont icon-touxiang fs-12">{{thearr4[0]}}</span>
					<span class="iconfont icon-xiaoxi1 fs-12">{{thearr4[1]}}</span>
				</p>
				<p class="thep3">{{thearr2[2]}}</p>
			</div>
			<div class="thecontenbtns">
				<p class="theps1">修改课程</p>
				<p v-if="!isShowpng3" class="theps2">删除课程</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "personCourseMycouser",
	data() {
		return {
			thearr1: ["显露你的实力---面试", "上传时间：3月23日 15:43", "免费"],
			thearr2: ["微信微博新媒体营销课程", "上传时间：3月23日 15:43", "￥199"],
			thearr3: ["「进行中」", "「已结束」"],
			thearr4: ['128位学院','18条评论'],
			isShowpng3: true,
			isShowpng2: false,
			isShowpng1: true
		};
	},
	methods: {
		change1: function() {
			this.isShowpng3 = true;
			this.isShowpng2 = true;
			this.isShowpng1 = false;
		},
		change2: function() {
			this.isShowpng3 = true;
			this.isShowpng2 = false;
			this.isShowpng1 = true;
			this.thearr1[2] = "免费";
			this.thearr2[2] = "￥199";
		},
		change3: function() {
			this.isShowpng3 = false;
			this.isShowpng2 = true;
			this.isShowpng1 = true;
			this.thearr1[2] = "失败原因：内容包含反动信息，请修改";
			this.thearr2[2] = "失败原因：内容包含反动信息，请修改";
		}
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
.fs-12
{
	font-size: 12px;
}
.clearfix::after {
	content: "";
	display: block;
	height: 0;
	clear: both;
	visibility: hidden;
}
.thecontentfive-right {
	width: 900px;
	height: 580px;
	background-color: #ffffff;
	float: right;
	border-radius: 10px;
	margin-top: 30px;
	.manger-top {
		height: 100px;
		line-height: 100px;
		img {
			width: 25px;
			height: 25px;
		}
		span {
			font-size: 16px;
			color: #000;
			margin-left: 12px;
			position: relative;
			top: -7px;
		}
		.manger-top-fir {
			cursor: pointer;
			margin-left: 30px;
			display: inline-block;
		}
		.manger-top-center {
			cursor: pointer;
			margin-left: 45px;
			display: inline-block;
		}
		.manger-top-footer {
			cursor: pointer;
			margin-left: 60px;
			display: inline-block;
		}
	}
	.margin-contet {
		img {
			float: left;
			width: 190px;
			height: 120px;
			margin-top: 40px;
			margin-left: 30px;
		}
		height: 200px;
		border-top: 1px solid #eee;
		.margin-contet-ps {
			display: inline-block;
			margin-left: 20px;
			.thep1 {
				margin-top: 40px;
				.thespan {
					color: #00aaff;
				}
				.thespan1 {
					color: #999;
				}
			}
			.thep2 {
				font-size: 12px;
				color: #999;
				margin-top: 12px;
			}
			.thep3 {
				color: #00aaff;
				margin-top: 12px;
			}
			.theaddp
			{
				margin-top: 10px;
				color: #999;
				span{
					margin-right: 10px;
				}
			}
		}
		.thecontenbtns {
			text-align: center;
			float: right;
			margin-right: 44px;
			margin-top: 85px;
			.theps1 {
				cursor: pointer;
				width: 160px;
				height: 32px;
				border: 1px solid #eee;
				border-radius: 15px;
				line-height: 32px;
				color: #00aaff;
			}
			.theps2 {
				cursor: pointer;
				width: 160px;
				height: 32px;
				line-height: 32px;
				font-size: 12px;
				color: #999;
			}
		}
	}
}
</style>