<template>
    <div id="personIndex">
        <personIndexHeader></personIndexHeader>
        <router-view></router-view>
        <personIndexFooter></personIndexFooter>
    </div>
</template>

<script>
import personIndexHeader from '@/components/person-index-header.vue'
import personIndexFooter from '@/components/person-index-footer.vue'

export default {
    name:'personIndex',
    data() {
        return {
            
        }
    },
    components:{
        personIndexHeader,
        // personIndexHome,
        personIndexFooter,
    }
}
</script>

<style lang="less">
    
</style>