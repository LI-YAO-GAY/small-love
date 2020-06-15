<template>
 <div>
<div class="main p-20">
<el-card>
sdgsdfgdsj
</el-card>
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
   getDate(){
     axios.get('/api/homeChat ')
   }
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