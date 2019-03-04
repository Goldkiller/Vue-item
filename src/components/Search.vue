<template>
    <div class="search-box">
        <div class="head-box">
            <router-link to="/home" tag='a'  active-class="active" keep-alive class="bts">
                <i class="fa fa-home fa-2x"> </i>
            </router-link>
            <h1 class="tip">搜索</h1>
        </div>
        <div class="sear">
            <input type="text" placeholder="搜索专辑、用户、声音">
            <a href="" class="sea">取消</a>
        </div>
    </div>
</template>
<script>

export default {
    
}
</script>
<style lang="stylus" scoped>
    .head-box
        width 100%
        display flex
        color: #333;
        background-color: #f9f8f8;
        font-size: 14px;
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
    .sear
        padding 10px
        display flex
        width 100%
        .sea
            width: 20%;
            font-weight: 700;
            font-size: 0.16rem
            height 0.3rem
            text-align center
            line-height 0.3rem
            color #333
        input 
            width 80% 
            outline 0 
            height 0.3rem
            border 1px solid #cccccc
            border-radius 0.18rem
            vertical-align middle
            text-indent 0.15rem
            font-size 12px

</style>

