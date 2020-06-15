<template>
  <div>
    <div class="main p-20">
      <el-card>
        <ve-line :data="chartData" ></ve-line>
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
     chartData: {
        columns: [],
        rows: []
      }
     }
   },
   methods: {
    getDate() {
      axios
        .get("/api/ringChat")
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