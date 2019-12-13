<template>
	<div id="teacher-land-content-left">
		<div class="theTab">
			<router-link to="/LandReg/studentLand">
				<div @click="changethetab(0)" class="the-first-tab haveHand">
					<div class="thetablecell" :class="isActives == 0 ? 'theactive': ''">
						<span class="iconfont icon-boshimao"></span>
						<p>我是学生</p>
					</div>
				</div>
			</router-link>
			<router-link to="/LandReg/teacherLand">
				<div @click="changethetab(1)" class="the-center-tab haveHand">
					<div class="thetablecell" :class="isActives == 1 ? 'theactive': ''">
						<span class="iconfont icon-jiangshi"></span>
						<p>我是讲师</p>
					</div>
				</div>
			</router-link>
			<router-link to="/LandReg/theHRLand">
				<div @click="changethetab(2)" class="the-last-tab haveHand">
					<div class="thetablecell" :class="isActives == 2 ? 'theactive': ''">
						<span class="iconfont icon-iconfontnvtouxiang"></span>
						<p>我是HR</p>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "teacherLandContentLeft",
	data() {
		return {
			isActives: 1
		};
	},
	methods: {
		changethetab: function(val) {
			// window.console.log(val, this.props);
			this.isActives = val;
		}
	},
	mounted() {
        // window.console.log(this.$route.path.split('/')[2]);
        if(this.$route.path.split('/')[2]== 'teacherLand' ||this.$route.path.split('/')[2]== 'teacherReg' ||this.$route.path.split('/')[2]== 'teacherForget')
        {
            this.isActives = 1;
        }else if(this.$route.path.split('/')[2]== 'studentLand' ||this.$route.path.split('/')[2]== 'studentReg' ||this.$route.path.split('/')[2]== 'studentForget')
        {
            this.isActives = 0;
        }
        else if(this.$route.path.split('/')[2]== 'theHRLand' ||this.$route.path.split('/')[2]== 'theHRReg' ||this.$route.path.split('/')[2]== 'theHRForget')
        {
            this.isActives = 2;
        }
	},
    watch: {
		"$route.path": function(newVal) {
			if(newVal)
			{
				// window.console.log(this.$route.path.split('/')[2]);
				if(this.$route.path.split('/')[2]== 'teacherLand' ||this.$route.path.split('/')[2]== 'teacherReg' ||this.$route.path.split('/')[2]== 'teacherForget')
				{
					this.isActives = 1;
				}else if(this.$route.path.split('/')[2]== 'studentLand' ||this.$route.path.split('/')[2]== 'studentReg' ||this.$route.path.split('/')[2]== 'studentForget')
				{
					this.isActives = 0;
				}
				else if(this.$route.path.split('/')[2]== 'theHRLand' ||this.$route.path.split('/')[2]== 'theHRReg' ||this.$route.path.split('/')[2]== 'theHRForget')
				{
					this.isActives = 2;
				}
			}
		}
	}
};
</script>

<style lang="less">
@import "../../public/font-icon/iconfont.css";
#teacher-land-content-left {
	display: inline-block;
	width: 510px;
	height: 810px;
	background: url("../assets/teacher-land-bac.png") center no-repeat;
	background-size: 510px 810px;
	.theTab {
		span {
			font-size: 30px;
			color: #fff;
		}
		p {
			color: #fff;
		}
		width: 110px;
		height: 457px;
		background-color: #202421;
		float: right;
		margin-top: 140px;
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
		overflow: hidden;
		.thetablecell {
			display: table-cell;
			text-align: center;
			vertical-align: middle;
			height: 115px;
			width: 115px;
		}
		.the-first-tab {
			width: 110px;
		}
		.the-center-tab {
			width: 110px;
		}
		.the-last-tab {
			width: 110px;
		}
		.theactive {
			height: 230px;
			background-color: #adc700;
		}
	}
}
</style>