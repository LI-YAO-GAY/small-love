<template>
 <div class="main p-20">
   <el-card class="flex j-between">
   <i class="iconfont icon-renqunfenxi"></i>
   <div>New Visit</div>
   <countTo :startVal='startVal'  :duration='3000'></countTo>
  </el-card>
 <div v-for="(item,index) in list" :key="index">
 </div>
 </div>
</template>

<script>
import countTo from 'vue-count-to';
import axios from 'axios';
 export default {
   name: '',
   props: {
   },
   components: {
      countTo ,
   },
   data () {
     return {
     list:{},
      startVal: 0,
     }
   },
   methods: {
   getDate(){
     axios.get('/api/homeData').then(res=>{
       console.log(res.data.data);
     }).catch(err=>{
       console.log(err);
     })
   }
   },
   mounted() {
  this.getDate()
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
