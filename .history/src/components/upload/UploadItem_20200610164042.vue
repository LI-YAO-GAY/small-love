<template>
  <div>
    <div class="flex">
      <div class="right p-20">
        <el-card class="box-card p-10">
          <div class="Drag F20">支持拖拽</div>
          <div class="dragDesc flex a-center m-tb-20">Element UI自带上传组件</div>

         <my-upload  
 5     @crop-success="cropSuccess" 
 6     @crop-upload-success="cropUploadSuccess"
 7     @crop-upload-fail="cropUploadFail"
 8     v-model="show" 
 9     :width="200" 
10     :height="200" 
11     img-format="png" 
12     :size="size"
13     langType='zh'
14     :noRotate='false'
15     field="Avatar1"
16     url="https://httpbin.org/post"></my-upload>
17     <img :src="imgDataUrl">

          <div class="Crop F20">支持裁剪</div>
          <div class="cropDesc flex a-center m-tb-20">vue-image-crop-upload</div>
          <div>
            <el-row>
              <el-button type="primary">上传图片</el-button>
            </el-row>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import 'babel-polyfill'; // es6 shim
import myUpload from 'vue-image-crop-upload';
export default {
  name: "",
  props: {},
  components: {
     "my-upload": myUpload
  },
  data() {
    return {
      imgDataUrl: "",
        show: false,
        size:2.1
    };
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
.dragDesc,
.cropDesc {
  width: 1000px;
  height: 40px;
  background: rgb(238, 238, 238);
}
</style>