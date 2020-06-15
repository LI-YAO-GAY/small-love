<template>
  <div class="right p-20">
    <el-card class="box-card p-10">
      <div class="Drag F20">支持拖拽</div>
      <div class="dragDesc flex a-center m-tb-20">Element UI自带上传组件</div>
      <el-upload
        class="upload-demo"
        drag
        action=""
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <div class="Crop F20 m-t-20">支持裁剪</div>
      <div class="cropDesc flex a-center m-tb-20">vue-image-crop-upload</div>
      <div>
        <el-row>
          <el-button type="primary">上传图片</el-button>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
import "babel-polyfill";
import myUpload from "vue-image-crop-upload";
export default {
  name: "",
  props: {},
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
    getDeta(){}
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.dragDesc,
.cropDesc {
  width: 1000px;
  height: 40px;
  background: rgb(238, 238, 238);
}
.right {
  height: calc(100vh - 100px);
  background: rgb(240, 242, 245);
  position: relative;
}
</style>