<template>
 <div class="main p-20 flex ">
   <div class="card flex j-between f1 m-r-10">
   <div><i class="iconfont icon-renqunfenxi F40"></i></div>
   <div>
   <div>New Visit</div>
   <countTo :startVal='startVal' :endVal='visits' :duration='3000'></countTo>
   </div>
  </div>
  <div class="card flex j-between f1 m-r-10">
   <i class="iconfont icon-xiaoxi F40"></i>
   <div>
   <div>messages</div>
   <countTo :startVal='startVal' :endVal='messages' :duration='3000'></countTo>
   </div>
  </div>
  <div class="card flex j-between f1 m-r-10">
   <i class="iconfont icon-qian F40"></i>
   <div>
   <div>Purchases</div>
   <countTo :startVal='startVal' :endVal='purchases' :duration='3000'></countTo>
   </div>
  </div>
  <div class="card flex j-between f1">
   <i class="iconfont icon-gouwuche F40"></i>
  <div>
   <div>Shopping</div>
   <countTo :startVal='startVal' :endVal='shopping' :duration='3000'></countTo>
  </div>
  </div>
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
     visits:null,
     messages:null,
     purchases:null,
     shopping:null,
     }
   },
   methods: {
   getDate(){
     axios.get('/api/homeData').then(res=>{
       console.log(res.data.data);
       this.list = res.data.data
       this.visits=res.data.data.visits
       this.messages=res.data.data.messages
       this.purchases=res.data.data.purchases
       this.shopping=res.data.data.shopping
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
.card{
  box-shadow: 0 0 3px #ccc;
}
</style>
