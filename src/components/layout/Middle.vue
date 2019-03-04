<template>
    <div class="left-box">
        <List :resource='comingResource'></List>
    </div>
</template>
<script>
import List from 'components/layout/List'
import {mapActions,mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters(['comingResource'])
    },
    methods:{
        ...mapActions(['middleComing'])
    },
    created(){
        this.middleComing()
    },
    components:{
        List
    },
}
</script>
