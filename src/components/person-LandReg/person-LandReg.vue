<template>
    <div>
        <land-header></land-header>
        <div id="person-land-content">
            <div class="thecontent-center clearfix">
                <land-content-left></land-content-left>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>

import LandHeader from '../person-land-header.vue'
import LandContentLeft from '../person-land-content-left.vue'

export default {
    name : 'personLandReg',
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    components:{
        LandHeader,
        LandContentLeft,
    }
}
</script>

<style lang="less">
    #person-land-content
    {
        width: 100%;
        height: 810px;
        background-color: #f9f9f9;
        .thecontent-center
        {
            width: 1440px;
            height: 100%;
            margin: 0 auto;
        }
    }
</style>