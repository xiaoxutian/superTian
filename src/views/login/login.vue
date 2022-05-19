<template>
  <div @click="tiantian">123</div>
</template>
<script>
export default {
    data(){
        return{
            token:"admin"
        }
    },
 methods:{
   tiantian(){
         this.$store.commit('LGOIN_IN',"admin");
  this.$api.routerPromission().then(res=>{
            console.log(res)
          })
   }
 },
  mounted(){
      
  }
}
</script>

<style scoped>
</style>
