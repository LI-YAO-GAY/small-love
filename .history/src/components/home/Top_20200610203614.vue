<template>
 <div class="main p-20 flex ">
   <el-card class="flex j-between f1 m-r-10">
   <i class="iconfont icon-renqunfenxi F20"></i>
   <div>
   <div>New Visit</div>
   <countTo :startVal='startVal' :endVal='endVal' :duration='3000'></countTo>
   </div>
  </el-card>
  <el-card class="flex j-between f1 m-r-10">
   <i class="iconfont icon-xiaoxi F20"></i>
   <div>Message</div>
   <countTo :startVal='startVal' :endVal='endVal' :duration='3000'></countTo>
  </el-card>
  <el-card class="flex j-between f1 m-r-10">
   <i class="iconfont icon-qian F20"></i>
   <div>Purchases</div>
   <countTo :startVal='startVal' :endVal='endVal' :duration='3000'></countTo>
  </el-card>
  <el-card class="flex j-between f1">
   <i class="iconfont icon-gouwuche F20"></i>
   <div>Shopping</div>
   <countTo :startVal='startVal' :endVal='endVal' :duration='3000'></countTo>
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
     endVal:null
     }
   },
   methods: {
   getDate(){
     axios.get('/api/homeData').then(res=>{
       console.log(res.data.data);
       this.list = res.data.data
       this.endVal=res.data.data.visits
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
