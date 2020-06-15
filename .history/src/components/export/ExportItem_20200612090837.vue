<template>
 <div>
  <div >
  <el-input v-model="input" placeholder="请输入你想搜索的商品名称"></el-input>
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
     input:''
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
.el-input{
  width: 300px;
  margin: 20px 0 0 20px;
}
</style>
