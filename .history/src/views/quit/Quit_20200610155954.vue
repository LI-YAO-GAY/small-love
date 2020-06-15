<template>
  <div class="quit flex a-center j-center">
      <div class="flex a-column a-center">
        <div class="fw-600 F20 m-b-20">期待你下次光临</div>
        <el-row>
          <el-button type="primary" @click="leave">确定退出</el-button>
        </el-row>
      </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      flag: false
    };
  },
  methods: {
    leave() {
      this.flag = true;
      this.$confirm("此操作将重新登陆, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          if ((this.flag = true)) {
            localStorage.clear();
            this.$router.push("/login");
          }
        })
        .catch(() => {});
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.quit{
  width: 100%;
  height: calc(100vh - 60px);
  background: rgb(240,242,245);
  position: relative;
}
</style>