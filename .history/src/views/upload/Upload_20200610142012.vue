<template>
  <div>
    <div class="flex">
      <div class="left"></div>
      <div class="right">
        <el-card class="box-card">
          <div class="Drag"></div>
          <div class="Crop"></div>
        </el-card>
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
.left {
  left: 200px;
}
</style>