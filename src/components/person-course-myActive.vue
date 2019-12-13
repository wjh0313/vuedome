<template>
	<div class="thecontentAct-right">
        敬请期待
    </div>
</template>

<script>
export default {
	name:'personCourseMyactive',
	data() {
		return {};
	},
	methods: {}
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
.thecontentAct-right {
	width: 900px;
	height: 580px;
	background-color: #ffffff;
	float: right;
	border-radius: 10px;
	margin-top: 30px;
	text-align: center;
}
</style>