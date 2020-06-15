<template>
 <div class="main p-20 flex ">
   <div class="card flex j-between f1 m-r-20 a-center bg-fff p-lr-10">
   <div><i class="iconfont icon-renqunfenxi F50"></i></div>
   <div>
   <div class="m-b-10 color-gray">New Visit</div>
   <countTo :startVal='startVal' :endVal='visits' :duration='3000' class="F20 fw-500"></countTo>
   </div>
  </div>
  <div class="card flex j-between f1 m-r-20 a-center bg-fff p-lr-10">
   <i class="iconfont icon-xiaoxi F50"></i>
   <div>
   <div class="m-b-10 color-gray">messages</div>
   <countTo :startVal='startVal' :endVal='messages' :duration='3000' class="F20 fw-500"></countTo>
   </div>
  </div>
  <div class="card flex j-between f1 m-r-20 a-center bg-fff p-lr-10">
   <i class="iconfont icon-qian F50"></i>
   <div>
   <div class="m-b-10 color-gray">Purchases</div>
   <countTo :startVal='startVal' :endVal='purchases' :duration='3000' class="F20 fw-500"></countTo>
   </div>
  </div>
  <div class="card flex j-between f1 a-center bg-fff p-lr-10">
   <i class="iconfont icon-gouwuche F50"></i>
  <div>
   <div class="m-b-10 color-gray">Shopping</div>
   <countTo :startVal='startVal' :endVal='shopping' :duration='3000' class="F20 fw-500"></countTo>
  </div>
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
  height: 100px;
  box-shadow: 0 0 4px #999;
}
.icon-xiaoxi{

}
.icon-qian{

}
.icon-gouwuche{

}
.icon-renqunfenxi{

}
</style>
