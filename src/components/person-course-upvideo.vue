<template>
	<div class="thecontents-right">
        <router-link to="/person/courseManger/videoImage">
        <img src="@/assets/teacher-land-person-upload.png" alt="">
        </router-link>
        <p class="rfirst-p1">1、不得上传未经授权的他人作品、反动等违法视频</p>
        <p class="rfirst-p2">2、视频大小限制：不支持断点续传，视频文件最大200M</p>
        <p class="rfirst-p3">3、支持视频音频格式：mp4、flv、f4v、webm</p>
        <p class="rfirst-p4">4、不支持时长小于1秒或大于10小时的视频文件，上传后不能转码成功</p>
        <p class="rfirst-p5">5、高清（360P）:视频分辨率>=640×360，视频码率>=800kbps</p>
        <p class="rfirst-p6">6、高清（720P）:视频分辨率>=960×540，视频码率>=1500kbps</p>
        <p class="rfirst-p7">7、高清（1080P）:视频分辨率>=1920×1080，视频码率>=2500kbps</p>
    </div>
</template>

<script>
export default {
    name:'personCourseUpVideo',
	data() {
		return {};
	},
	methods: {
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
.thecontents-right {
    text-align: center;
	width: 900px;
	height: 580px;
	background-color: #ffffff;
	float: right;
	border-radius: 10px;
    margin-top: 30px;
    img{
        cursor: pointer;
        width: 130px;
        height: 115px;
        margin-top: 105px;
        margin-bottom: 35px;
    }
    p{
        letter-spacing: 1px;
        text-align: left;
        color: #ccc;
        font-size: 13px;
        margin: 0;
        margin-bottom: 20px;
        margin-left: 270px;
    }
}
</style>