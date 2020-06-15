<template>
 <div class="main p-20">
   <el-card class="">
   <i class="el-icon-edit"></i>
   <i class="iconfont icon-renqunfenxi"></i>
  </el-card>
 <div v-for="(item,index) in list" :key="index">
 </div>
 </div>
</template>

<script>
import countTo from 'vue-count-to';
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
     list:[]
     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.main {
  height: calc(100vh - 100px);
  background: rgb(240, 242, 245);
  position: relative;
}
</style>
