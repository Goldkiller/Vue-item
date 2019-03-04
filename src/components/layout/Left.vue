<template>
    <div class="left-box" >
        <!-- <div v-for="datas in data" :key='datas.id'>
            {{}}
        </div> -->

        <ul class="hot-box">
            <li v-for = "item in data.lists" :key = "item.id">
                <div class="contain"> 
                    <div class="left-pic">
                        <img src="../../assets/imge/wKgLcFxG2AXBfARvAAEsJPrErY8665_web_meduim.jpg" alt="">
                    </div>
                    <div class="right-cont">
                        <p class="content">
                            <i></i>       
                            《红楼梦》全本有声剧
                        </p>
                        <p class="num">18406320</p>
                        <i class="fa fa-download tip"></i>
                    </div>
                </div>
            </li> 
        </ul>
    </div>
</template>

<script>
export default {
    beforeRouteEnter(to,from,next){
        fetch('/data/states.json')
            .then( res => res.json())
            .then(
                result => {
                    next(_this => {
                        _this.$set(_this.data,'lists',result)
                    })
                }
            )
            .catch(error => console.log( error ))
    },
    data(){
        return {
            data: {}
        }
    },
   mounted(){
       
   }
}
</script>

<style lang="stylus" scoped>
    .left-box
        height 100%
        .hot-box
            width 100%
            list-style none 
            margin 0
            padding 0
            font-size 0.15rem
            li
                .contain
                    padding: 0.1rem;
                    margin: 0.1rem 0;
                    display flex
                    position: relative;
                .left-pic
                    display: table-cell;
                    vertical-align: middle;
                    width: 0.6rem;
                    height: 0.6rem;
                    img 
                        width 100%
                        display: inline-block;
                        vertical-align: middle;
                        border-radius: 5px;
                .right-cont
                    display: table-cell;
                    vertical-align: middle;
                    font-size 0.15rem
                    padding: 0 0 0 10px;
                    .content
                        display: -webkit-box
                        height 0.26rem
                        line-height: 1.2
                        text-overflow: ellipsis;    
                        margin-bottom 0 
                        vertical-align middle
                        font-size 0.15rem
                    .num
                        height: 0.2rem;
                        line-height: 0.2rem;
                        overflow: hidden; 
                        margin-top 0.05rem
                        font-size 0.1rem
                        margin-bottom 0
                    .tip
                        position absolute
                        right 0.1rem
                        bottom 0.1rem
</style>
