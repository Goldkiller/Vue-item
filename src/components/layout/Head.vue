<template>
    <div class="head-box">
        <router-link to="/search" tag='a'  active-class="active" keep-alive class="bts">
            <i class="fa fa-search fa-2x"> </i>
        </router-link>
        <h1 class="tip">{{msg}}</h1>        
    </div>
</template>

<script>
export default {
    props:{
            msg:String
        },       
}
</script>

<style lang="stylus" scoped>
    .head-box
        width 100%
        display flex
        color: #333;
        background-color: #f9f8f8;
        font-size: 14px;
        position fixed
        z-index 999
        top 0
        .bts
            min-width 13%
            height 0.4rem
            vertical-align middle
            line-height 0.4rem
            text-align center
            i 
                text-align center
                line-height 0.4rem
                color #FF6100
        .tip
            height 0.4rem
            text-align: center;
            margin: 0 0.9rem;
            font-size: 0.2rem;
            width :90%
            margin-left 13%
            line-height 0.4rem

</style>
