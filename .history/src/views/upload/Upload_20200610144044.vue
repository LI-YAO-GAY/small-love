<template>
  <div>
    <div class="flex">
      <div class="left"></div>
      <div class="right w100p">
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
  left: 200px;
}
.el-card{
  width: 800px;
  height: 500px;
}
</style>