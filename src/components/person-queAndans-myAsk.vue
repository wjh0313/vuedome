<template>
	<div class="therightask-right">
        <div class="theask-right-top clearfix">
            <div @click="change1" class="thetop-fir">
				<img v-if="isShowpng1" src="@/assets/teacher-land-person-chick.png" alt />
				<img v-if="!isShowpng1" src="@/assets/teacher-land-person-chick1.png" alt />
                <span>全部</span>
            </div>
            <div @click="change2" class="thetop-center">
				<img v-if="isShowpng2" src="@/assets/teacher-land-person-chick.png" alt />
				<img v-if="!isShowpng2" src="@/assets/teacher-land-person-chick1.png" alt />
                <span>待处理</span>
            </div>
            <div class="thetop-last">
                我要提问
            </div>
        </div>
        <div v-if="thestat || !thestat" class="theask-right-content clearfix">
            <p class="thetitle">{{thetitle[0]}}</p>
            <p v-if="true" class="thebtn">有追问</p>
            <p v-if="false" class="thebtns">删除回答</p>
            <div class="thecontent-center">
                <p class="thecontents">{{thetitle[1]}}</p>
            </div>
            <p class="thelastp">
                <span>回答时间：{{thetitle[2]}}</span>
                <span class="ml-40">回答：{{thetitle[3]}}</span>
                <span class="ml-10">|</span>
                <span class="ml-10">{{thetitle[4]}}人看过</span>
                <span class="ml-40">提问者：</span>
                <span>{{thetitle[5]}}</span>
            </p>
        </div>
        <div v-if="thestat" class="theask-right-content clearfix">
            <p class="thetitle">{{thetitle[0]}}</p>
            <p v-if="false" class="thebtn">有追问</p>
            <p v-if="true" class="thebtns">删除回答</p>
            <div class="thecontent-center">
                <p class="thecontents">{{thetitle[1]}}</p>
            </div>
            <p class="thelastp">
                <span>回答时间：{{thetitle[2]}}</span>
                <span class="ml-40">回答：{{thetitle[3]}}</span>
                <span class="ml-10">|</span>
                <span class="ml-10">{{thetitle[4]}}人看过</span>
                <span class="ml-40">提问者：</span>
                <span>{{thetitle[5]}}</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name:'personAsk',
	data() {
		return {
            isShowpng1:false,
            isShowpng2:true,
            thetitle:['中午在客服打的电话，下午可以到吗？我在北京','“我们是警察，”直升机上传来扩音器中的声音。fdbdfdsj,hkjskdskjf,jbmfndssa.KKD,zjsdmkaldjchvdskmajmv cdskmjcv ndmsc  came the amplified voice from the helicopter.',
            '3月23日 15:43','0','91','流浪猫'],
            //thestat代表全部--ture，thestat代表待处理--false
            thestat:true,
        };
	},
	methods: {
        change1:function() {
            this.isShowpng1=false;
            this.isShowpng2=true;
            this.thestat=true;
        },
        change2:function() {
            this.isShowpng1=true;
            this.isShowpng2=false;
            this.thestat=false;
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
.ml-40
{
    margin-left: 40px;
}
.ml-10
{
    margin-left: 10px;
}
.therightask-right {
	width: 900px;
	height: 580px;
	background-color: #ffffff;
	float: right;
	border-radius: 10px;
    margin-top: 30px;
    .theask-right-top
    {
        height: 100px;
        line-height: 100px;
        img
        {
            width: 25px;
            height: 25px;
        }
        span{
            margin-left: 10px;
            position: relative;
            top: -7px;
        }
        .thetop-fir
        {
            cursor: pointer;
            margin-left: 30px;
            display: inline-block;
        }
        .thetop-center
        {
            cursor: pointer;
            margin-left: 70px;
            display: inline-block;
        }
        .thetop-last
        {
            float: right;
            margin-top: 35px;
            width: 160px;
            height: 32px;
            background-color: #00aaff;
            border-radius: 10px;
            line-height: 2;
            margin-right: 40px;
            text-indent: 50px;
            color: #ffffff;
            cursor: pointer;
        }
    }
    .theask-right-content
    {
        border-top: 1px solid #eee;
        height: 210px;
        .thebtn
        {
            float: right;
            margin-right: 40px;
            width: 160px;
            height: 32px;
            color: #00aaff;
            border: 1px solid #eee;
            border-radius: 10px;
            text-indent: 55px;
            line-height: 33px;
            cursor: pointer;
        }
        .thebtns
        {
            float: right;
            margin-right: 40px;
            width: 160px;
            height: 32px;
            color: #eee;
            text-indent: 55px;
            line-height: 33px;
            cursor: pointer;
        }
        .thetitle
        {
            margin-left: 30px;
            margin-top: 40px;
        }
        .thecontent-center
        {
            margin-top: 25px;
            margin-left: 30px;
            width: 630px;
            height: 60px;
            overflow: hidden;
            background-color: #f8f8f8;
            .thecontents
            {
                margin-top: 10px;
                text-indent: 10px;
                display:-webkit-box;
                -webkit-box-orient:vertical;
                -webkit-line-clamp:2; 
                overflow: hidden;
                color: #999;
                text-overflow: ellipsis;
            }
        }
        .thelastp
        {
            margin-left: 30px;
            margin-top: 20px;
            span{
                color: #999;
                font-size: 12px;
            }
        }
    }
}
</style>