<template>
	<div id="teacher-land-person">
		<div class="teacher-land-person-body clearfix">
			<div class="teacher-land-person-body-left">
				<div class="teacher-land-person-body-left-top clearfix">
					<img class="land-person-img" src="../assets/teacher-land-person-portrait.png" alt />
					<div class="the-left-top-rightcontent">
						<p class="therightcontentp1">
							<span>{{username}}</span>
							<img class="therightcontentp1-img" src="../assets/teacher-land-person-mimigirl.png" alt />
						</p>
						<p class="therightcontentp2">
							<span class="therightcontentp2-span1">信息完整度</span>
							<span class="therightcontentp2-span2"></span>
							<span class="therightcontentp2-span3">高</span>
						</p>
						<p class="therightcontentp3">
							<span class="iconfont icon-cc-star"></span>
							<span class="iconfont icon-c-cstar-o"></span>
							<span class="iconfont icon-cc-star-half"></span>
						</p>
					</div>
				</div>
				<router-link to="/person/myMoney/myHave">
				<div class="teacher-land-person-body-left-center">
					<div class="theleft">
						<span>申请提现</span>
					</div>
					
					<div class="theright">
						<p class="therightp1">账户余额</p>
						<p class="therightp2">
							<span class="therightp2-span1">{{accbal}}</span>
							<span class="therightp2-span2">元</span>
						</p>
					</div>
					
				</div>
				</router-link>
				<div class="teacher-land-person-body-left-bottom clearfix">
					<router-link to="/person/basicInformation/aut">
						<div class="theleft">
							<div class="theleft-top">
								<img src="../assets/teacher-land-person-id.png" alt />
							</div>
							<p class="theleft-bottom-p">
								<span class="theleft-bottom-p-span1">实名认证</span>
								<span class="theleft-bottom-p-span2">【未认证】</span>
							</p>
						</div>
					</router-link>
					<router-link to="/person/basicInformation/aut">
						<div class="theright">
							<div class="theright-top">
								<img src="../assets/teacher-land-person-qua.png" alt />
							</div>
							<p class="theright-bottom-p">
								<span class="theright-bottom-p-span1">实名认证</span>
								<span class="theright-bottom-p-span2">【未认证】</span>
							</p>
						</div>
					</router-link>
				</div>
			</div>
			<div class="teacher-land-person-body-right">
				<div class="thetop">
					<router-link to="/person/courseManger/myCourse">
						<div class="thetop-left">
							<p class="thetop-left-p1">我上传的课程</p>
							<p class="thetop-left-p2">
								<span class="thetop-left-p2-span1">{{thenum}}</span>
								<span class="thetop-left-p2-span2">个</span>
							</p>
							<p class="thetop-left-p3">查看详情 ></p>
						</div>
					</router-link>
					<router-link to="/person/queAndans/myanswer">
						<div class="thetop-right">
							<p class="thetop-right-p1">我的问答</p>
							<p class="thetop-right-p2">
								<span class="thetop-right-p2-span1">{{thenums}}</span>
								<span class="thetop-right-p2-span2">个</span>
							</p>
							<p class="thetop-right-p3">查看详情 ></p>
						</div>
					</router-link>
				</div>

				<div class="thebottom">
					<p class="thebottom-p clearfix">
						<span class="thebottom-p-span1">新学员</span>
						<span class="thebottom-p-span2">一周内新增{{trainee}}位学员</span>
					</p>
					<div class="thebottom-div">
						<div :key="index" v-for="(item,index) in arr1" class="thebottom-div-loopimg">
							<img :src="arr2[index]" alt />
							<p>{{item}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "personIndexHome",
	data() {
		return {
			accbal: 248,
			thenum: 3,
			thenums: 3,
			trainee: 25,
			username: "",
			arr1: ["张三", "李四", "麻子", "王二", "张飞"],
			arr2: [
				require("@/assets/teacher-land-person-portrait.png"),
				require("../assets/teacher-land-person-portrait.png"),
				require("../assets/teacher-land-person-portrait.png"),
				require("../assets/teacher-land-person-portrait.png"),
				require("../assets/teacher-land-person-portrait.png")
			]
		};
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
						this.username = res.data[0].name;
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
@import "../../public/font-icon/iconfont.css";
.clearfix::after {
	content: "";
	display: block;
	height: 0;
	clear: both;
	visibility: hidden;
}
#teacher-land-person {
	height: 610px;
	width: 100%;
	background-color: #f4f4f4;
	.teacher-land-person-body {
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;
		.teacher-land-person-body-left {
			display: inline-block;
			width: 450px;
			height: 550px;
			background-color: #ffffff;
			border-radius: 5px;
			margin-top: 30px;
			.teacher-land-person-body-left-top {
				width: 100%;
				height: 150px;
				border-bottom: 1px solid #f6f6f6;
				.land-person-img {
					width: 90px;
					height: 90px;
					margin-left: 35px;
					margin-top: 30px;
				}
				.the-left-top-rightcontent {
					float: right;
					height: 100%;
					width: 65%;
					.therightcontentp1 {
						margin: 0;
						margin-top: 30px;
						font-size: 15px;
						.therightcontentp1-img {
							width: 15px;
							height: 20px;
							margin-left: 15px;
							position: relative;
							top: 2px;
						}
					}
					.therightcontentp2 {
						margin: 0;
						margin-top: 20px;
						.therightcontentp2-span1 {
							font-size: 15px;
							color: #666666;
						}
						.therightcontentp2-span2 {
							display: inline-block;
							width: 140px;
							height: 8px;
							background-color: #00aaff;
							border-radius: 5px;
							margin-left: 12px;
						}
						.therightcontentp2-span3 {
							color: #00aaff;
							font-size: 13px;
							margin-left: 10px;
						}
					}
					.therightcontentp3 {
						margin: 0;
						margin-top: 15px;
						span {
							margin-right: 10px;
						}
					}
				}
			}
			.teacher-land-person-body-left-center {
				height: 115px;
				width: 100%;
				border-bottom: 1px solid #f6f6f6;
				overflow: hidden;
				.theleft {
					display: inline-block;
					height: 32px;
					width: 160px;
					background-color: #00aaff;
					text-align: center;
					border-radius: 25px;
					margin-top: 42px;
					margin-left: 35px;
					cursor: pointer;
					span {
						font-size: 12px;
						color: #ffffff;
						line-height: 32px;
					}
				}
				.theright {
					display: inline-block;
					margin-left: 55px;
					p {
						margin: 0;
					}
					.therightp1 {
						color: #777777;
						font-size: 13px;
					}
					.therightp2 {
						position: relative;
						top: 10px;
						.therightp2-span1 {
							font-size: 18px;
							letter-spacing: 1px;
						}
						.therightp2-span2 {
							font-size: 12px;
							color: #777777;
							margin-left: 6px;
						}
					}
				}
			}
			.teacher-land-person-body-left-bottom {
				.theleft {
					margin-left: 40px;
					margin-top: 65px;
					text-align: center;
					display: inline-block;
					.theleft-top {
						cursor: pointer;
						width: 170px;
						height: 120px;
						background-color: #f8f8f8;
						border: 1px dashed #eeeeee;
						img {
							width: 100px;
							height: 75px;
							margin-top: 25px;
						}
					}
					.theleft-bottom-p {
						font-size: 12px;
						.theleft-bottom-p-span1 {
							color: #7a8fac;
						}
						.theleft-bottom-p-span2 {
							color: #da4e23;
							margin-left: 8px;
						}
					}
				}
				.theright {
					cursor: pointer;
					float: right;
					margin-top: 65px;
					margin-right: 38px;
					text-align: center;
					.theright-top {
						width: 170px;
						height: 120px;
						background-color: #f8f8f8;
						border: 1px dashed #eeeeee;
						img {
							width: 80px;
							height: 80px;
							margin-top: 25px;
						}
					}
					.theright-bottom-p {
						font-size: 12px;
						.theright-bottom-p-span1 {
							color: #7a8fac;
						}
						.theright-bottom-p-span2 {
							color: #da4e23;
							margin-left: 8px;
						}
					}
				}
			}
		}
		.teacher-land-person-body-right {
			float: right;
			height: 550px;
			width: 730px;
			margin-top: 30px;
			.thetop {
				.thetop-left {
					display: inline-block;
					width: 350px;
					height: 265px;
					border-radius: 10px;
					background: url("../assets/teacher-land-person-log2.png") no-repeat;
					background-size: 350px 265px;
					overflow: hidden;
					cursor: pointer;
					p {
						margin: 0;
						margin-left: 50px;
					}
					.thetop-left-p1 {
						margin-top: 35px;
						font-size: 17px;
					}
					.thetop-left-p2 {
						margin-top: 35px;
						.thetop-left-p2-span1 {
							font-size: 18px;
							font-weight: 400;
						}
						.thetop-left-p2-span2 {
							font-size: 14px;
							color: #666666;
							margin-left: 6px;
						}
					}
					.thetop-left-p3 {
						margin-top: 30px;
						font-size: 13px;
						color: #999999;
					}
				}
				.thetop-right {
					margin-left: 30px;
					display: inline-block;
					width: 350px;
					height: 265px;
					border-radius: 10px;
					background: url("../assets/teacher-land-person-log1.png") no-repeat;
					background-size: 350px 265px;
					overflow: hidden;
					cursor: pointer;
					p {
						margin: 0;
						margin-left: 50px;
					}
					.thetop-right-p1 {
						margin-top: 35px;
						font-size: 17px;
					}
					.thetop-right-p2 {
						margin-top: 35px;
						.thetop-right-p2-span1 {
							font-size: 18px;
							font-weight: 400;
						}
						.thetop-right-p2-span2 {
							font-size: 14px;
							color: #666666;
							margin-left: 6px;
						}
					}
					.thetop-right-p3 {
						margin-top: 30px;
						font-size: 13px;
						color: #999999;
					}
				}
			}
			.thebottom {
				width: 730px;
				height: 265px;
				background-color: #ffffff;
				border-radius: 10px;
				margin-top: 15px;
				overflow: hidden;
				.thebottom-p {
					margin-top: 35px;
					margin-left: 50px;
					.thebottom-p-span2 {
						font-size: 13px;
						margin-right: 55px;
						color: #999999;
						float: right;
					}
				}
				.thebottom-div {
					margin-left: 50px;
					margin-top: 45px;
					.thebottom-div-loopimg {
						cursor: pointer;
						margin-right: 32px;
						display: inline-block;
						width: 100px;
						height: 120px;
						text-align: center;
						img {
							width: 90px;
							height: 90px;
						}
						p {
							color: #999999;
						}
					}
				}
			}
		}
	}
}
</style>