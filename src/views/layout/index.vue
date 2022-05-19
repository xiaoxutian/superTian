<template>
    <div style="height: 100%;,float: left;background-color: #ccc;" >
     
       <mainContent/>
       <top></top>
      
       <router-view></router-view>
     
    </div>
</template>

<script>

import mainContent from "./component/mainContent.vue"
import top from "./component/homeTop.vue"
export default {
    data() {
        return {}
    },
    computed: {
        
    },
    components: {
       mainContent,
      top
    }
}
</script>

<style lang="scss" scoped>

</style>
