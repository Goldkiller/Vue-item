<template>
  <div class="home-box">
    <Head :msg="msg"></Head>
    <Tab></Tab>
    <Nav></Nav>
    <Focus></Focus>
    <main>
      <div v-for="list in homeResource" :key='homeResource.id'>
        <header>
            <h2 class="today">
                <i class="fa fa-modx"></i>
                {{list.title}}
            </h2>
            <a href="" class="more">
                {{list.more}}
                <i class="fa fa-angle-double-right"></i>
            </a>
        </header>
        <div class="container">
          <ul class="more-box">
            <li>
              <a href="">
                  <img src="../assets/imge/arge (1).jpg" alt="">
                  <p class="name">{{list.content[0].words}}</p>
                  <p>{{list.content[0].number}}</p>
              </a>
            </li>
            <li>
              <a href="">
                  <img src="../assets/imge/arge (1).jpg" alt="">
                  <p class="name">{{list.content[1].words}}</p>
                  <p>{{list.content[1].number}}</p>
              </a>
            </li>
            <li>
              <a href="">
                  <img src="../assets/imge/arge (1).jpg" alt="">
                  <p class="name">{{list.content[2].words}}</p>
                  <p>{{list.content[2].number}}</p>
              </a>
            </li>
            <li>
              <a href="">
                  <img src="../assets/imge/arge (1).jpg" alt="">
                  <p class="name">{{list.content[3].words}}</p>
                  <p>{{list.content[3].number}}</p>
              </a>
            </li>
            <li>
              <a href="">
                  <img src="../assets/imge/arge (1).jpg" alt="">
                  <p class="name">{{list.content[4].words}}</p>
                  <p>{{list.content[4].number}}</p>
              </a>
            </li>
            <li>
              <a href="">
                  <img src="../assets/imge/arge (1).jpg" alt="">
                  <p class="name">{{list.content[5].words}}</p>
                  <p>{{list.content[5].number}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Head from 'components/layout/Head'
import Tab from 'components/Tab'
import Nav from 'components/Nav'
import Focus from 'components/Focus'

import {mapGetters,mapActions} from 'vuex'
export default {
  components:{
    Head,Tab,Nav,Focus
  },
  data(){
    return{
      msg:'发现'
    }
  },
  computed:{
    ...mapGetters(['homeResource'])
  },
  methods:{
    ...mapActions(['homeComing'])
  },
  created(){
      this.homeComing()
  }

}
</script>

<style lang="stylus" scoped>
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
    .container
      .more-box
        width 100%
        list-style none
        display flex
        margin 0 
        padding 0
        flex-wrap wrap
        li
          width 33%
          display flex
          padding: 0 1.56%
          margin-bottom 0.15rem
          a
            width 100%
            font-size 0.15rem
            img
              width 100% 
              height 1.16rem
              display block
            p
              margin-bottom 0
              text-align center
              font-size 0.12rem
              overflow hidden
              //height 0.34rem
            .name
              height 0.34rem


</style>
