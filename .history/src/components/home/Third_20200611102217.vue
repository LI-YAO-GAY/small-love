<template>
  <div>
    <div class="main p-20">
      <el-card>
        <ve-radar :data="chartData1"></ve-radar>
        <ve-pie :data="chartData2"></ve-pie>
        <ve-histogram :data="chartData3"></ve-histogram>
      </el-card>
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
      chartData1: {
        columns: [],
        rows: []
      },
      chartData2: {
        columns: [],
        rows: []
      },
      chartData3: {
        columns: [],
        rows: []
      }
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/radarChat ")
        .then(res => {
          console.log(res.data.data);
          this.chartData1.rows = res.data.data;
          this.chartData1.columns = Object.keys(res.data.data[0]);
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
          this.chartData2.rows = res.data.data;
          this.chartData2.columns = Object.keys(res.data.data[0]);
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
          this.chartData3.rows = res.data.data;
          this.chartData3.columns = Object.keys(res.data.data[0]);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
    this.getdata();
    this.Getdata();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.main {
  height: calc(100vh - 100px);
  background: rgb(240, 242, 245);
  position: relative;
}
</style>