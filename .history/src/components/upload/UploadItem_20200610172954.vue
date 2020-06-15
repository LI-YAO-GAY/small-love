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
16     url="/api/upload/post"></my-upload>
17     <img :src="imgDataUrl">
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
     "my-upload": myUpload
  },
  data() {
    return {
       imgDataUrl: "",
        show: false,
        size:2.1
    };
  },
  methods: {
    getDeta(){},
    toggleShow() {
            this.show = !this.show;
        },
        cropSuccess(imgDataUrl, field) {
            console.log('-------- crop success --------',imgDataUrl, field);
        },
        //上传成功回调
        cropUploadSuccess(jsonData, field){
            console.log('-------- upload success --------');
            this.imgDataUrl = jsonData.files.Avatar1;
            console.log(jsonData);
            console.log('field: ' + field);
        },
        //上传失败回调
        cropUploadFail(status, field){
            console.log('-------- upload fail --------');
            console.log('上传失败状态'+ status);
            console.log('field: ' + field);
        }
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