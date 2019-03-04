<template>
    <div class="tab-box">
      <div class="swiper-container  tab-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../assets/imge/wKgJMFhJCUSzPLqyAAL6XsL-fnQ714_android_small.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../assets/imge/wKgKj1uYylXjFPqWAAIt8y6sjW0028.png" alt=""></div>
          <div class="swiper-slide"><img src="../assets/imge/wKgKmlusi5ThKzJRAAC7wGbl8w4495.png" alt=""></div>
          <div class="swiper-slide"><img src="../assets/imge/wKgLe1w-08Thjd21AAGWHj2S8ig781.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../assets/imge/wKgLgFxQBSuiVJpZAAmPiNBA6RM692.png" alt=""></div>
        </div>
          <!-- 如果需要分页器 -->
    <div class="swiper-pagination circles"></div>
      </div>
  </div>
</template>

<script>

export default {
    data(){
        return{
            swiperData:''
        }
    },
    mounted(){
            setTimeout(function(){
              var mySwiper = new Swiper('.tab-swiper', {
                    autoplay: 2000,//可选选项，自动滑动
                    pagination : '.swiper-pagination'
                })
             },0) 
    },
    watch:{
        // swiperData(){
        //     setTimeout(function(){
        //       var mySwiper = new Swiper('.tab-swiper', {
        //             autoplay: 5000,//可选选项，自动滑动
        //         })
        //      },0) 
        // }
    }
}
</script>

<style lang="stylus" scoped>
.tab-box
    margin-top 0.4rem
    .circles
        bottom -0.3rem
    .tab-swiper
        height 1.66rem
        overflow hidden
        img 
            height 100%
            width 100%       
</style>

