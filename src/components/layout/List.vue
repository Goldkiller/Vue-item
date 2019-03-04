<template>
    <div class="list-box">
        <ul>
            <li v-for="list in resource" :key=list.id>
                {{list.item}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        'resource':Array
    },
    data(){
        return{
            list:null
        }
    },
    watch:{
        resource(){
           if(this.$route.name=='middle'){
                this.list = this.resource && this.resource || [] 
            }else{
                this.list = this.resource && this.resource|| []
            }
        }    
    },
    created(){
        //console.log(this.resource)
    }
}
</script>
