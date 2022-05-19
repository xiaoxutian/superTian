<template>
    <div class="top">
       <div class="top-l">项目管理</div>
       <el-popover
  placement="top"
  width="150"
  
  >
   <div class="tui" @click="tui()">退出</div>
  
       <div slot="reference" class="top-r" >
           <span><img src="../../../assets/logo.png"></span>
           <span>系统管理员</span>
       </div >
       </el-popover>
    </div>
</template>
<script>
import router from '@/router'
export default {
    methods:{
        tui(){
         this.$router.push("/login")
        }
    }
}
</script>
<style scoped>
.top{
    width: 100%;
    height: 50px;
    background-color: #fff;
    line-height: 50px;

}
.top-l{
float:left;
margin-left: 10px;
}
.top-r{
 float: right;
 width: 100px;
 
}
.top-r img {
        width: 30px;
    height: 30px;
    border-radius: 50%;
        display: block;
    float: left;
    margin-top: 10px;
}
.tui{
    text-align: center;
    cursor: pointer;
}
.tui:hover{
    color: pink;
}

</style>