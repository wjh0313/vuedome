<template>
	<div id="teacher-information-password">
		<div class="teacher-information-password-content clearfix">
            <personqueAndans></personqueAndans>
            <router-view></router-view>
		</div>
	</div>
</template>

<script>
import personqueAndans from '@/components/person-queAndans-list.vue'
export default {
	name:'personQueAndAns',
	data() {
		return {

		};
    },
    components:{
        personqueAndans,
    },
	methods: {
	}
};
</script>

<style lang="less">
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
#teacher-information-password {
	height: 640px;
	width: 100%;
	background-color: #f4f4f4;
	.teacher-information-password-content {
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;
	}
}
</style>