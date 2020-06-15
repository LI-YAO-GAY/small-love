<template>
  <div class="quit flex" >
    <div class="left1"></div>
    <div class="right flex j-center a-center w100p">
      <div class="flex a-column a-center">
        <div class="fw-600 F20 m-b-20">期待你下次光临</div>
        <el-row>
          <el-button type="primary">确定退出</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
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
.left1{
  width: 200px;
  height: 200px;
}
.right{
  margin-top: 200px;
}
</style>