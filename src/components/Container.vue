<template>
    <div class="container-box">
        <!-- <div class="box1">
            123
        </div>
        <div class="box2">

        </div>
        <div class="box3">

        </div> -->
        <router-view></router-view>
    </div>
</template>
<script>
import http from 'utils/http'
export default {
    // data(){
    //     return{
    //         data:null
    //     }
    // },
    // async beforeCreate(){
    //     this.data=http({
    //         method:'get',
    //         url:'/store/state.json'
    //     }).then(res=>console.log(res))
    //     .catch(err=>console.log(err))
    // }
}
</script>

