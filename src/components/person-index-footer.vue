<template>
	<div id="footer-person">
		<div class="footer-person-content">
			<p class="footer-person-content-p1">
				<span>中国领先大学生成长平台</span>
				<span class="marginl-ten">@2016</span>
                <span class="marginl-five">e学聘</span>
			</p>
            <p class="footer-person-content-p2">
                <span>ICP备16500007号</span>
                <span class="marginl-ten">|</span>
                <span class="marginl-ten">联系我们</span>
                <span class="marginl-fifiteen">exuepin@exuepin.com</span>
                <span class="marginl-ten">|</span>
                <span class="marginl-ten">关于我们</span>
            </p>
		</div>
	</div>
</template>

<script>
export default {
    name:'indexfooter',
	data() {
		return {};
	}
};
</script>

<style lang="less">
.marginl-five
{
    margin-left: 5px;
}
.marginl-ten
{
    margin-left: 10px;
}
.marginl-fifiteen
{
    margin-left: 15px;
}
.footer-person-content {
	overflow: hidden;
	height: 90px;
	width: 100%;
	text-align: center;
	p {
        margin: 0;
		color: #999999;
		font-size: 12px;
		span {
			cursor: pointer;
		}
    }
    .footer-person-content-p1
    {
        margin-top: 25px;
    }
    .footer-person-content-p2
    {
        margin-top: 12px;
    }
}
</style>