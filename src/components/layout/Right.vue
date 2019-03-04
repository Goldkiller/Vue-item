<template>
    <div class="left-box">
        <List :resource='hotShowing'>1</List>
    </div>
</template>

<script>
import List from './List'
import {mapActions,mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters(['hotShowing'])
    },
    methods:{
        ...mapActions(['rightComing'])
    },
    created(){
        this.rightComing()
    },
    components:{
        List
    },
}
</script>
