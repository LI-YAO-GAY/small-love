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
        <el-main   width="main">
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
}
.el-aside {
  background: rgb(52, 64, 85);
  height: 100%;
  position: fixed;
}
.el-main{

  height: 100%;
   padding: 0;
}
</style>