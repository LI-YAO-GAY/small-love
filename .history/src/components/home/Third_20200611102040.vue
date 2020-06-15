<template>
  <div>
    <div class="main p-20">
      <el-card>
        <ve-radar :data="chartData1" ></ve-radar >
        <ve-pie :data="chartData2" ></ve-pie >
        <ve-histogram :data="chartData3" ></ve-histogram >
      </el-card>
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
     chartData1: {
        columns1: [],
        rows1: []
      },
      chartData2: {
        columns2: [],
        rows2: []
      },
      chartData3: {
        columns3: [],
        rows3: []
      }
     }
   },
   methods: {
    getData() {
      axios
        .get("/api/radarChat ")
        .then(res => {
          console.log(res.data.data);
          this.chartData.rows = res.data.data;
          this.chartData.columns = Object.keys(res.data.data[0]);
        })
        .catch(err => {
          console.log(err);
        });
    },
     getdata() {
      axios
        .get("/api/ringCha")
        .then(res => {
          console.log(res.data.data);
          this.chartData.rows = res.data.data;
          this.chartData.columns = Object.keys(res.data.data[0]);
        })
        .catch(err => {
          console.log(err);
        });
    },
      Getdata() {
      axios
        .get("/api/homeData")
        .then(res => {
          console.log(res.data.data);
          this.chartData.rows = res.data.data;
          this.chartData.columns = Object.keys(res.data.data[0]);
        })
        .catch(err => {
          console.log(err);
        });
    }
   },
   mounted() {
   this.getData()
   this.getdata()
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