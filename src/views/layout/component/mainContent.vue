<template>
     <!-- :class="[!isCollapse ? Navigation-x : Navigation-a]" -->
  <div class="mainContent">
    <div

      class="Navigation-top  Navigation-x"
    >
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        mode="vertical"
        router
      >
        <el-menu-item class="Navigation-title">
          <span>天天天</span>
          <i class="el-icon-s-fold" @click="isCollapse = !isCollapse"></i>
        </el-menu-item>
        <el-menu-item class="Navigation-x">
          <span>项目库</span>
          <i class="el-icon-menu"></i>
        </el-menu-item>

        <el-menu-item
          class="Navigation-s"
          v-for="v in home"
          :key="v + 1"
          :index="v.path"
        >
          <span slot="title"> {{ v.meta.name }}</span>
          <i class="el-icon-menu"></i>
        </el-menu-item>
        <el-submenu v-for="(v, i) in touterlist" :key="i" :index="i + ''">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{ v.meta.name }}</span>
          </template>
          <el-menu-item-group v-for="(item, index) in v.children" :key="index">
            <el-menu-item :index="item.path">{{ item.meta.name }}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      isCollapse: false,
      touterlist: [],
      home: [],
    };
  },
  mounted() {
    this.touterlist = this.$store.state.userRoutes.sidebarMenu;
    this.home = JSON.parse(JSON.stringify(this.touterlist));
    this.home.splice(1, 1);
    this.touterlist.splice(0, 1);
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>


<style scoped>
.mainContent {
  height: 100%;
  float: left;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.Navigation-top {
  float: left;
  height: 100%;
}
.Navigation-title {
  margin: 0px !important;
  padding: 0px !important;
  font-size: 18px;
  font-weight: 700;
  background-color: #3f4456;
  color: #ffffff !important;
}
.Navigation-title i {
  margin-left: 100px;
}
.Navigation-x {
  margin: 0px !important;
  padding: 0px !important;
  color: #ffffff !important;
}
.Navigation-s {
  margin: 0px !important;
  padding: 0px !important;
  color: #ffffff !important;
}

.Navigation-x i {
  margin-left: 110px;
}
.Navigation-top /deep/ .el-submenu__title {
  padding-left: 0px !important;
  color: #ffffff !important;
}
.Navigation-top /deep/ .el-menu-vertical-demo {
  background-color: #2f323e;
}
.Navigation-top
  /deep/
  .el-menu-vertical-demo[data-v-134b8c3a]:not(.el-menu--collapse) {
  min-height: auto;
  height: 100%;
}
.Navigation-top /deep/ .el-submenu .el-menu {
  margin-left: 200px;
  margin-top: -56px;
  background-color: #3f4456 !important;
  position: absolute !important;
}
.Navigation-top /deep/ .el-submenu .el-menu-item {
  color: #fff;
}
.Navigation-top /deep/ .el-menu-item:hover {
  color: #44b549;
  background-color: #3f4456 !important;
}
.Navigation-top /deep/ .el-submenu__title:hover {
  color: #44b549 !important;
  background-color: #3f4456 !important;
}
.Navigation-top /deep/ .el-menu--collapse {
  height: 100%;
}
.Navigation-a {
  width: 64px;
}
.Navigation-x {
  width: 200px;
}
</style>