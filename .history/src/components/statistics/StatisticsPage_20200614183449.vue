<template>
 <div> 
 <div class="main p-20">
  <div class="flex">
  <div class="flex a-center j-center f1"><div class="m-r-30">今日发布</div><i class="m-l-40 el-icon-check"></i></div>
  <div class="flex a-center j-center f1"><div class="m-r-30">原创文章</div><i class="m-l-40 el-icon-tickets"></i></div>
  <div class="flex a-center j-center f1"><div class="m-r-30">新留言</div><i class="m-l-40 el-icon-bell"></i></div>
  <div class="flex a-center j-center f1"><div class="m-r-30">新消息</div><i class="m-l-40 el-icon-phone-outline"></i></div>
  </div>
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
  height: calc(100vh - 100px);
  position: relative;
}
</style>