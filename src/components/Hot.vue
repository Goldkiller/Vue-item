<template>
    <div class="hot-box">   
        <div class="head-box">
            <router-link to="/home" tag='a' active-class="active" keep-alive class="bts">
                <i class="fa fa-home fa-2x"> </i>
            </router-link>
            <h1 class="tip">热门</h1>
        </div>
        <div class="guide">
            <router-link to="/hot/left" tag="a" active-class="active" keep-alive class="add">热门</router-link>
            <router-link to="/hot/middle" tag="a" active-class="active" keep-alive class="">最近更新</router-link>
            <router-link to="/hot/right" tag="a" active-class="active" keep-alive class="adds">经典</router-link>
        </div>

        <Container></Container>
    </div>
</template>

<script>
import Container from 'components/Container'
export default {
    components:{
       Container 
    }
}
</script>

<style lang="stylus" scoped>
    .hot-box
        position: fixed;
        width: 100%;
        height 0.45rem
        margin: 0 auto
        top: 0;
        .head-box
            width 100%
            display flex
            color: #333;
            background-color: #f9f8f8;
            font-size: 0.14rem;
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
                margin-left 7%
                line-height 0.4rem
        .guide
            padding 0.1rem
            width 100%
            display flex
            &.guide .active 
                background-color: #f60;
                color: #fff;

            .add
                border-radius 0.06rem 0 0 0.06rem
            .adds
                border-radius 0 0.06rem 0.06rem 0 
            a
                width: 33.3333333%;
                padding: 0 1.56%;
                line-height: 0.28rem;
                height 100%
                font-size: 14px
                text-align center
                border 1px solid #ff6000
                
</style>

