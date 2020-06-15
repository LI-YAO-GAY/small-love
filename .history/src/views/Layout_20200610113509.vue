<template>
  <div>
    <el-container >
      <el-header>
        <NavPage></NavPage>
      </el-header>
      <el-container>
        <div style="width:200px">
        <el-aside width="200px">
          <SidePage></SidePage>
        </el-aside>
        </div>
        <el-main>
         <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavPage from "../components/homepage/NavPage";
import SidePage from "../components/homepage/SidePage";
export default {
  name: "",
  props: {},
  components: {
    NavPage,
    SidePage
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-header {
  padding: 0;
  height: 0;
   position: fixed;
  z-index: 1;
}
.el-aside {
  background: rgb(52, 64, 85);
  height: 100%;
  position: fixed;
}
.el-main{
  z-index: -1;
  position: fixed;
  height: 100%;
  width: 100%;
  padding: 0;
  text-align: center;
  background: rgb(240,242,245);
}
</style>