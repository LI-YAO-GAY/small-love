<template>
 <div>
  <div class="main p-20">
    <div class="nav flex j-end p-10">
     <el-button type="primary" size="small">查看</el-button>
     <el-button type="danger" size="small">发布</el-button>
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
.main{
  background: rgb(240, 242, 245);
  height: calc(100vh - 100px);
  position: relative;
}
.nav{
background: rgb(89,165,134);
}
</style>