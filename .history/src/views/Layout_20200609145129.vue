<template>
  <div >
    <el-container class="container">
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
.container{
  width: 100%;
  height: 100%;
}
.el-header{
  padding: 0;
}
</style>