<template>
	<div id="teacher-information-password">
		<div class="teacher-information-password-content clearfix">
        <personIndexBasicInf class="theleft"></personIndexBasicInf>
        <router-view></router-view>
		</div>
	</div>
</template>

<script>
import personIndexBasicInf from '@/components/person-basic-information.vue'

export default {
    name:'personIndexBasic',
    data() {
        return {
            
        }
    },
    components:{
        personIndexBasicInf,
    }
}
</script>

<style lang="less">
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