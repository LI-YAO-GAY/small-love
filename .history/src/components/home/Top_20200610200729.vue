<template>
 <div class="main p-20">
   <el-card class="flex j-between">
   <i class="iconfont icon-renqunfenxi"></i>
   <div>New Visit</div>
   <countTo :startVal='startVal' :endVal='endVal' :duration='3000'></countTo>
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
     list:[],
     startVal:0
     }
   },
   methods: {
   getDate(){
     axiox.get('/api/homeData').then(res=>{
       console.log(res.data);
     })
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
