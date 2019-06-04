<template>
    <div class="focus-box">
        <header>
            <h2 class="today">
                <i class="fa fa-modx"></i>
                今日焦点
            </h2>
            <a href="" class="more">
                更多
                <i class="fa fa-angle-double-right"></i>
            </a>
        </header>
        <div class="banner">
            <a href="" class="rel">
                <img src="" alt="">
                <p class="abs">3架“地球号”飞船，开启你的流浪探险</p>
            </a>
        </div>
        <ul class="list2">
            <li class="item">
                <a href="">
                    <span>声临喜马：谁是你心中的叔圈最强音？</span>
                    <span class="pho">
                        <img src="../assets/imge/wKgLf1xui3fzsa9YAAE1ZoaO1D8824.jpg" alt="">
                    </span>
                </a>
            </li>
            <li class="item">
                <a href="">
                    <span>炸出爱推理的你！国内悬疑小说巅峰之作sadsa</span>
                    <span class="pho">
                        <img src="../assets/imge/wKgJXlmKa5eSwI8iAAA5NO1EL3o613_mobile_small.jpg" alt="">
                    </span>
                </a>
            </li>
        </ul>
        <div class="radio">
            <a href="" class="radio-person">
                <img src="../assets/imge/userstation.png" alt="">
            </a>
            <a href="" class="hot">
                <img src="../assets/imge/hot.png" alt="">
            </a>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    @import '~styles/_reset.styl'
    .focus-box
        header
            padding: 0 10px; 
            display flex
            justify-content space-between
            line-height: 0.16rem
            padding-top: 15px;
            padding-bottom: 12px;
            .today
                font-size 0.16rem
                font-weight 400
                line-height 0.16rem
                vertical-align middle
                margin-bottom  0px
            .more
                font-size: 0.12rem;
                font-weight: 400;
                padding: 2px 8px;
                line-height: 0.16rem;
        .banner
            min-height 1.41rem
            padding 0 10px
            display block           
            .rel
                width: 100%;
                display block
                position relative
                p
                    background-color: rgba(0,0,0,.5);
                    bottom: 0
                    color: #fff;
                    font-size: 0.15rem;
                    left: 0
                    padding: 0.05rem 0.1rem;
                    width: 100%; 
                    margin-bottom 0px
                .abs
                    position: absolute;
        .list2
            padding: 0 10px
            .item 
                border-bottom: 1px solid #f1f2f2;
                padding: 0.1rem 0
                list-style none 
                font-size: 0.15rem;
                overflow: hidden;
                word-break: break-all;
                a
                    display flex
                    justify-content space-between
                    color: #333
                    .pho
                        width: 43px;
                        height: 43px;
                        img 
                            width 100%
        .radio
            display flex
            margin 0.15rem 0
            padding 0 0.1rem
            height 0.97rem
            .radio-person
                width 67%
                height 100%
                img 
                    height  100%
                    display block
            .hot
                width: 33%
                height 100%
                overflow hidden
                img 
                    width 100%
                    display block
</style>
