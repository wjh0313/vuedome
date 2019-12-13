<template>
	<div class="thecontent-left">
		<div class="thecontent-left-img">
			<img src="../assets/teacher-land-person-portrait.png" alt />
			<div class="thespans"><span class="thecontent-left-span">编辑</span></div>
			<router-link
				:to="arrlink[index]"
				:key="index"
				@click.native="mychange(index)"
				:class="isActives == index ? 'thepIsactive' : ''"
				v-for="(item,index) in arrt1"
			>
				<span class="iconfont" :class="arrt2[index]"></span>
				<span class="margin-ten">{{item}}</span>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "personbasicInf",
	data() {
		return {
			isActives: 2,
			arrt1: ["我的信息", "认证信息", "密码管理"],
			arrt2: ["icon-touxiang", "icon-auth", "icon-ai-set"],
			arrlink: [
				"/person/basicInformation/mymessage",
				"/person/basicInformation/aut",
				"/person/basicInformation/password"
			]
		};
	},
	methods: {
		mychange: function(ind) {
			this.isActives = ind;
		}
	},
	mounted() {
		if (this.$route.path.split("/")[3] == "aut") {
			this.isActives = 1;
		} else if (this.$route.path.split("/")[3] == "password") {
			this.isActives = 2;
		} else if (this.$route.path.split("/")[3] == "mymessage") {
			this.isActives = 0;
		}
	},
	watch: {
		"$route.path": function(newVal) {
			if (newVal) {
				window.console.log(this.$route.path.split("/")[3]);
				if (this.$route.path.split("/")[3] == "aut") {
					this.isActives = 1;
				} else if (this.$route.path.split("/")[3] == "password") {
					this.isActives = 2;
				} else if (this.$route.path.split("/")[3] == "mymessage") {
					this.isActives = 0;
				}
			}
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
.clearfix::after {
	content: "";
	display: block;
	height: 0;
	clear: both;
	visibility: hidden;
}
.thecontent-left {
	display: inline-block;
	text-align: center;
	height: 580px;
	width: 280px;
	margin-top: 30px;
	background-color: #ffffff;
	border-radius: 10px;
	overflow: hidden;
	.thecontent-left-img {
		a {
			display: block;
			margin: 0;
			margin-top: 35px;
			cursor: pointer;
		}
		margin-top: 50px;
		position: relative;
		img {
			width: 100px;
			height: 100px;
		}
				.thespans
				{
					display: inline-block;
					position: absolute;
					width: 99px;
					height: 96px;
					overflow: hidden;
					border-radius: 50px;
					left: 91px;
					top: 3px;
					.thecontent-left-span {
					cursor: pointer;
					color: #fff;
					display: inline-block;
					margin-top: 76px;
					width: 100px;
					height: 20px;
					background-color: rgba(111, 106, 100, 0.3);
				}
				}
	}
}
</style>