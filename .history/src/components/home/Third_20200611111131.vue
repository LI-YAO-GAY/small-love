<template>
  <div>
    <div class="main p-20 flex">
       <div class="f1 card a-center a-center flex">
        <ve-radar :data="chartData" ></ve-radar>
      </div>
      <div class="f1 card m-lr-20 a-center a-center flex">
        <ve-pie :data="chartData2" ></ve-pie>
      </div>
       <div class="f1 card a-center a-center flex">
        <ve-histogram :data="chartData" ></ve-histogram>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
     chartData: {
        columns: [],
        rows: []
      },
      // chartData2: {
      //   columns: [],
      //   rows: []
      // }
     }
   },
   methods: {
    getData() {
      axios
        .get("/api/radarChat")
        .then(res => {
          console.log(res.data.data);
          this.chartData.rows = res.data.data;
          this.chartData.columns = Object.keys(res.data.data[0]);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // getdata() {
    //   axios
    //     .get("/api/ringChat")
    //     .then(res => {
    //       console.log(res.data.data);
    //       this.chartData2.rows = res.data.data;
    //       this.chartData2.columns = Object.keys(res.data.data[0]);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
     
   },
   mounted() {
   this.getData()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.main {
  background: rgb(240, 242, 245);
  position: relative;
}
.card{
  box-shadow: 0 0 4px #999;
}
</style>