<template>
    <div id="teacher-land-header">
        <div class="teacher-land-header-content clearfix">
            <img src="@/assets/teacher-land-lcon.png" alt="">
            <div class="teacher-lan-header-content-right">
                <router-link :to="stastics[val]"><span class="haveHand movebottom">注册</span></router-link>
                <span class="ml-10">|</span>
                <router-link :to="stasticsl[val]"><span class="haveHand ml-10">登陆</span></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'teacherLandHeader',
    data() {
        return {
            stastics:['/LandReg/studentReg','/LandReg/teacherReg','/LandReg/theHRReg'],
            stasticsl:['/LandReg/studentLand','/LandReg/teacherLand','/LandReg/theHRLand'],
            val : 1,
        }
    },
	mounted() {
        // window.console.log(this.$route.path.split('/')[2]);
        if(this.$route.path.split('/')[2]== 'teacherLand' ||this.$route.path.split('/')[2]== 'teacherReg' ||this.$route.path.split('/')[2]== 'teacherForget')
        {
            this.val = 1;
        }else if(this.$route.path.split('/')[2]== 'studentLand' ||this.$route.path.split('/')[2]== 'studentReg' ||this.$route.path.split('/')[2]== 'studentForget')
        {
            this.val = 0;
        }
        else if(this.$route.path.split('/')[2]== 'theHRLand' ||this.$route.path.split('/')[2]== 'theHRReg' ||this.$route.path.split('/')[2]== 'theHRForget')
        {
            this.val = 2;
        }
	},
    watch: {
		"$route.path": function(newVal) {
			if(newVal)
			{
				// window.console.log(this.$route.path.split('/')[2]);
				if(this.$route.path.split('/')[2]== 'teacherLand' ||this.$route.path.split('/')[2]== 'teacherReg' ||this.$route.path.split('/')[2]== 'teacherForget')
				{
					this.val = 1;
				}else if(this.$route.path.split('/')[2]== 'studentLand' ||this.$route.path.split('/')[2]== 'studentReg' ||this.$route.path.split('/')[2]== 'studentForget')
				{
					this.val = 0;
				}
				else if(this.$route.path.split('/')[2]== 'theHRLand' ||this.$route.path.split('/')[2]== 'theHRReg' ||this.$route.path.split('/')[2]== 'theHRForget')
				{
					this.val = 2;
				}
			}
		}
	}
}
</script>

<style lang="less">
    #teacher-land-header
    {
        width: 100%;
        box-shadow: 0 0 10px #eee;
        .teacher-land-header-content
        {
            width: 1200px;
            margin: 0 auto;
            img{
                height: 53px;
                width: 258px;
                padding: 18px 0;
            }
            .teacher-lan-header-content-right
            {
                float: right;
                margin-top: 35px;
                margin-right: 20px;
                span{
                    font-size: 14px;
                    color: #999;
                }
                .movebottom
                {
                    position: relative;
                    top: 1px;
                }
            }
        }
    }
</style>