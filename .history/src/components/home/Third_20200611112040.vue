<template>
  <div>
    <div class="main p-20 flex">
      <div class="f1 card a-center a-center flex">
        <ve-radar :data="chartData"></ve-radar>
      </div>
      <div class="f1 card m-lr-20 a-center a-center flex">
        <ve-pie :data="chartData"></ve-pie>
      </div>
      <div class="f1 card a-center a-center flex">
        <ve-histogram :data="chartData"></ve-histogram>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      chartData: {
        columns: [],
        rows: []
      }
    };
  },
  methods: {
   getData(){
     axios.get("/api//radarChat").then(res=>{
       console.log(res.data.data);
     }).catch(err=>{
       console.log(err);
     })
   } 
  },
  mounted() {
    
  },
  watch: {},
  computed: {}
}
</script>

<style scoped lang='scss'>
.main {
  background: rgb(240, 242, 245);
  position: relative;
}
.card {
  box-shadow: 0 0 4px #999;
}
</style>