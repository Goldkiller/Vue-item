<template>
    <div class="nav-box">
        <ul class="list">
            <li>
                <router-link :to="{name:'left',params:{data:data}}" tag='a' active-class="active" keep-alive >
                    <img src="../assets/imge/wKgDslNE456TozjgAAAcSrT-F7I943.png" alt="">
                </router-link>
            </li>
            <li><a href=""><img src="../assets/imge/wKgDslNE456TozjgAAAcSrT-F7I943.png" alt=""></a></li>
            <li><a href=""><img src="../assets/imge/wKgDslNE456TozjgAAAcSrT-F7I943.png" alt=""></a></li>
            <li><a href=""><img src="../assets/imge/wKgDslNE456TozjgAAAcSrT-F7I943.png" alt=""></a></li>
            <li><a href=""><img src="../assets/imge/wKgDslNE456TozjgAAAcSrT-F7I943.png" alt=""></a></li>
            <li><a href=""><img src="../assets/imge/wKgDslNE456TozjgAAAcSrT-F7I943.png" alt=""></a></li>
            <li><a href=""><img src="../assets/imge/wKgDslNE456TozjgAAAcSrT-F7I943.png" alt=""></a></li>
            <li><a href=""><img src="../assets/imge/wKgDslNE456TozjgAAAcSrT-F7I943.png" alt=""></a></li>
            <li><a href=""><img src="../assets/imge/wKgDslNE456TozjgAAAcSrT-F7I943.png" alt=""></a></li>
            <li>
                <a href="#">
                    <img src="../assets/imge/category_down.png" alt="" v-if="!flag" @click="fn()">
                    <img src="../assets/imge/wKgDYVdf0-2xPjSkAAAiw3M3RO8071.jpg" alt="" v-if="flag">
                </a>
            </li>
            <ul class="more" v-if="flag">
                <li><a href=""><img src="../assets/imge/wKgKnVvtRYDRUysbAAAcXEd_MEQ933.png" alt=""></a></li>
                <li><a href=""><img src="../assets/imge/wKgKnVvtRYDRUysbAAAcXEd_MEQ933.png" alt=""></a></li>
                <li><a href=""><img src="../assets/imge/wKgKnVvtRYDRUysbAAAcXEd_MEQ933.png" alt=""></a></li>
                <li><a href=""><img src="../assets/imge/wKgKnVvtRYDRUysbAAAcXEd_MEQ933.png" alt=""></a></li>
                <li><a href=""><img src="../assets/imge/wKgKnVvtRYDRUysbAAAcXEd_MEQ933.png" alt=""></a></li>
                <li><a href=""><img src="../assets/imge/wKgKnVvtRYDRUysbAAAcXEd_MEQ933.png" alt=""></a></li>
                <li><a href=""><img src="../assets/imge/wKgKnVvtRYDRUysbAAAcXEd_MEQ933.png" alt=""></a></li>
                <li><a href=""><img src="../assets/imge/wKgKnVvtRYDRUysbAAAcXEd_MEQ933.png" alt=""></a></li>
                <li><a href=""><img src="../assets/imge/wKgKnVvtRYDRUysbAAAcXEd_MEQ933.png" alt=""></a></li>
                <li><a href=""><img src="../assets/imge/wKgKnVvtRYDRUysbAAAcXEd_MEQ933.png" alt=""></a></li>
                <li><a href=""><img src="../assets/imge/wKgKnVvtRYDRUysbAAAcXEd_MEQ933.png" alt=""></a></li>
                <li><a href=""><img src="../assets/imge/wKgKnVvtRYDRUysbAAAcXEd_MEQ933.png" alt=""></a></li>
                <li><a href=""><img src="../assets/imge/wKgKnVvtRYDRUysbAAAcXEd_MEQ933.png" alt=""></a></li>
                <li><a href=""><img src="../assets/imge/wKgKnVvtRYDRUysbAAAcXEd_MEQ933.png" alt=""></a></li>
                <li><a href=""><img src="../assets/imge/wKgKnVvtRYDRUysbAAAcXEd_MEQ933.png" alt=""></a></li>                <li><a href=""><img src="../assets/imge/wKgKnVvtRYDRUysbAAAcXEd_MEQ933.png" alt=""></a></li>
                <li><a href="#"><img src="../assets/imge/wKgKnVvtRYDRUysbAAAcXEd_MEQ933.png" alt=""></a></li>
                <li @click="fn()">
                    <a href="#">
                        <img src="../assets/imge/category_up.png" alt="">
                    </a>
                </li>
            </ul>
        </ul> 
          
    </div>
</template>

<script>
import http from 'utils/http'
export default {
    data(){
        return{
            flag:false,
            data:[]
        }
    },
//    async beforeCreate(){
//         this.data=await http({
//             method:'get',
//             url:'/store/state.json'
//         }).then(res=>res)
//         .catch(err=>console.log(err))
//     },
    methods:{
        fn(){
            this.flag=!this.flag
        }
    }
}
</script>


<style lang="stylus" scoped>
@import '~styles/_reset.styl'
    .nav-box
        width 100%
        padding-bottom: 10px
        .hidden
            display none
        .list
            display flex
            flex-wrap wrap
            .more
                display flex
                flex-wrap wrap   
            li
                width 20%
                height 0.7rem
                cursor pointer
                img
                    display block 
                    width 100%
                        

</style>

