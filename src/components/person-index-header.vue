<template>
	<div id="header-person">
		<div class="header-top">
			<div class="header-top-content clearfix">
				<img class="header-top-img" src="@/assets/header-person-lcon.png" alt />
				<div @click="findtomyperson" class="header-top-content-right">
					<router-link to="/person/basicInformation/mymessage">
						<img class="header-top-content-right-img" src="@/assets/header-person-portrait.png" alt />
						<span class="header-top-content-right-span">{{username}}</span>
						<img class="header-top-content-right-img2" src="@/assets/header-person-arrow.png" alt />
					</router-link>
				</div>
			</div>
		</div>
		<div class="header-middle">
			<div class="header-middle-content clearfix">
				<div class="header-middle-content-left">
					<router-link to="/person/myHome">
						<span class="header-middle-content-left-span">My Center</span>
					</router-link>
				</div>
				<div class="header-middle-content-center">
					<router-link
						:to="arrlink[index]"
						v-show="spanindex!=index"
						@click.native="changeActive(index)"
						:class="theindex == index ? 'spanActive' : ''"
						v-for="(item,index) in arr"
						:key="index"
					>{{item}}</router-link>
				</div>
				<router-link to="/person/courseManger/upvideo">
					<div @click="changecourse" class="header-middle-content-right">
						<img src="@/assets/header-person-star.png" alt />
						<span>添加课程</span>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "indexHeader",
	data() {
		return {
			theindex: -1,
			spanindex: 3,
			username: "",
			arr: ["基本信息", "课程管理", "我的问答", "我的收入"],
			arrlink: [
				"/person/basicInformation/password",
				"/person/courseManger/myCourse",
				"/person/queAndans/myanswer",
				"/person/myMoney"
			]
		};
	},
	methods: {
		changeActive: function(ind) {
			this.theindex = ind;
			this.spanindex = -1;
		},
		findtomyperson: function() {
			this.spanindex = -1;
			this.theindex = 0;
		},
		changecourse: function() {
			this.spanindex = -1;
			this.theindex = 1;
		}
	},
	mounted() {
		if (this.$route.path.split("/")[2] == "basicInformation") {
			this.theindex = 0;
			this.spanindex = -1;
		} else if (this.$route.path.split("/")[2] == "courseManger") {
			this.theindex = 1;
			this.spanindex = -1;
		} else if (this.$route.path.split("/")[2] == "queAndans") {
			this.theindex = 2;
			this.spanindex = -1;
		} else if (this.$route.path.split("/")[2] == "myHome") {
			this.theindex = -1;
			this.spanindex = 3;
		} else if (this.$route.path.split("/")[2] == "myMoney") {
			this.theindex = 3;
			this.spanindex = -1;
		}
		// window.console.log();
		if (this.$cookies.get("images") == null) {
			alert("身份已过期，请重新登陆");
			this.$router.push({ path: "/LandReg/teacherLand" });
		} else{
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
	},
	watch: {
		"$route.path": function(newVal) {
			if (newVal) {
				if (this.$route.path.split("/")[2] == "basicInformation") {
					this.theindex = 0;
					this.spanindex = -1;
				} else if (this.$route.path.split("/")[2] == "courseManger") {
					this.theindex = 1;
					this.spanindex = -1;
				}
				else if (this.$route.path.split("/")[2] == "queAndans") {
					this.theindex = 2;
					this.spanindex = -1;
				} else if (this.$route.path.split("/")[2] == "myHome") {
					this.theindex = -1;
					this.spanindex = 3;
				} else if (this.$route.path.split("/")[2] == "myMoney") {
					this.theindex = 3;
					this.spanindex = -1;
				}
			}
		}
	}
};
</script>

<style lang="less">
.clearfix::after {
	content: "";
	display: block;
	height: 0;
	clear: both;
	visibility: hidden;
}
.spanActive {
	border-bottom: 2px solid #00aaff;
	color: #00aaff;
}
.header-top {
	background-color: #333333;
	.header-top-content {
		width: 1200px;
		height: 40px;
		margin: 0 auto;
		.header-top-img {
			width: 136px;
			padding-top: 5px;
			cursor: pointer;
		}
		.header-top-content-right {
			float: right;
			margin-right: 35px;
			cursor: pointer;
			a {
				padding: 8px 0;
			}
			.header-top-content-right-img {
				width: 27px;
				padding-top: 7px;
			}
			.header-top-content-right-span {
				margin-left: 14px;
				font-size: 12px;
				color: #ffffff;
				position: relative;
				top: -8px;
			}
			.header-top-content-right-img2 {
				width: 13px;
				height: 27px;
				margin-left: 14px;
			}
		}
	}
}
.header-middle {
	box-shadow: 0 0 5px #e4e4e4;
	width: 100%;
	background-color: #ffffff;
	.header-middle-content {
		width: 1200px;
		height: 90px;
		margin: 0 auto;
		.header-middle-content-left {
			height: 100%;
			display: inline-block;
			.header-middle-content-left-span {
				line-height: 90px;
				font-size: 22px;
				color: #00aaff;
				letter-spacing: 2px;
			}
		}
		.header-middle-content-center {
			margin-left: 90px;
			display: inline-block;
			a {
				cursor: pointer;
				font-size: 14px;
				margin-right: 85px;
				padding-bottom: 20px;
			}
		}
		.header-middle-content-right {
			cursor: pointer;
			width: 160px;
			height: 30px;
			float: right;
			margin-top: 28px;
			border-radius: 20px;
			border: 1px solid #eeeeee;
			img {
				width: 18px;
				height: 18px;
				margin-left: 40px;
				margin-top: 6px;
			}
			span {
				font-size: 14px;
				color: #00aaff;
				position: relative;
				top: -4px;
				margin-left: 6px;
			}
		}
	}
}
</style>
