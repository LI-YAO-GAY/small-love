<template>
  <div>
    <el-container >
      <el-header>
        <NavPage></NavPage>
      </el-header>
      <el-container>

        <el-aside width="200px">
          <SidePage></SidePage>
        </el-aside>
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
   width: 100%;
}
.el-aside {
  padding: 0;
  margin-top: 60px;
  background: rgb(52, 64, 85);
  height: 100%;
  position: fixed;
}
.el-main{
  margin-top: 60px;
  width: 100%-200px;
  height: 90vh;
  padding: 0;
  background: rgb(240,242,245);
  position: relative;
  left:200px;
}
</style>