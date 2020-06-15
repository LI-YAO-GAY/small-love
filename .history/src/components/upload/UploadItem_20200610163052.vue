<template>
  <div>
    <div class="flex">
      <div class="right p-20">
        <el-card class="box-card">
          <div class="Drag F20">支持拖拽</div>
          <div class="dragDesc flex a-center">Element UI自带上传组件</div>
          <div class="Crop F20">支持裁剪</div>
          <div class="cropDesc flex a-center">vue-image-crop-upload</div>
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
  width: 200px;
}
.dragDesc , .cropDesc{
  width: 1000px;
  height: 40px;
  background: rgb(238,238,238);
}
</style>