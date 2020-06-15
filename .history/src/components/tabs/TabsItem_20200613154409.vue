<template>
 <div>
  <div class="main">
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="未读消息" name="first"></el-tab-pane>
    <el-tab-pane label="已读消息" name="second"></el-tab-pane>
    <el-tab-pane label="回收站" name="third"></el-tab-pane>
  </el-tabs>
  </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {

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
  background: rgb(240, 242, 245);
  position: relative;
}
</style>