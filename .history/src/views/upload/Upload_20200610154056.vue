<template>
  <div>
    <div class="flex">
      <div class="left"></div>
      <div class="right p-20">
        <el-card class="box-card">
          <div class="Drag">支持拖拽</div>
          <div class="dragDesc">Element UI自带上传组件</div>
          <div class="Crop">支持裁剪</div>
          <div class="cropDesc">vue-image-crop-upload</div>
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


</style>